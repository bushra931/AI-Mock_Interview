import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Award, Mail, Pencil } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

export const Route = createFileRoute("/_app/profile")({
  component: ProfilePage,
  head: () => ({ meta: [{ title: "Profile — CareerPilot AI" }] }),
});

const badges = [
  { name: "SQL Rockstar", tone: "from-emerald-500 to-teal-500" },
  { name: "DSA Warrior", tone: "from-purple-500 to-fuchsia-500" },
  { name: "Interview Ready", tone: "from-orange-500 to-rose-500" },
  { name: "Resume Master", tone: "from-blue-500 to-indigo-500" },
];

function ProfilePage() {
  const user = getCurrentUser();
  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <>
      <PageHeader
        title="Your Profile"
        subtitle="Your placement identity, at a glance."
        actions={<button className="glass rounded-xl px-4 py-2 text-sm inline-flex items-center gap-2"><Pencil className="h-4 w-4" /> Edit</button>}
      />

      <div className="glass rounded-3xl p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="grid h-24 w-24 place-items-center rounded-3xl btn-primary text-3xl font-bold">{initial}</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{user?.name || "User"}</h2>
            <p className="text-muted-foreground">{user?.branch || "Branch"} · {user?.college || "College"}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Mail className="h-4 w-4" /> {user?.email || "email@example.com"}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gradient">72%</div>
              <div className="text-xs text-muted-foreground">Readiness</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">3920</div>
              <div className="text-xs text-muted-foreground">XP</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">7</div>
              <div className="text-xs text-muted-foreground">Streak</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "SQL", "Python", "Git", "REST APIs", "MongoDB", "Tailwind"].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10">{s}</span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary-glow" />
            <h3 className="font-semibold">Badges</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((b) => (
              <div key={b.name} className={`rounded-2xl p-4 bg-gradient-to-br ${b.tone} text-white`}>
                <Award className="h-5 w-5" />
                <div className="mt-2 text-sm font-semibold">{b.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "PayFlow", desc: "Full-stack payment dashboard with Stripe.", stack: "Next.js · Postgres" },
              { name: "StudyBuddy AI", desc: "AI tutor for CS concepts using Gemini.", stack: "React · Node" },
              { name: "CampusEats", desc: "Food ordering app deployed for VIT.", stack: "React Native · Firebase" },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="font-semibold text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.desc}</div>
                <div className="text-xs text-primary-glow mt-3">{p.stack}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
