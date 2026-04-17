// app/api/contribute/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, role, message } = await req.json()

    // ── Basic server-side validation ──────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // ── Nodemailer transporter ────────────────────────────────────
    // Uses Gmail + App Password. Other providers (Outlook, SMTP, etc.) work too.
    // Store credentials in .env.local — NEVER hard-code them here.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,   // your Gmail address, e.g. team@gmail.com
        pass: process.env.SMTP_PASS,   // Gmail App Password (not your login password)
      },
    })

    // ── Email to YOUR team (notification) ────────────────────────
    await transporter.sendMail({
      from: `"Unscripted India" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,   // e.g. contribute@unscriptedindia.in
      replyTo: email,                      // reply goes straight to contributor
      subject: `New contribution request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; color: #111;">
          <h2 style="margin-bottom: 4px;">New Contribution Request</h2>
          <p style="color: #555; margin-top: 0;">Submitted via unscriptedindia.in</p>
          <hr style="border:none; border-top:1px solid #eee; margin: 20px 0;" />

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding: 8px 0; color:#888; width:100px;">Name</td>
              <td style="padding: 8px 0; font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color:#888;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color:#888;">Role</td>
              <td style="padding: 8px 0;">${role || '—'}</td>
            </tr>
          </table>

          <hr style="border:none; border-top:1px solid #eee; margin: 20px 0;" />

          <p style="color:#888; margin-bottom:6px; font-size:13px;">MESSAGE</p>
          <p style="background:#f9f9f9; padding:16px; border-radius:8px; white-space:pre-wrap;">${message}</p>
        </div>
      `,
    })

    // ── Auto-reply to the contributor ─────────────────────────────
    await transporter.sendMail({
      from: `"Unscripted India" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; color: #111;">
          <h2>Thanks for reaching out, ${name.split(' ')[0]}!</h2>
          <p>We've received your contribution request and our editorial team will get back to you within <strong>48 hours</strong>.</p>
          <p style="color:#555;">In the meantime, feel free to explore <a href="https://unscriptedindia.in">unscriptedindia.in</a>.</p>
          <br/>
          <p style="color:#888; font-size:13px;">— The Unscripted India Team</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contribute/route] Error sending email:', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}