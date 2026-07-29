const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function sendVerificationEmail(email: string, name: string): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error || "Failed to send verification email." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not connect to the server." };
  }
}

export async function verifyEmailToken(token: string): Promise<{ ok: true; email: string; name: string } | { ok: false; error: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/auth/verify-email?token=${encodeURIComponent(token)}`);
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error || "Verification failed." };
    return { ok: true, email: data.email, name: data.name };
  } catch {
    return { ok: false, error: "Could not connect to the server." };
  }
}

export async function checkEmailVerified(email: string): Promise<{ ok: true; verified: boolean } | { ok: false; error: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/auth/status?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error || "Failed to check status." };
    return { ok: true, verified: data.verified };
  } catch {
    return { ok: false, error: "Could not connect to the server." };
  }
}
