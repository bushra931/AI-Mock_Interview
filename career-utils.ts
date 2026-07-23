export type SkillType =
  | "Frontend"
  | "Backend"
  | "Programming"
  | "Database"
  | "AI/ML"
  | "Cloud"
  | "DevOps"
  | "Cyber Security"
  | "UI/UX"
  | "Soft Skill";

export type StepType = "read" | "video" | "code" | "project";

export interface Step {
  id: string;
  title: string;
  type: StepType;
  hours: number;
  done?: boolean;
}

export interface Phase {
  title: string;
  weeks: string;
  steps: Step[];
}

export interface CareerGoal {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  averageSalary: string;
  requiredSkills: string[];
}

export interface SkillGap {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: SkillType;
  skills: string[];
}

/* ============================================================
   Career Database
============================================================ */

export const CAREER_GOALS: CareerGoal[] = [
  {
    id: "frontend",
    name: "Frontend Developer",
    description:
      "Build responsive and interactive user interfaces using modern web technologies.",
    icon: "💻",
    color: "#3B82F6",
    averageSalary: "₹6–18 LPA",
    requiredSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "REST API",
    ],
  },

  {
    id: "backend",
    name: "Backend Developer",
    description:
      "Develop scalable server-side applications and APIs.",
    icon: "⚙️",
    color: "#10B981",
    averageSalary: "₹7–20 LPA",
    requiredSkills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "JWT",
      "REST API",
      "Git",
      "Docker",
    ],
  },

  {
    id: "fullstack",
    name: "Full Stack Developer",
    description:
      "Work across frontend, backend and deployment.",
    icon: "🚀",
    color: "#8B5CF6",
    averageSalary: "₹8–25 LPA",
    requiredSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Docker",
    ],
  },

  {
    id: "ai",
    name: "AI / ML Engineer",
    description:
      "Develop intelligent applications using Machine Learning and Deep Learning.",
    icon: "🤖",
    color: "#F97316",
    averageSalary: "₹10–30 LPA",
    requiredSkills: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "OpenCV",
      "Git",
    ],
  },

  {
    id: "datascience",
    name: "Data Scientist",
    description:
      "Extract insights from data and build predictive models.",
    icon: "📊",
    color: "#EC4899",
    averageSalary: "₹8–28 LPA",
    requiredSkills: [
      "Python",
      "SQL",
      "Statistics",
      "Pandas",
      "NumPy",
      "Power BI",
      "Machine Learning",
      "Visualization",
    ],
  },

  {
    id: "dataanalyst",
    name: "Data Analyst",
    description:
      "Analyze business data and generate reports.",
    icon: "📈",
    color: "#14B8A6",
    averageSalary: "₹5–15 LPA",
    requiredSkills: [
      "Excel",
      "SQL",
      "Power BI",
      "Tableau",
      "Python",
      "Statistics",
    ],
  },

  {
    id: "cyber",
    name: "Cyber Security Engineer",
    description:
      "Protect applications and networks from cyber threats.",
    icon: "🔐",
    color: "#DC2626",
    averageSalary: "₹8–22 LPA",
    requiredSkills: [
      "Networking",
      "Linux",
      "Ethical Hacking",
      "Penetration Testing",
      "Cryptography",
      "Cloud Security",
    ],
  },

  {
    id: "cloud",
    name: "Cloud Engineer",
    description:
      "Deploy and manage cloud infrastructure.",
    icon: "☁️",
    color: "#0284C7",
    averageSalary: "₹8–24 LPA",
    requiredSkills: [
      "Linux",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },

  {
    id: "devops",
    name: "DevOps Engineer",
    description:
      "Automate software deployment and infrastructure.",
    icon: "⚡",
    color: "#7C3AED",
    averageSalary: "₹9–25 LPA",
    requiredSkills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Git",
      "Jenkins",
      "Terraform",
      "AWS",
      "CI/CD",
    ],
  },

  {
    id: "uiux",
    name: "UI / UX Designer",
    description:
      "Design beautiful and user-friendly digital products.",
    icon: "🎨",
    color: "#F43F5E",
    averageSalary: "₹5–18 LPA",
    requiredSkills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design System",
      "Adobe XD",
    ],
  },
];

