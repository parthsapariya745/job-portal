# Quick Start Guide - Google Login Setup

## 🚀 Tez Tarike Se Setup Karein

### Step 1: MongoDB Setup (Agar nahi hai to)

**Option A: MongoDB Atlas (Free Cloud Database - Recommended)**
1. https://www.mongodb.com/cloud/atlas/register par jao
2. Free account banao
3. "Create a cluster" (Free tier select karo)
4. Cluster ready hone ke baad "Connect" → "Connect your application" click karo
5. Connection string copy karo (aisa dikhega):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/job-portal?retryWrites=true&w=majority
   ```
6. Username aur password set karo (agar nahi kiya to)

**Option B: Local MongoDB (Agar install hai)**
- Connection string: `mongodb://localhost:27017/job-portal`

### Step 2: Google OAuth Credentials

**Detailed guide**: `GOOGLE_OAUTH_SETUP.md` file padho

**Quick Steps**:
1. https://console.cloud.google.com/ par jao
2. New project banao
3. "APIs & Services" → "Credentials" → "Create Credentials" → "OAuth client ID"
4. Web application select karo
5. Authorized redirect URI: `http://localhost:4000/api/auth/google/callback`
6. Client ID aur Client Secret copy karo

### Step 3: Backend .env File Setup

`backend/.env` file mein yeh add karo:

```env
# Server Port
PORT=4000

# Frontend URL (jo port use ho raha hai)
FRONTEND_URL=http://localhost:3001

# MongoDB Connection
# Option A: MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/job-portal?retryWrites=true&w=majority

# Option B: Local MongoDB
# MONGODB_URI=mongodb://localhost:27017/job-portal

# JWT Secret (kuch bhi random string)
JWT_SECRET=my-super-secret-jwt-key-change-this-in-production-12345

# Session Secret (kuch bhi random string)
SESSION_SECRET=my-super-secret-session-key-change-this-in-production-12345

# Google OAuth Credentials (Google Cloud Console se mile credentials)
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:4000/api/auth/google/callback
```

**Important**: 
- `YOUR_CLIENT_ID_HERE` ko apne actual Client ID se replace karo
- `YOUR_CLIENT_SECRET_HERE` ko apne actual Client Secret se replace karo
- MongoDB Atlas use kar rahe ho to connection string mein `username` aur `password` ko replace karo

### Step 4: Backend Start Karein

```powershell
cd backend
npm install   # agar pehle nahi kiya
npm run dev
```

Agar sab theek hai to dikhega:
```
MongoDB connected
Backend server running on port 4000
```

### Step 5: Frontend Start Karein (Alag Terminal)

```powershell
npm run dev
```

### Step 6: Test Karein

1. Browser mein jao: `http://localhost:3001` (ya jo port use ho raha hai)
2. Login page par jao
3. "Continue with Google" button click karo
4. Google login page open hoga ✅

---

## ❌ Agar Error Aaye

### "Failed to connect to MongoDB"
- MongoDB Atlas use kar rahe ho to connection string check karo
- Internet connection check karo
- MongoDB Atlas mein IP whitelist check karo (0.0.0.0/0 allow karo development ke liye)

### "redirect_uri_mismatch"
- Google Cloud Console mein redirect URI exact match hona chahiye
- Check karo: `http://localhost:4000/api/auth/google/callback`

### "404 Not Found" on Google button
- Backend server running hai ya nahi check karo: `http://localhost:4000/health`
- `.env` file sahi location mein hai ya nahi (`backend/.env`)

### "Google OAuth env vars not set"
- `.env` file mein `GOOGLE_CLIENT_ID` aur `GOOGLE_CLIENT_SECRET` add karo
- Backend server restart karo

---

## 📝 Checklist

- [ ] MongoDB setup ho gaya (Atlas ya Local)
- [ ] Google Cloud Console se credentials mil gaye
- [ ] `backend/.env` file bana di aur sab values add ki
- [ ] Backend server start ho gaya aur "MongoDB connected" dikha
- [ ] Frontend server start ho gaya
- [ ] Google login button click karne par Google login page open ho raha hai

---

**Help chahiye?** `GOOGLE_OAUTH_SETUP.md` file padho detailed instructions ke liye!

