# Google OAuth Setup Guide (Hindi)

## Step 1: Google Cloud Console mein Project Banana

1. **Google Cloud Console** kholo:
   - Browser mein jao: https://console.cloud.google.com/
   - Agar pehle se account nahi hai, to Google account se sign in karo

2. **New Project** banao:
   - Top par "Select a project" dropdown click karo
   - "New Project" button click karo
   - Project name daalo: `Job Portal` (ya kuch bhi)
   - "Create" button click karo
   - 2-3 seconds wait karo, project ready ho jayega

## Step 2: OAuth Consent Screen Setup

1. **Left sidebar** se "APIs & Services" → "OAuth consent screen" par jao

2. **User Type** select karo:
   - Agar sirf aap test kar rahe ho → "External" select karo
   - "Create" button click karo

3. **App Information** fill karo:
   - **App name**: `Job Portal` (ya kuch bhi)
   - **User support email**: Apna email daalo
   - **Developer contact information**: Apna email daalo
   - "Save and Continue" click karo

4. **Scopes** (skip karo):
   - "Save and Continue" click karo (default scopes theek hain)

5. **Test users** (agar External select kiya hai):
   - "Add Users" button click karo
   - Apna email add karo (jis email se login karna hai)
   - "Add" click karo
   - "Save and Continue" click karo

6. **Summary**:
   - "Back to Dashboard" click karo

## Step 3: OAuth Credentials (Client ID & Secret) Banana

1. **Left sidebar** se "APIs & Services" → "Credentials" par jao

2. **Create Credentials** → "OAuth client ID" select karo

3. **Application type** select karo:
   - "Web application" select karo

4. **Name** daalo:
   - Example: `Job Portal Web Client`

5. **Authorized JavaScript origins** mein add karo:
   ```
   http://localhost:4000
   ```

6. **Authorized redirect URIs** mein add karo:
   ```
   http://localhost:4000/api/auth/google/callback
   ```

7. **Create** button click karo

8. **Credentials mil jayengi**:
   - **Client ID**: `123456789-abcdefghijklmnop.apps.googleusercontent.com` (aisa kuch)
   - **Client Secret**: `GOCSPX-abcdefghijklmnopqrstuvwxyz` (aisa kuch)
   - **Important**: Ye credentials copy karke safe rakho!

## Step 4: Backend mein Credentials Add Karna

1. `backend` folder mein `.env` file banao (agar nahi hai)

2. `.env` file mein yeh add karo:
   ```env
   PORT=4000
   FRONTEND_URL=http://localhost:3001
   
   MONGODB_URI=mongodb://localhost:27017/job-portal
   JWT_SECRET=my-super-secret-jwt-key-12345
   SESSION_SECRET=my-super-secret-session-key-12345
   
   # Google OAuth Credentials (yahan apne credentials paste karo)
   GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
   GOOGLE_CALLBACK_URL=http://localhost:4000/api/auth/google/callback
   ```

3. **Important**: 
   - `GOOGLE_CLIENT_ID` aur `GOOGLE_CLIENT_SECRET` ko apne actual credentials se replace karo
   - `.env` file ko **NEVER** git mein commit mat karo (security ke liye)

## Step 5: Test Karna

1. **Backend server** start karo:
   ```powershell
   cd backend
   npm run dev
   ```

2. **Frontend** start karo (alag terminal mein):
   ```powershell
   npm run dev
   ```

3. Browser mein jao: `http://localhost:3001` (ya jo port use ho raha hai)

4. Login page par "Continue with Google" button click karo

5. Google login page open hoga, apne email se login karo

6. Success! 🎉

## Troubleshooting

### Agar "redirect_uri_mismatch" error aaye:
- Google Cloud Console mein "Authorized redirect URIs" check karo
- Exact match hona chahiye: `http://localhost:4000/api/auth/google/callback`

### Agar "Access blocked" error aaye:
- OAuth consent screen mein "Test users" mein apna email add karo
- Ya "Publish" button click karo (production ke liye)

### Agar backend 404 de raha hai:
- Backend server running hai ya nahi check karo: `http://localhost:4000/health`
- `.env` file sahi location mein hai ya nahi check karo (`backend/.env`)

## Video Tutorial (Optional)

Agar confusion ho, to YouTube par search karo:
- "Google OAuth 2.0 setup Node.js"
- "Create Google OAuth credentials"

---

**Note**: Development ke liye `localhost` theek hai. Production mein actual domain use karna hoga.