/* ============================================================
   Skill Categories
============================================================ */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "GraphQL",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "SQL",
    ],
  },

  {
    title: "AI/ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "NLP",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Cloud",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
    ],
  },

  {
    title: "DevOps",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Terraform",
      "Jenkins",
    ],
  },

  {
    title: "Cyber Security",
    skills: [
      "Networking",
      "Linux",
      "Ethical Hacking",
      "Cryptography",
    ],
  },

  {
    title: "UI/UX",
    skills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    title: "Soft Skill",
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Critical Thinking",
      "Teamwork",
    ],
  },
];

/* ============================================================
   Skill Gap Analysis Engine
============================================================ */

export interface SkillGapResult {
  strengths: string[];
  gaps: SkillGap[];
  recommendations: string[];
  skillProgress: number;
  completedSkills: number;
  totalSkills: number;
}

export function getCareerById(id: string): CareerGoal | undefined {
  return CAREER_GOALS.find((career) => career.id === id);
}

export function calculateSkillProgress(
  userSkills: string[],
  requiredSkills: string[],
): number {
  if (!requiredSkills.length) return 0;

  const matched = requiredSkills.filter((skill) =>
    userSkills.some(
      (userSkill) =>
        userSkill.trim().toLowerCase() === skill.trim().toLowerCase(),
    ),
  );

  return Math.round((matched.length / requiredSkills.length) * 100);
}

export function getMissingSkills(
  userSkills: string[],
  requiredSkills: string[],
): string[] {
  return requiredSkills.filter(
    (skill) =>
      !userSkills.some(
        (userSkill) =>
          userSkill.trim().toLowerCase() === skill.trim().toLowerCase(),
      ),
  );
}

export function getMatchedSkills(
  userSkills: string[],
  requiredSkills: string[],
): string[] {
  return requiredSkills.filter((skill) =>
    userSkills.some(
      (userSkill) =>
        userSkill.trim().toLowerCase() === skill.trim().toLowerCase(),
    ),
  );
}

/* ============================================================
   AI Skill Gap Analysis
============================================================ */

export async function fetchSkillGap(
  goalId: string,
  userSkills: string[],
): Promise<SkillGapResult> {

  const career = getCareerById(goalId);

  if (!career) {
    return {
      strengths: [],
      gaps: [],
      recommendations: [],
      skillProgress: 0,
      completedSkills: 0,
      totalSkills: 0,
    };
  }

  const strengths = getMatchedSkills(
    userSkills,
    career.requiredSkills,
  );

  const missing = getMissingSkills(
    userSkills,
    career.requiredSkills,
  );

  const gaps: SkillGap[] = missing.map((skill) => ({
    name: skill,
    level: Math.floor(Math.random() * 30) + 70,
  }));

  const recommendations = missing.map(
    (skill) =>
      `Learn ${skill} and build at least one practical project.`,
  );

  return {
    strengths,
    gaps,
    recommendations,
    skillProgress: calculateSkillProgress(
      userSkills,
      career.requiredSkills,
    ),
    completedSkills: strengths.length,
    totalSkills: career.requiredSkills.length,
  };
}

/* ============================================================
   Dashboard Helpers
============================================================ */

export function calculateOverallProgress(
  skillProgress: number,
  roadmapProgress: number,
): number {

  return Math.round(
    (skillProgress * 0.6) +
      (roadmapProgress * 0.4),
  );
}

export function calculateLearningHours(
  phases: Phase[],
): number {

  return phases.reduce(
    (total, phase) =>
      total +
      phase.steps.reduce(
        (sum, step) => sum + step.hours,
        0,
      ),
    0,
  );
}

export function getCompletedSteps(
  phases: Phase[],
): number {

  return phases.reduce(
    (count, phase) =>
      count +
      phase.steps.filter(
        (step) => step.done,
      ).length,
    0,
  );
}

export function getTotalSteps(
  phases: Phase[],
): number {

  return phases.reduce(
    (count, phase) =>
      count + phase.steps.length,
    0,
  );
}

