
import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",   // Gmail SMTP
      port: 587,
      secure: false,            // use TLS
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,  // sender (user who filled contact form)
      to: process.env.EMAIL_USER,    // your receiving email
      subject: `📩 New message from ${name}`, 
       text: `Email: ${email}\nMessage: ${message}`,
    });

    return { success: true, message: "✅ Email sent successfully!" };
  } catch (error) {
    console.error("❌ Error in sendEmail:", error);
    return { success: false, message: "Failed to send email" };
  }
};

export default sendEmail;















































