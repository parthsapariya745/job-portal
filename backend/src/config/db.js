import mongoose from "mongoose"

export async function connectDB(mongoUri) {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not set. Please check your .env file.")
  }

  // If already connected, return
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected")
    return
  }

  try {
    await mongoose.connect(mongoUri)
    console.log("✅ MongoDB connected successfully")
    
    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err)
    })

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected")
    })

    mongoose.connection.on("reconnected", () => {
      console.log("✅ MongoDB reconnected")
    })
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message)
    throw error
  }
}


