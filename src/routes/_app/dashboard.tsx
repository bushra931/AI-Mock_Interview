import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import {
  TrendingUp,
  Target,
  FileText,
  Mic,
  Flame,
  ArrowRight,
  Clock,
  Inbox,
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Dashboard — CareerPilot AI" }] }),
});

const nextSteps = [
  { title: "System Design Basics", meta: "Roadmap · 45 min", href: "/roadmap" },
  { title: "Behavioral Interview Practice", meta: "Mock Interview", href: "/interview" },
  { title: "Optimize Resume for Product Roles", meta: "ATS", href: "/resume" },
  { title: "Set Your Career Goal", meta: "Get started", href: "/career-goal" },
];

const readinessAreas = [
  { key: "technicalSkills" as const, label: "Technical Skills" },
  { key: "communication" as const, label: "Communication" },
  { key: "problemSolving" as const, label: "Problem Solving" },
  { key: "resumeQuality" as const, label: "Resume Quality" },
  { key: "interviewConfidence" as const, label: "Interview Confidence" },
];

function DashboardPage() {
  const user = getCurrentUser();
  const name = user?.name || "there";
  const s = user?.stats;

  const statCards = [
    { label: "Readiness Score", value: s ? `${s.readinessScore}%` : "0%", icon: TrendingUp, tone: "from-fuchsia-500 to-purple-500" },
    { label: "Skills Mastered", value: s ? `${s.skillsMastered}/${s.totalSkills}` : "0/32", icon: Target, tone: "from-purple-500 to-indigo-500" },
    { label: "ATS Score", value: s?.atsScore != null ? `${s.atsScore}` : "—", icon: FileText, tone: "from-indigo-500 to-blue-500" },
    { label: "Mock Interviews", value: s ? `${s.mockInterviews}` : "0", icon: Mic, tone: "from-pink-500 to-fuchsia-500" },
  ];

  return (
    <>
      <PageHeader
        title={<>Welcome back, <span className="text-gradient">{name}</span></>}
        subtitle="Here's your placement readiness at a glance."
        actions={
          <div className="glass rounded-xl px-4 py-2 flex items-center gap-2 text-sm">
            <Flame className="h-4 w-4 text-orange-400" />
            <span>{s?.streak || 0}-day streak</span>
          </div>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((c) => (
          <div key={c.label} className="glass rounded-2xl p-5">
            <div className={`inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${c.tone}`}>
              <c.icon className="h-5 w-5 text-white" />
            </div>
            <div className="mt-4 text-3xl font-bold">{c.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Placement Readiness</h3>
            <span className="text-xs text-muted-foreground">Updated today</span>
          </div>
          <div className="mt-6 space-y-4">
            {readinessAreas.map((r) => {
              const value = s?.[r.key] ?? 0;
              return (
                <div key={r.key}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{r.label}</span>
                    <span className="text-muted-foreground">{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${value}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold">Recommended Next</h3>
          <div className="mt-4 space-y-3">
            {nextSteps.map((n) => (
              <Link
                key={n.title}
                to={n.href}
                className="flex items-center justify-between rounded-xl p-3 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium">{n.title}</div>
                  <div className="text-xs text-muted-foreground">{n.meta}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 glass rounded-2xl p-6">
        <h3 className="font-semibold">Recent Activity</h3>
        {user?.activities && user.activities.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {user.activities.map((a, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5">
                  <span className="h-4 w-4 text-primary-glow" />
                </div>
                <span className="flex-1">{a.text}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {a.time}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 text-center py-8 text-muted-foreground">
            <Inbox className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No activity yet. Start your placement journey!</p>
          </div>
        )}
      </div>
    </>
  );
}
