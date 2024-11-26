import nodemailer from 'nodemailer'

async function sendMessage({ name, email, subject, message }) {
  // Create a Nodemailer transporter object
  const transporter = nodemailer.createTransport({
    host: 'server.only.info',
    port: 465,
    secure: true, // true for 465, false for other ports
    tls: {rejectUnauthorized: false},
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.EMAIL_PASS
    },
  });

  // Define the email message
  const emailMessage = {
    from: `Contact Form <${process.env.SENDER_EMAIL}>`,
    to: `${process.env.NEXT_PUBLIC_APP_NAME} <info@${process.env.NEXT_PUBLIC_APP_DOMAIN}>`,
    replyTo: `${name} <${email}>`,
    subject: `New 📨 from ${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
  };

  await transporter.sendMail(emailMessage)
}

export async function POST(request: Request) {
  const reqData = await request.json()

  const name = reqData.name
  const email = reqData.email
  const subject = reqData.subject
  const message = reqData.message

  try {
    const body = {
      email,
      name,
      subject,
      message
    }
    
    if (!body.name || !body.email || !body.subject || !body.message) {
      return Response.json('Please fill out the form completely and try again', {
        status: 500,
      })
    }
    
    await sendMessage(body)
    return Response.json(`Thanks for reaching out to ${process.env.NEXT_PUBLIC_APP_NAME}. If there's a genuine issue, we'll get back to you shortly.`, {
      status: 200,
    })
  } catch (error) {
    console.error('Error sending contact message:', error)
    return Response.json('Oops! Something went wrong please try again', {
      status: 500,
    })
  }
}

export async function GET() {
  return new Response('Method GET Not Allowed', {
    status: 405,
    headers: { 'Allow': `${['POST']}` },
  })
}