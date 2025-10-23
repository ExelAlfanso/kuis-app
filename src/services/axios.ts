import axios from "axios";

// Create an axios instance with default settings
const api = axios.create({
  baseURL: "https://opentdb.com", // ✅ base API URL
  timeout: 10000, // optional timeout (10s)
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
