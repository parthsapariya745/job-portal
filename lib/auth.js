// Auth utility functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("jobportal_token");
};

export const setToken = (token) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("jobportal_token", token);
};

export const removeToken = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("jobportal_token");
};

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    // Decode JWT token (without verification for client-side)
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("Error decoding token:", err);
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  removeToken();
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
};

