import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Define the expected request body structure
interface RegistrationFormData {
  firstName: string
  lastName: string
  jobTitle: string
  businessEmail: string
  company: string
  country: string
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: RegistrationFormData = await request.json()

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.jobTitle ||
      !data.businessEmail ||
      !data.company ||
      !data.country
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
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

A new user has just registered through the CryptoComply website access form. Please reach out to activate their account and complete onboarding.

Submission details:
Name: ${data.firstName} ${data.lastName}
Job Title: ${data.jobTitle}
Company: ${data.company}
Email: ${data.businessEmail}
Country: ${data.country}

Next step: contact them to activate their account and provide initial access instructions.

Best,
CryptoComply System

---------------------------
Submitted on: ${new Date().toLocaleString()}
    `

    // Format HTML version of the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p style="color: #2c2e2e;">Hi team,</p>
        <p style="color: #2c2e2e;">A new user has just registered through the CryptoComply website access form. Please reach out to activate their account and complete onboarding.</p>
        
        <div style="border-left: 4px solid #bed903; padding-left: 15px; margin: 20px 0;">
          <h3 style="color: #2c2e2e; margin-top: 0;">Submission details:</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Job Title:</strong> ${data.jobTitle}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Email:</strong> ${data.businessEmail}</p>
          <p><strong>Country:</strong> ${data.country}</p>
        </div>
        
        <p style="color: #2c2e2e;"><strong>Next step:</strong> contact them to activate their account and provide initial access instructions.</p>
        
        <p style="color: #2c2e2e;">Best,<br/>CryptoComply System</p>
        
        <p style="color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    `

    // Send the email
    const info = await transporter.sendMail({
      from: `"CryptoComply Website" <${process.env.EMAIL_USER || "noreply@cryptocomply.com"}>`,
      replyTo: data.businessEmail, // Set reply-to as the user's email
      to: "diegobartra@canariaconsulting.com, carolyn@canariaconsulting.com, ragi@burhum.com",
      subject: `New CryptoComply Website Registration – ${data.firstName} ${data.lastName}, ${data.company}`,
      text: emailContent,
      html: htmlContent,
    })

    console.log("Message sent: %s", info.messageId)

    // Return success response
    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error("Error in registration form submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

