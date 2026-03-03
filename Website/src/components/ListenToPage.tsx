"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface ListenToPageProps {
  narrationText: string;
  wordsPerMinute?: number;
}

export default function ListenToPage({
  narrationText,
  wordsPerMinute = 150,
}: ListenToPageProps) {
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const wordCount = narrationText.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  const timeLabel = minutes <= 1 ? "1 min" : `${minutes} min`;

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Chrome workaround: prevent auto-cancellation during long utterances
  useEffect(() => {
    if (state !== "playing") return;
    const interval = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 14000);
    return () => clearInterval(interval);
  }, [state]);

  const handlePlayPause = useCallback(() => {
    const synth = window.speechSynthesis;

    if (state === "idle") {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(narrationText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setState("idle");
      utterance.onerror = () => setState("idle");
      utteranceRef.current = utterance;
      synth.speak(utterance);
      setState("playing");
    } else if (state === "playing") {
      synth.pause();
      setState("paused");
    } else if (state === "paused") {
      synth.resume();
      setState("playing");
    }
  }, [state, narrationText]);

  const handleStop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setState("idle");
  }, []);

  if (!supported) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        borderRadius: "999px",
        padding: "8px 18px 8px 12px",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.10)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.10)";
      }}
      onClick={state === "idle" ? handlePlayPause : undefined}
    >
      {/* Play/Pause button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePlayPause();
        }}
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "rgba(95, 217, 194, 0.20)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {state === "playing" ? (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <rect x="1" y="0" width="3" height="12" rx="1" fill="#5FD9C2" />
            <rect x="6" y="0" width="3" height="12" rx="1" fill="#5FD9C2" />
          </svg>
        ) : (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M1 1L9 6L1 11V1Z" fill="#5FD9C2" />
          </svg>
        )}
      </button>

      {/* Label */}
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          fontSize: "13px",
          color: "rgba(255, 255, 255, 0.60)",
          letterSpacing: "-0.01em",
        }}
      >
        {state === "idle" && "Listen to this page"}
        {state === "playing" && "Listening..."}
        {state === "paused" && "Paused"}
      </span>

      {/* Separator */}
      <span style={{ color: "rgba(255, 255, 255, 0.20)", fontSize: "10px" }}>
        ·
      </span>

      {/* Duration or Stop */}
      {state === "idle" ? (
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.35)",
          }}
        >
          ~{timeLabel}
        </span>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleStop();
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          title="Stop"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect
              width="10"
              height="10"
              rx="1.5"
              fill="rgba(255, 255, 255, 0.35)"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
