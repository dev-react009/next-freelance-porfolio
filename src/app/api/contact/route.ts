// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RecipientEmail!, 
      subject: `New message from ${name}`,
      replyTo: email,
      
    html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #4f46e5;">📬 New Message from ${name}</h2>

    <p><strong>From:</strong> ${name} (${email})</p>

    <div style="margin-top: 20px;">
      <p><strong>Message:</strong></p>
      <p style="background: #f9f9f9; padding: 12px; border-left: 4px solid #4f46e5; border-radius: 4px;">
        ${message.replace(/\n/g, '<br/>')}
      </p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

    <p style="font-size: 12px; color: #888;">You received this message via your portfolio contact form.</p>
  </div>
`
    });

    //check if Missing RecipientEmail environment variable"
    if (!process.env.RecipientEmail) {
      return NextResponse.json({ success: false, error: "Missing RecipientEmail environment variable" });
    }

    if (!data) {
      return NextResponse.json({ success: false, error: "Failed to send email" });
    }


    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error });
  }
}
