import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import ResourceCard from "../../components/learning/ResourceCard";
import { dsaResources } from "../../data/dsa";
import { dbmsResources } from "../../data/dbms";
import { osResources } from "../../data/os";
import { cnResources } from "../../data/cn";
import { oopResources } from "../../data/oop";
import { aiResources } from "../../data/ai";

export const Route = createFileRoute("/_app/learning-resources")({
  component: LearningResources,
  head: () => ({ meta: [{ title: "Learning Resources — CareerPilot AI" }] }),
});

const resourceMap: Record<string, typeof dsaResources> = {
  DSA: dsaResources,
  DBMS: dbmsResources,
  OS: osResources,
  CN: cnResources,
  OOP: oopResources,
  AI: aiResources,
};

const categories = ["DSA", "DBMS", "OS", "CN", "OOP", "AI"];

function updateStatsOnLearn(cat: string, title: string) {
  try {
    const raw = localStorage.getItem("careerpilot_users");
    if (!raw) return;
    const users = JSON.parse(raw);
    const email = localStorage.getItem("careerpilot_session");
    if (!email) return;
    const user = users.find((u: any) => u.email === email);
    if (!user) return;
    if (!user.stats) {
      user.stats = { readinessScore: 0, skillsMastered: 0, totalSkills: 32, atsScore: null, mockInterviews: 0, streak: 0, technicalSkills: 0, communication: 0, problemSolving: 0, resumeQuality: 0, interviewConfidence: 0 };
    }
    user.stats.skillsMastered = Math.min(user.stats.skillsMastered + 1, user.stats.totalSkills);
    if (cat === "DSA") user.stats.problemSolving = Math.min(user.stats.problemSolving + 8, 100);
    if (cat === "OS" || cat === "CN") user.stats.technicalSkills = Math.min(user.stats.technicalSkills + 8, 100);
    if (cat === "OOP") user.stats.technicalSkills = Math.min(user.stats.technicalSkills + 5, 100);
    if (cat === "AI") user.stats.technicalSkills = Math.min(user.stats.technicalSkills + 5, 100);
    if (cat === "DBMS") user.stats.technicalSkills = Math.min(user.stats.technicalSkills + 5, 100);
    user.stats.readinessScore = Math.round(
      (user.stats.technicalSkills + user.stats.communication + user.stats.problemSolving + user.stats.resumeQuality + user.stats.interviewConfidence) / 5
    );
    if (!user.activities) user.activities = [];
    user.activities.unshift({ text: `Opened ${cat} resource: ${title}`, time: "Just now" });
    localStorage.setItem("careerpilot_users", JSON.stringify(users));
  } catch (e) {
    console.error("updateStatsOnLearn error:", e);
  }
}

function LearningResources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("DSA");
  const [opened, setOpened] = useState(0);

  const resources = resourceMap[category] || dsaResources;
  const filtered = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen = (title: string) => {
    setOpened((p) => p + 1);
    updateStatsOnLearn(category, title);
  };

  return (
    <>
      <PageHeader
        title="Learning Resources"
        subtitle="Curated resources for every subject — YouTube, notes, roadmaps & practice links."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60 text-sm min-w-[140px]"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-1.5 rounded-lg text-sm transition ${
              category === item
                ? "btn-primary font-medium"
                : "glass hover:bg-white/5"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
        <span>Showing {filtered.length} resources for {category}</span>
        <span>Opened: {opened}</span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((resource) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            type={resource.type}
            link={resource.link}
            onOpen={() => handleOpen(resource.title)}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground col-span-3 py-12">
            No resources found.
          </p>
        )}
      </div>
    </>
  );
}
