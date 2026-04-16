import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** POST /api/contact — sends two emails:
 *  1. Notification to the atelier with the visitor's message
 *  2. Confirmation to the visitor
 */
export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    /* ── 1. Notification to the atelier ── */
    await resend.emails.send({
      from:    "Gökden Modaevi <iletisim@gokdenmodaevi.com>",
      to:      ["iletisim@gokdenmodaevi.com"],
      replyTo: email,
      subject: `Yeni İletişim Formu — ${name}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:24px;margin-bottom:24px">
            <h1 style="font-size:22px;font-weight:normal;letter-spacing:0.05em;margin:0">
              Gökden Modaevi
            </h1>
            <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin:4px 0 0">
              Yeni Müşteri Talebi
            </p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:10px 0;color:#888;width:120px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase">Ad Soyad</td>
              <td style="padding:10px 0">${name}</td>
            </tr>
            <tr style="border-top:1px solid #f0f0f0">
              <td style="padding:10px 0;color:#888;font-size:11px;letter-spacing:0.1em;text-transform:uppercase">E-posta</td>
              <td style="padding:10px 0"><a href="mailto:${email}" style="color:#1a1a1a">${email}</a></td>
            </tr>
            ${phone ? `
            <tr style="border-top:1px solid #f0f0f0">
              <td style="padding:10px 0;color:#888;font-size:11px;letter-spacing:0.1em;text-transform:uppercase">Telefon</td>
              <td style="padding:10px 0">${phone}</td>
            </tr>` : ""}
            <tr style="border-top:1px solid #f0f0f0">
              <td style="padding:10px 0;color:#888;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;vertical-align:top">Mesaj</td>
              <td style="padding:10px 0;line-height:1.7">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <div style="border-top:1px solid #e5e5e5;margin-top:32px;padding-top:16px;font-size:11px;color:#aaa;letter-spacing:0.05em">
            Gökden Modaevi · Atatürk Bulvarı 67/143 Kızılay, Ankara · gokdenmodaevi.com
          </div>
        </div>
      `,
    });

    /* ── 2. Confirmation to the visitor ── */
    await resend.emails.send({
      from:    "Gökden Modaevi <iletisim@gokdenmodaevi.com>",
      to:      [email],
      subject: "Talebiniz alındı — Gökden Modaevi",
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:24px;margin-bottom:32px">
            <h1 style="font-size:22px;font-weight:normal;letter-spacing:0.05em;margin:0">
              Gökden Modaevi
            </h1>
            <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#888;margin:4px 0 0">
              Ankara · Est. 1986
            </p>
          </div>

          <p style="font-size:15px;line-height:1.8;margin:0 0 16px">Sayın <strong>${name}</strong>,</p>

          <p style="font-size:15px;line-height:1.8;margin:0 0 16px">
            Talebiniz onaylanmıştır. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>

          <p style="font-size:13px;color:#666;line-height:1.8;margin:0 0 8px">
            <em>Your request has been approved. Our team will contact you as soon as possible.</em>
          </p>

          <div style="background:#f9f9f9;border-left:3px solid #1a1a1a;padding:16px 20px;margin:32px 0;font-size:13px;color:#555;line-height:1.8">
            <strong style="display:block;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:8px">Mesajınız</strong>
            ${message.replace(/\n/g, "<br/>")}
          </div>

          <div style="border-top:1px solid #e5e5e5;margin-top:40px;padding-top:20px">
            <p style="font-size:12px;color:#888;margin:0 0 4px">
              <strong style="color:#1a1a1a">Gökden Modaevi</strong>
            </p>
            <p style="font-size:12px;color:#aaa;margin:0 0 2px">Atatürk Bulvarı 67/143 Büyük Çarşı Kızılay, Ankara</p>
            <p style="font-size:12px;color:#aaa;margin:0 0 2px">(0312) 432 29 45 | +90 542 775 94 85</p>
            <p style="font-size:12px;color:#aaa;margin:0">
              <a href="https://gokdenmodaevi.com" style="color:#888">gokdenmodaevi.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