export function calculateRoadmapProgress(
  phases: Phase[],
): number {

  const total = getTotalSteps(phases);

  if (!total) return 0;

  const completed =
    getCompletedSteps(phases);

  return Math.round(
    (completed / total) * 100,
  );
}

/* ============================================================
   Badge System
============================================================ */

export interface Badge {

  id: string;

  title: string;

  icon: string;

  unlocked: boolean;

}

export function generateBadges(
  progress: number,
): Badge[] {

  return [

    {
      id: "starter",
      title: "Starter",
      icon: "🌱",
      unlocked: progress >= 10,
    },

    {
      id: "learner",
      title: "Fast Learner",
      icon: "📚",
      unlocked: progress >= 30,
    },

    {
      id: "builder",
      title: "Project Builder",
      icon: "💻",
      unlocked: progress >= 50,
    },

    {
      id: "expert",
      title: "Career Expert",
      icon: "🏆",
      unlocked: progress >= 80,
    },

    {
      id: "master",
      title: "Placement Ready",
      icon: "🎯",
      unlocked: progress >= 100,
    },

  ];

}

/* ============================================================
   Personalized Roadmap Generator
============================================================ */

const ROADMAP_LIBRARY: Record<string, Phase[]> = {
  frontend: [
    {
      title: "Web Fundamentals",
      weeks: "Week 1-2",
      steps: [
        {
          id: "fe-1",
          title: "Master HTML5",
          type: "read",
          hours: 6,
        },
        {
          id: "fe-2",
          title: "Master CSS3 & Flexbox/Grid",
          type: "code",
          hours: 8,
        },
        {
          id: "fe-3",
          title: "JavaScript ES6+",
          type: "video",
          hours: 10,
        },
      ],
    },

    {
      title: "React Development",
      weeks: "Week 3-5",
      steps: [
        {
          id: "fe-4",
          title: "React Fundamentals",
          type: "code",
          hours: 10,
        },
        {
          id: "fe-5",
          title: "React Router",
          type: "project",
          hours: 5,
        },
        {
          id: "fe-6",
          title: "State Management",
          type: "project",
          hours: 8,
        },
      ],
    },

    {
      title: "Projects",
      weeks: "Week 6-8",
      steps: [
        {
          id: "fe-7",
          title: "Build Portfolio Website",
          type: "project",
          hours: 12,
        },
        {
          id: "fe-8",
          title: "Build E-Commerce UI",
          type: "project",
          hours: 20,
        },
      ],
    },
  ],

  backend: [
    {
      title: "Backend Basics",
      weeks: "Week 1-2",
      steps: [
        {
          id: "be-1",
          title: "Node.js",
          type: "video",
          hours: 8,
        },
        {
          id: "be-2",
          title: "Express.js",
          type: "project",
          hours: 10,
        },
        {
          id: "be-3",
          title: "REST APIs",
          type: "project",
          hours: 8,
        },
      ],
    },

    {
      title: "Databases",
      weeks: "Week 3-5",
      steps: [
        {
          id: "be-4",
          title: "MongoDB",
          type: "project",
          hours: 8,
        },
        {
          id: "be-5",
          title: "SQL",
          type: "project",
          hours: 8,
        },
      ],
    },
  ],

  fullstack: [
    {
      title: "Frontend + Backend",
      weeks: "Week 1-6",
      steps: [
        {
          id: "fs-1",
          title: "React",
          type: "project",
          hours: 12,
        },
        {
          id: "fs-2",
          title: "Node.js",
          type: "project",
          hours: 12,
        },
        {
          id: "fs-3",
          title: "MongoDB",
          type: "project",
          hours: 8,
        },
        {
          id: "fs-4",
          title: "Build MERN Project",
          type: "project",
          hours: 25,
        },
      ],
    },
  ],

  ai: [
    {
      title: "Python Foundation",
      weeks: "Week 1",
      steps: [
        {
          id: "ai-1",
          title: "Advanced Python",
          type: "code",
          hours: 10,
        },
        {
          id: "ai-2",
          title: "NumPy & Pandas",
          type: "project",
          hours: 10,
        },
      ],
    },

    {
      title: "Machine Learning",
      weeks: "Week 2-4",
      steps: [
        {
          id: "ai-3",
          title: "Machine Learning",
          type: "project",
          hours: 15,
        },
        {
          id: "ai-4",
          title: "Deep Learning",
          type: "project",
          hours: 15,
        },
        {
          id: "ai-5",
          title: "TensorFlow",
          type: "project",
          hours: 12,
        },
      ],
    },

    {
      title: "AI Projects",
      weeks: "Week 5-8",
      steps: [
        {
          id: "ai-6",
          title: "Build AI Chatbot",
          type: "project",
          hours: 20,
        },
        {
          id: "ai-7",
          title: "Computer Vision Project",
          type: "project",
          hours: 18,
        },
      ],
    },
  ],

  datascience: [
    {
      title: "Data Science",
      weeks: "Week 1-6",
      steps: [
        {
          id: "ds-1",
          title: "Python",
          type: "code",
          hours: 8,
        },
        {
          id: "ds-2",
          title: "Statistics",
          type: "read",
          hours: 8,
        },
        {
          id: "ds-3",
          title: "Machine Learning",
          type: "project",
          hours: 15,
        },
      ],
    },
  ],

  dataanalyst: [
    {
      title: "Analytics",
      weeks: "Week 1-5",
      steps: [
        {
          id: "da-1",
          title: "Excel",
          type: "project",
          hours: 6,
        },
        {
          id: "da-2",
          title: "SQL",
          type: "project",
          hours: 8,
        },
        {
          id: "da-3",
          title: "Power BI",
          type: "project",
          hours: 12,
        },
      ],
    },
  ],

  cyber: [
    {
      title: "Cyber Security",
      weeks: "Week 1-6",
      steps: [
        {
          id: "cy-1",
          title: "Networking",
          type: "read",
          hours: 8,
        },
        {
          id: "cy-2",
          title: "Linux",
          type: "project",
          hours: 8,
        },
        {
          id: "cy-3",
          title: "Ethical Hacking",
          type: "project",
          hours: 20,
        },
      ],
    },
  ],

  cloud: [
    {
      title: "Cloud Computing",
      weeks: "Week 1-5",
      steps: [
        {
          id: "cl-1",
          title: "AWS",
          type: "project",
          hours: 15,
        },
        {
          id: "cl-2",
          title: "Docker",
          type: "project",
          hours: 10,
        },
        {
          id: "cl-3",
          title: "Kubernetes",
          type: "project",
          hours: 12,
        },
      ],
    },
  ],

  devops: [
    {
      title: "DevOps",
      weeks: "Week 1-6",
      steps: [
        {
          id: "dv-1",
          title: "Docker",
          type: "project",
          hours: 10,
        },
        {
          id: "dv-2",
          title: "CI/CD",
          type: "project",
          hours: 12,
        },
        {
          id: "dv-3",
          title: "Terraform",
          type: "project",
          hours: 10,
        },
      ],
    },
  ],

  uiux: [
    {
      title: "UI / UX Design",
      weeks: "Week 1-5",
      steps: [
        {
          id: "ui-1",
          title: "Figma",
          type: "project",
          hours: 10,
        },
        {
          id: "ui-2",
          title: "Wireframing",
          type: "project",
          hours: 8,
        },
        {
          id: "ui-3",
          title: "Prototype Design",
          type: "project",
          hours: 15,
        },
      ],
    },
  ],
};

export function generateRoadmap(
  goal: string,
  gapSkills: string[],
): Phase[] {

  const roadmap =
    ROADMAP_LIBRARY[goal] ??
    ROADMAP_LIBRARY.frontend;

  const phases = roadmap.map((phase) => ({
    ...phase,
    steps: phase.steps.map((step) => ({
      ...step,
      done: false,
    })),
  }));

  if (gapSkills.length > 0) {
    phases.push({
      title: "Skill Gap Completion",
      weeks: "Personalized",
      steps: gapSkills.map((skill, index) => ({
        id: `gap-${index}`,
        title: `Learn ${skill}`,
        type: "project",
        hours: 6,
        done: false,
      })),
    });
  }

  return phases;
}