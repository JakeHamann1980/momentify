"use client";

import { useEffect, useRef } from "react";

export function useSessionTracker(slug: string, authorized: boolean) {
  const sentEnd = useRef(false);
  const sessionId = useRef<string | null>(null);
  const startTime = useRef(0);

  useEffect(() => {
    if (!authorized) return;

    const id = crypto.randomUUID();
    sessionId.current = id;
    startTime.current = Date.now();
    sentEnd.current = false;

    const params = new URLSearchParams(window.location.search);

    fetch("/api/prototypes/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "start",
        sessionId: id,
        slug,
        referrer: document.referrer || "Direct",
        utmSource: params.get("utm_source") || null,
        utmMedium: params.get("utm_medium") || null,
        utmCampaign: params.get("utm_campaign") || null,
      }),
    }).catch(() => {});

    function sendEnd() {
      if (sentEnd.current || !sessionId.current) return;
      sentEnd.current = true;
      const durationMs = Date.now() - startTime.current;
      const body = JSON.stringify({
        action: "end",
        sessionId: sessionId.current,
        slug,
        durationMs,
      });
      navigator.sendBeacon(
        "/api/prototypes/analytics",
        new Blob([body], { type: "application/json" })
      );
    }

    function onVisibilityChange() {
      if (document.visibilityState === "hidden") {
        sendEnd();
      }
    }

    window.addEventListener("beforeunload", sendEnd);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      sendEnd();
      window.removeEventListener("beforeunload", sendEnd);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [slug, authorized]);
}
