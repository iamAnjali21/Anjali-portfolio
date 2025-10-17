import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendEmail from "./email.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Present" : "❌ Missing");

// Contact form route
app.post("/send-email", async (req, res) => {

   console.log("Request body:", req.body); // 👈
  const { name, email, message } = req.body ||{};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const result = await sendEmail({ name, email, message });

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));






