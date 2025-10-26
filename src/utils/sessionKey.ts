export function generateSessionKey(length = 16) {
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Keep the session key in memory only (not saved to localStorage)
export const sessionKey = generateSessionKey();
