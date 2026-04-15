import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { BRAND } from "@/lib/gtm-config";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    const {
      recipients,
      subject,
      body,
      sender_name,
      cta_text,
      cta_url,
      pillar_color,
    } = (await req.json()) as {
      recipients: string[];
      subject: string;
      body: string;
      sender_name?: string;
      cta_text?: string;
      cta_url?: string;
      pillar_color?: string;
    };

    if (!subject || !body) {
      return NextResponse.json(
        { error: "Subject and body are required" },
        { status: 400 },
      );
    }

    if (!recipients?.length) {
      return NextResponse.json(
        { error: "At least one recipient is required" },
        { status: 400 },
      );
    }

    const fromDisplay = sender_name
      ? `${sender_name} via ${BRAND.registeredName} <${BRAND.fromEmail}>`
      : `${BRAND.registeredName} <${BRAND.fromEmail}>`;

    const ctaColor = pillar_color || BRAND.primaryColor;

    const ctaHtml =
      cta_text && cta_url
        ? `<div style="text-align:center;margin-top:28px;">
            <a href="${cta_url}" target="_blank" style="display:inline-block;background:${ctaColor};color:#fff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:600;font-size:15px;">
              ${cta_text}
            </a>
          </div>`
        : "";

    const escapedSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const escapedBody = body.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 20px;">
        <div style="text-align:center;margin-bottom:24px;">
          <img src="${BRAND.logoEmailUrl}" alt="${BRAND.name}" width="120" style="display:block;margin:0 auto 16px;" />
          <h1 style="margin:0;font-size:22px;color:#1A1A1A;">${escapedSubject}</h1>
        </div>
        <div style="color:#333;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapedBody}</div>
        ${ctaHtml}
        <p style="color:#999;font-size:12px;text-align:center;margin-top:32px;line-height:1.5;">
          Sent by ${BRAND.registeredName}
          <br />
          <a href="${BRAND.notificationSettingsUrl}" style="color:#bbb;text-decoration:underline;">Unsubscribe</a>
        </p>
      </div>
    `;

    let sent = 0;
    let failed = 0;

    for (const email of recipients) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromDisplay,
            to: email,
            subject,
            html,
          }),
        });

        if (res.ok) {
          sent++;
        } else {
          failed++;
          console.error(`Email failed for ${email}:`, await res.text());
        }
      } catch (err) {
        failed++;
        console.error(`Email error for ${email}:`, err);
      }
    }

    return NextResponse.json({ sent, failed, total: recipients.length });
  } catch (err) {
    console.error("Email route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
