import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true },
    passwordHash: String,
    provider: { type: String, default: "credentials" },
    googleId: String,
    role: { type: String, enum: ["candidate", "employer"], default: "candidate" }
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model("User", userSchema)


