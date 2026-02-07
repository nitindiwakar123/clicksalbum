import { Router } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import { z } from "zod";
import User from "../models/User.js";
import { sendOtpEmail } from "../lib/mailer.js";

const router = Router();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

router.post("/register", async (req, res) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const { name, email, password } = result.data;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    passwordHash,
    isVerified: false,
  });

  req.login(user, (error) => {
    if (error) {
      return res.status(500).json({ message: "Login failed" });
    }
    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.passwordHash) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.login(user, (error) => {
    if (error) {
      return res.status(500).json({ message: "Login failed" });
    }
    return res.json({ id: user.id, name: user.name, email: user.email });
  });
});

router.post("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });
});

router.post("/otp/request", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Account not found" });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  user.otpCode = await bcrypt.hash(code, 10);
  user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();

  await sendOtpEmail({ to: email, code });

  return res.json({ message: "OTP sent" });
});

router.post("/otp/verify", async (req, res) => {
  const { email, code } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.otpCode || !user.otpExpiresAt) {
    return res.status(400).json({ message: "OTP not requested" });
  }

  if (user.otpExpiresAt < new Date()) {
    return res.status(400).json({ message: "OTP expired" });
  }

  const valid = await bcrypt.compare(code, user.otpCode);
  if (!valid) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  user.isVerified = true;
  user.otpCode = undefined;
  user.otpExpiresAt = undefined;
  await user.save();

  return res.json({ message: "Email verified" });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_ORIGIN || "http://localhost:5173");
  }
);

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    isVerified: req.user.isVerified,
  });
});

export default router;
