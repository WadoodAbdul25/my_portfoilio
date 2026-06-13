export type SkillCategory = {
  label: string;
  color: string;
  skills: string[];
};

export type ProficiencyLevel = "High" | "Medium" | "Low";

export type SkillProficiency = {
  skill: string;
  level: ProficiencyLevel;
};

export const LEVEL_CONFIG: Record<ProficiencyLevel, { percentage: number; color: string; bg: string }> = {
  High:   { percentage: 85, color: "#4ade80", bg: "rgba(74,222,128,0.12)" },
  Medium: { percentage: 55, color: "#f97316", bg: "rgba(249,115,22,0.12)" },
  Low:    { percentage: 30, color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
};

export const PRIMARY_STACK: SkillProficiency[] = [
  { skill: "Python",   level: "High" },
  { skill: "Django",   level: "High" },
  { skill: "React",    level: "High" },
  { skill: "MongoDB",  level: "High" },
  { skill: "PyTorch",  level: "Medium" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    color: "#7c3aed",
    skills: ["Python", "JavaScript", "C++", "TypeScript"],
  },
  {
    label: "Frameworks & Libraries",
    color: "#06b6d4",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Django",
      "Node.js",
      "TensorFlow",
      "PyTorch",
      "Sci-kit Learn",
      "Pandas",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    color: "#f97316",
    skills: ["AWS", "MongoDB", "Firebase", "SQLite", "Drizzle ORM", "WebSockets", "REST APIs", "JWT"],
  },
  {
    label: "AI & Systems",
    color: "#10b981",
    skills: [
      "LangGraph",
      "Multi-Agent Systems",
      "LLM Pipelines",
      "ChatGPT API",
      "AI Agents",
      "Figma",
    ],
  },
];
