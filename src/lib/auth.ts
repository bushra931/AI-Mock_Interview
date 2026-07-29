export interface UserStats {
  readinessScore: number;
  skillsMastered: number;
  totalSkills: number;
  atsScore: number | null;
  mockInterviews: number;
  streak: number;
  technicalSkills: number;
  communication: number;
  problemSolving: number;
  resumeQuality: number;
  interviewConfidence: number;
}

export interface StoredUser {
  name: string;
  email: string;
  college: string;
  branch: string;
  graduationYear: string;
  password: string;
  verified?: boolean;
  stats?: UserStats;
  activities?: { text: string; time: string }[];
}

export type SafeUser = Omit<StoredUser, "password">;

export const DEFAULT_STATS: UserStats = {
  readinessScore: 0,
  skillsMastered: 0,
  totalSkills: 32,
  atsScore: null,
  mockInterviews: 0,
  streak: 0,
  technicalSkills: 0,
  communication: 0,
  problemSolving: 0,
  resumeQuality: 0,
  interviewConfidence: 0,
};

const USERS_KEY = "careerpilot_users";
const SESSION_KEY = "careerpilot_session";

export function getUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(user: StoredUser): { ok: true } | { ok: false; error: string } {
  const users = getUsers();
  if (users.find((u) => u.email === user.email)) {
    return { ok: false, error: "An account with this email already exists." };
  }
  users.push({ ...user, verified: false, stats: DEFAULT_STATS, activities: [] });
  saveUsers(users);
  setSession(user.email);
  return { ok: true };
}

export function authenticate(email: string, password: string): { ok: true; user: SafeUser } | { ok: false; error: string } {
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (!user) {
    return { ok: false, error: "No account found with this email." };
  }
  if (user.password !== password) {
    return { ok: false, error: "Incorrect password." };
  }
  setSession(email);
  const { password: _, ...safe } = user;
  return { ok: true, user: safe };
}

export function getCurrentUser(): SafeUser | null {
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return null;
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return null;
  if (!user.stats) user.stats = DEFAULT_STATS;
  if (!user.activities) user.activities = [];
  const { password: _, ...safe } = user;
  return safe;
}

export function markVerified(email: string) {
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (user) {
    user.verified = true;
    saveUsers(users);
  }
}

export function updateUserStats(updates: Partial<UserStats>) {
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return;
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (user) {
    if (!user.stats) user.stats = { ...DEFAULT_STATS };
    Object.assign(user.stats, updates);
    saveUsers(users);
  }
}

export function addActivity(activity: { text: string; time: string }) {
  const email = localStorage.getItem(SESSION_KEY);
  if (!email) return;
  const users = getUsers();
  const user = users.find((u) => u.email === email);
  if (user) {
    if (!user.activities) user.activities = [];
    user.activities.unshift(activity);
    saveUsers(users);
  }
}

export function setSession(email: string) {
  localStorage.setItem(SESSION_KEY, email);
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem(SESSION_KEY);
}
