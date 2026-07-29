import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "..", "data", "users.json");

function readUsers() {
  if (!existsSync(DATA_FILE)) return {};
  try {
    return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return {};
  }
}

function writeUsers(data) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export function registerAndSendVerification(email, name) {
  const users = readUsers();
  if (users[email]) {
    if (users[email].verified) {
      return { ok: false, error: "Email already registered and verified." };
    }
    const token = crypto.randomBytes(32).toString("hex");
    users[email] = { ...users[email], name, token, verified: false };
    writeUsers(users);
    return { ok: true, token };
  }
  const token = crypto.randomBytes(32).toString("hex");
  users[email] = { name, email, token, verified: false };
  writeUsers(users);
  return { ok: true, token };
}

export function verifyEmailToken(token) {
  const users = readUsers();
  for (const email of Object.keys(users)) {
    if (users[email].token === token && !users[email].verified) {
      users[email].verified = true;
      delete users[email].token;
      writeUsers(users);
      return { ok: true, email, name: users[email].name };
    }
  }
  return { ok: false, error: "Invalid or expired token." };
}

export function checkVerified(email) {
  const users = readUsers();
  if (!users[email]) return { ok: false, error: "Email not registered." };
  return { ok: true, verified: users[email].verified || false };
}
