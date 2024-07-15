const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// POST endpoint for handling form submissions
app.post("/send-email", (req, res) => {
  const {
    fullName,
    email,
    phone,
    checkInDate,
    checkOutDate,
    totalAdults,
    totalChildren,
    childrenAges,
    message,
  } = req.body;

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USE,
    to: process.env.EMAIL_TO, 
    cc: process.env.EMAIL_CC,
    subject: "New Message from Contact Form",
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-in Date:</strong> ${checkInDate}</p>
      <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
      <p><strong>Total Adults:</strong> ${totalAdults}</p>
      <p><strong>Total Children:</strong> ${totalChildren}</p>
      <p><strong>Children Ages:</strong> ${childrenAges.join(", ")}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      res.status(500).send("Error sending email");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
