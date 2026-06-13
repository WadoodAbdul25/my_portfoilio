export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "yc-hackathon",
    company: "Y Combinator Hackathon",
    role: "Participant",
    period: "Jan 2026",
    location: "San Francisco, CA",
    bullets: [
      "Competed in a 24-hour full-stack AI agents hackathon with founders and engineers",
      "Built Gryffin — an execution-aware AI coding agent reducing manual debugging effort by 60%",
      "Designed a LangGraph system to monitor multiple agents, reducing hallucinations by 30%",
    ],
    tags: ["AI Agents", "LangGraph", "Python"],
    accentColor: "#f97316",
  },
  {
    id: "essent-ai",
    company: "Essent AI",
    role: "Lead AI/Web Developer",
    period: "Jun 2024 – Jun 2025",
    location: "New York, NY",
    bullets: [
      "Presented technical solutions to 15+ clients and managed team meetings",
      "Led development of AI software solutions using Sci-Kit, TensorFlow, Pandas, and ChatGPT API",
      "Integrated React + Django for seamless web functionality across client platforms",
    ],
    tags: ["React", "Django", "TensorFlow", "ChatGPT API"],
    accentColor: "#7c3aed",
  },
  {
    id: "reality-labs",
    company: "Reality Labs AI",
    role: "Software Development Intern",
    period: "Sep 2022 – Dec 2022",
    location: "New York, NY",
    bullets: [
      "Led a team of 3 building a job posting platform using React, Firebase, NodeJS, and SQL",
      "Completed assigned tasks 20% ahead of schedule through proactive planning",
      "Contributed to Radical-AI platform — resulted in 15% increase in user engagement",
    ],
    tags: ["React", "Firebase", "Node.js", "SQL"],
    accentColor: "#06b6d4",
  },
];
