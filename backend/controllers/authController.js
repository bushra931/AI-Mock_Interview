import { registerAndSendVerification, verifyEmailToken, checkVerified } from "../services/authService.js";
import nodemailer from "nodemailer";

function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ETHEREAL_USER || "",
      pass: process.env.ETHEREAL_PASS || "",
    },
  });
}

export async function register(req, res) {
  try {
    const { email, name } = req.body;
    if (!email || !name) {
      return res.status(400).json({ error: "Email and name are required." });
    }

    const result = registerAndSendVerification(email, name);
    if (!result.ok) {
      return res.status(409).json({ error: result.error });
    }

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    const verificationLink = `${frontendUrl}/verify-email?token=${result.token}`;

    const transporter = getTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"CareerPilot AI" <noreply@careerpilot.ai>',
      to: email,
      subject: "Verify your email — CareerPilot AI",
      html: `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
        <h2>Welcome to CareerPilot AI!</h2>
        <p>Hi ${name},</p>
        <p>Please verify your email address to start your placement prep journey.</p>
        <a href="${verificationLink}" style="display:inline-block;padding:12px 24px;background:#6c5ce7;color:#fff;border-radius:8px;text-decoration:none;margin:16px 0;">Verify Email</a>
        <p style="color:#888;font-size:13px;">Or paste this link: ${verificationLink}</p>
        <p style="color:#888;font-size:13px;">If you didn't create an account, ignore this email.</p>
      </div>`,
    });

    console.log(`Verification email sent to ${email}, token: ${result.token}`);

    if (!process.env.SMTP_HOST) {
      console.log(`\n=== DEV MODE ===`);
      console.log(`Verification link: ${verificationLink}`);
      console.log(`================\n`);
    }

    res.json({ ok: true, message: "Verification email sent." });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Failed to send verification email." });
  }
}

export async function verify(req, res) {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ error: "Token is required." });
    }
    const result = verifyEmailToken(token);
    if (!result.ok) {
      return res.status(400).json({ error: result.error });
    }
    res.json({ ok: true, email: result.email, name: result.name });
  } catch (err) {
    console.error("Verify error:", err);
    res.status(500).json({ error: "Verification failed." });
  }
}

export async function status(req, res) {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }
    const result = checkVerified(email);
    res.json(result);
  } catch (err) {
    console.error("Status error:", err);
    res.status(500).json({ error: "Failed to check status." });
  }
}
