import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; 

// Load environment variables from .env file
dotenv.config(); // 👈 sabse upar rakho

// Check env values in console
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Present" : "❌ Missing");

const __dirname = path.resolve(); // Get the current directory
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the React app
 app.use(express.static(path.join(__dirname, "/anjali-portfolio/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "anjali-portfolio" ,"build" ,"index.html"));
// });

// 👉 Configure SMTP transport (example: Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // stored in .env
    pass: process.env.EMAIL_PASS, // app password stored in .env
  },
});

app.get("/about", (req, res) => {  
  res.send("Welcome to the Email API!"); // Simple welcome message
});
app.get("/contact",(req,res)=>{
  res.send("Contact us at: " + process.env.EMAIL_USER); // Contact info
});
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, 
    subject: `New Message from ${name}`,
    text: message,
  };

  try {
   transporter.sendMail(mailOptions);
    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Email failed to send." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
