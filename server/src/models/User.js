import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String },
    googleId: { type: String },
    isVerified: { type: Boolean, default: false },
    otpCode: { type: String },
    otpExpiresAt: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
