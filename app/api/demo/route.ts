import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Define the expected request body structure
interface DemoFormData {
  email: string
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  message?: string
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: DemoFormData = await request.json()

    // Validate required fields
    if (!data.email || !data.firstName || !data.lastName || !data.companyName || !data.jobTitle) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 })
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp-relay.sendinblue.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || "your-verified-brevo-email@example.com",
        pass: process.env.EMAIL_PASSWORD || "",
      },
    })

    // Prepare the email content
    const emailContent = `
Hi team,

A new demo request has been submitted through the CryptoComply website. Please reach out to schedule a demonstration.

Submission details:
Name: ${data.firstName} ${data.lastName}
Job Title: ${data.jobTitle}
Company: ${data.companyName}
Email: ${data.email}
${data.message ? `Message: ${data.message}` : ""}

Next step: contact them to schedule a demo and provide product information.

Best,
CryptoComply System

---------------------------
Submitted on: ${new Date().toLocaleString()}
    `

    // Format HTML version of the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p style="color: #2c2e2e;">Hi team,</p>
        <p style="color: #2c2e2e;">A new demo request has been submitted through the CryptoComply website. Please reach out to schedule a demonstration.</p>
        
        <div style="border-left: 4px solid #bed903; padding-left: 15px; margin: 20px 0;">
          <h3 style="color: #2c2e2e; margin-top: 0;">Submission details:</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Job Title:</strong> ${data.jobTitle}</p>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.message ? `<p><strong>Message:</strong><br/>${data.message.replaceAll("\n", "<br/>")}</p>` : ""}
        </div>
        
        <p style="color: #2c2e2e;"><strong>Next step:</strong> contact them to schedule a demo and provide product information.</p>
        
        <p style="color: #2c2e2e;">Best,<br/>CryptoComply System</p>
        
        <p style="color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    `

    // Send the email
    const info = await transporter.sendMail({
      from: `"CryptoComply Website" <${process.env.EMAIL_USER || "noreply@cryptocomply.com"}>`,
      replyTo: data.email, // Set reply-to as the user's email
      to: "diegobartra@canariaconsulting.com, carolyn@canariaconsulting.com, ragi@burhum.com",
      subject: `New CryptoComply Demo Request – ${data.firstName} ${data.lastName}, ${data.companyName}`,
      text: emailContent,
      html: htmlContent,
    })

    console.log("Demo request email sent: %s", info.messageId)

    // Return success response
    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error("Error in demo form submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

