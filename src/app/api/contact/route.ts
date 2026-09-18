import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, services, message } = body;

    // 1. Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please write a brief message about your project." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtppro.zoho.in";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || smtpUser || "info@kleetechnologies.com";

    // Validate that credentials exist in environment
    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP credentials: SMTP_USER or SMTP_PASS is not configured in environment variables.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please add SMTP credentials in environment variables." },
        { status: 500 }
      );
    }

    // 2. Transporter configuration with connection timeouts & dual-port fallback
    function getTransporter(port: number, secure: boolean) {
      return nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        requireTLS: !secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 12000,
        greetingTimeout: 10000,
        socketTimeout: 25000,
        tls: {
          minVersion: "TLSv1.2",
          rejectUnauthorized: false,
        },
      });
    }

    async function sendMailWithFallback(mailOptions: any) {
      const preferredPort = Number(process.env.SMTP_PORT) || 465;
      const isPreferredSecure = process.env.SMTP_SECURE === "true" || preferredPort === 465;

      const attempts = [
        { port: preferredPort, secure: isPreferredSecure },
        { port: preferredPort === 465 ? 587 : 465, secure: preferredPort !== 465 },
      ];

      let lastError: any;
      for (const attempt of attempts) {
        try {
          const transporter = getTransporter(attempt.port, attempt.secure);
          return await transporter.sendMail(mailOptions);
        } catch (err: any) {
          console.warn(`SMTP send attempt on port ${attempt.port} failed:`, err?.message);
          lastError = err;
        }
      }
      throw lastError;
    }

    const formattedServices = Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "General Inquiry";

    const senderEmail = smtpUser;

    // 3. Admin Notification Email (to KLEE team)
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 32px 28px; text-align: left; border-bottom: 3px solid #0e76bc; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 28px; }
            .badge { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
            .detail-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .detail-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
            .detail-table td.label { width: 140px; color: #64748b; font-weight: 500; }
            .detail-table td.value { color: #0f172a; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #0e76bc; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 10px; }
            .message-box h3 { margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
            .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>KLEE TECHNOLOGIES</h1>
              <p>New Project Lead from Website Contact Form</p>
            </div>
            <div class="content">
              <span class="badge">New Inquiry</span>
              <table class="detail-table">
                <tr>
                  <td class="label">Client Name:</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Company:</td>
                  <td class="value">${company || "Not specified"}</td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td class="value"><a href="mailto:${email}" style="color: #0e76bc; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone Number:</td>
                  <td class="value">${phone || "Not specified"}</td>
                </tr>
                <tr>
                  <td class="label">Services Needed:</td>
                  <td class="value">${formattedServices}</td>
                </tr>
              </table>

              <div class="message-box">
                <h3>Project Details & Requirements</h3>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              Submitted via klee-technologies.com • Reply directly to this email to contact ${name}.
            </div>
          </div>
        </body>
      </html>
    `;

    // Send primary email to KLEE team
    await sendMailWithFallback({
      from: `"KLEE Website Lead" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Project Enquiry: ${name}${company ? ` (${company})` : ""} - ${formattedServices}`,
      text: `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nServices: ${formattedServices}\n\nMessage:\n${message}`,
      html: adminHtml,
    });

    // 4. Send Confirmation / Auto-Reply to the Client
    try {
      const clientHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
              .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
              .header { background: #0b1120; padding: 32px 28px; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; }
              .header h1 span { color: #0e76bc; }
              .content { padding: 32px 28px; line-height: 1.65; }
              .content h2 { margin: 0 0 12px; font-size: 18px; color: #0f172a; font-weight: 600; }
              .content p { margin: 0 0 16px; font-size: 14px; color: #475569; }
              .summary-box { background: #f1f5f9; border-radius: 10px; padding: 18px; margin: 20px 0; font-size: 13px; color: #334155; }
              .footer { padding: 24px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>KLEE <span>TECHNOLOGIES</span></h1>
              </div>
              <div class="content">
                <h2>Thank you for reaching out, ${name}!</h2>
                <p>We've received your project inquiry regarding <strong>${formattedServices}</strong>. Our team is reviewing your requirements and will get back to you within 24 business hours.</p>
                <div class="summary-box">
                  <strong>Summary of your enquiry:</strong><br/>
                  ${company ? `• Company: ${company}<br/>` : ""}
                  • Services: ${formattedServices}<br/>
                  • Message: "${message.slice(0, 160)}${message.length > 160 ? "..." : ""}"
                </div>
                <p>If you have any urgent details to share, feel free to reply directly to this email or reach us at <a href="mailto:info@kleetechnologies.com" style="color: #0e76bc;">info@kleetechnologies.com</a>.</p>
              </div>
              <div class="footer">
                KLEE Technologies • T-Hub, Hyderabad • info@kleetechnologies.com
              </div>
            </div>
          </body>
        </html>
      `;

      await sendMailWithFallback({
        from: `"KLEE Technologies" <${senderEmail}>`,
        to: email,
        subject: `Thank you for contacting KLEE Technologies`,
        html: clientHtml,
      });
    } catch (clientMailError) {
      // Non-critical error: lead is already sent to admin
      console.warn("Client auto-reply failed to send:", clientMailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully submitted.",
    });
  } catch (error: any) {
    console.error("Failed to process contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
