import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import passport from "passport"
import "../services/googleStrategy.js"
import { User } from "../models/User.js"

const router = express.Router()

// Support both port 3000 and 3001 for development
const getFrontendUrl = () => {
  if (process.env.FRONTEND_URL) return process.env.FRONTEND_URL
  // Try to detect which port is being used (default to 3000, but allow 3001)
  return "http://localhost:3000"
}

const FRONTEND_URL = getFrontendUrl()
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-this"

function createToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  )
}

// Register with email/password
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ message: "User already exists" })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      passwordHash,
      role: role || "candidate"
    })

    const token = createToken(user)
    res.json({ token, user })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

// Login with email/password
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const user = await User.findOne({ email })
    if (!user || !user.passwordHash) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = createToken(user)
    res.json({ token, user })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

// Google OAuth start
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
)

// Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: `${FRONTEND_URL}/?login=failed` }),
  (req, res) => {
    const user = req.user
    const token = createToken(user)
    const redirectUrl = `${FRONTEND_URL}/?token=${token}`
    res.redirect(redirectUrl)
  }
)

export default router


