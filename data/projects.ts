import type { ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year?: number;
  description: string;
  bullets: string[];
  tech: string[];
  links: { label: string; href: string }[];
  badge?: string;
  accentColor: string;
  icon?: ReactNode;
};

export const PROJECTS: Project[] = [
  {
    id: "studymaster",
    title: "StudyMaster",
    subtitle: "AI-Powered Semester Planner",
    year: 2026,
    description:
      "An AI-powered web app that turns uploaded syllabi, schedules, and assignment lists into an organized semester plan with deadlines, tasks, and tailored study recommendations.",
    bullets: [
      "Uses Google Gemini to extract deadlines, exams, tasks, and topics from PDF and DOCX course documents",
      "Builds prioritized course timelines and AI-generated study plans for assignments and exams",
      "Supports private user accounts, course management, and task tracking through a React and Express application",
    ],
    tech: ["React", "Express", "MongoDB", "Google Gemini", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://study-master-pi.vercel.app" },
      { label: "GitHub", href: "https://github.com/WadoodAbdul25/StudyMaster" },
    ],
    badge: "AI Study Planner",
    accentColor: "#7C3AED",
  },
  {
    id: "gryffin",
    title: "Gryffin",
    subtitle: "AI-Powered Development Pipeline",
    year: 2025,
    description:
      "An execution-aware AI coding agent that automates system design, architecture generation, and debugging. Built at the Y Combinator Full-Stack Hackathon.",
    bullets: [
      "Decomposes apps into 10–30 major tasks, cutting initial planning time by ~60%",
      "Automatically runs tests to catch bugs, reducing debugging fatigue by 45%",
      "Parallel agent context system improves code generation consistency",
    ],
    tech: ["Python", "LangGraph", "AI Agents", "CLI"],
    links: [
      { label: "GitHub", href: "https://github.com/WadoodAbdul25/YC_2026/" },
    ],
    badge: "YC Hackathon",
    accentColor: "#7c3aed",
  },
  {
    id: "flowman",
    title: "Flowman",
    subtitle: "Email Management SaaS",
    year: 2024,
    description:
      "An AI-powered email management SaaS that filters and extracts important emails, converts them into actionable tasks, and generates replies — actively used by 50+ beta testers.",
    bullets: [
      "Filters and extracts important emails, reducing time spent reading emails by ~70%",
      "Converts emails into actionable tasks and auto-generates contextual replies",
      "Django REST backend with JWT auth, WebSockets, and AWS S3 — improving file management efficiency by 40%",
    ],
    tech: ["React", "Django", "AWS S3", "WebSockets", "JWT"],
    links: [
      { label: "Live Demo", href: "https://flowman.app/" },
    ],
    badge: "50+ Beta Users",
    accentColor: "#10A7F3",
  },
  {
    id: "hooptrack",
    title: "HoopTrack",
    subtitle: "Basketball Stat Tracker for iPad & Tablets",
    year: 2024,
    description:
      "A cross-platform basketball stat tracking app built for coaches and teams. Tracks live game stats with offline-first local storage and exports professional Excel reports — optimized for iPad and tablets.",
    bullets: [
      "Offline-first SQLite database via Drizzle ORM enables real-time stat tracking without internet dependency",
      "Excel report generation (ExcelJS) with file export and sharing for post-game analysis",
      "Multi-platform (iOS, Android, Web) with responsive UI tuned for iPad and tablet form factors",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Drizzle ORM", "SQLite", "ExcelJS"],
    links: [
      { label: "GitHub", href: "https://github.com/WadoodAbdul25/HoopTrack" },
    ],
    badge: "Mobile App",
    accentColor: "#f97316",
  },
  {
    id: "snappad",
    title: "SnapPad",
    subtitle: "AI-Powered RV Identification Platform",
    year: 2023,
    description:
      "Consulted with a client at Essent AI who needed customers to identify their exact RV model to match it with the right auto parts. Led a team of 3 to design and deliver the full solution.",
    bullets: [
      "Random Forest Classifier identifies RV model from 7 inputs (Type, Manufacturer, Model, Trim, Year, etc.)",
      "AI chatbot (GPT-3.5-turbo) guides customers with context-aware, business-specific responses",
      "End-to-end delivery: client consultation → architecture → build → deployment on Vercel",
    ],
    tech: ["React", "Django", "OpenAI API", "Scikit-learn", "Pandas", "Styled-components"],
    links: [
      { label: "Live Demo", href: "https://snapfront.netlify.app/" },
      { label: "GitHub", href: "https://github.com/WadoodAbdul25/SnapPad---DEMO" },
    ],
    badge: "Client Project",
    accentColor: "#ef4444",
  },
  {
    id: "orbis",
    title: "Orbis",
    subtitle: "Autonomous Project Manager",
    year: 2026,
    description:
      "AI-powered platform that converts raw ideas, meeting notes, and documents into structured PRDs, epics, sprint plans, and engineering tasks.",
    bullets: [
      "Reduces project planning overhead by an estimated 60%",
      "Multi-agent workflow orchestration with LLM pipelines and contextual memory",
      "Automates product management workflows from ideation to execution",
    ],
    tech: ["LLM Pipelines", "Multi-Agent", "Python", "Contextual Memory"],
    links: [
      { label: "Live Demo", href: "https://auto-pm-theta.vercel.app/" },
    ],
    badge: "Private Repo",
    accentColor: "#4ade80",
  },
];
