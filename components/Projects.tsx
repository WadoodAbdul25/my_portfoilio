"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { FlowmanIcon } from "./icons/FlowmanIcon";
import { OrbisIcon } from "./icons/OrbisIcon";
import { StudyMasterIcon } from "./icons/StudyMasterIcon";
import type { ReactNode } from "react";

const PROJECT_ICONS: Record<string, ReactNode> = {
  flowman: <FlowmanIcon />,
  orbis: <OrbisIcon />,
  studymaster: <StudyMasterIcon />,
};

function LinkIcon({ href }: { href: string }) {
  if (href.includes("github.com")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const icon = project.icon ?? PROJECT_ICONS[project.id];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="gradient-border-card rounded-2xl p-6 flex flex-col h-full group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  {icon ? (
                    <div className="flex items-center h-10">
                      {icon}
                    </div>
                  ) : (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: project.accentColor + "18",
                        border: `1px solid ${project.accentColor}28`,
                      }}
                    >
                      <span
                        className="font-bold text-lg"
                        style={{ color: project.accentColor }}
                      >
                        {project.title[0]}
                      </span>
                    </div>
                  )}
                  {project.badge && (
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        color: project.accentColor,
                        background: project.accentColor + "18",
                        border: `1px solid ${project.accentColor}33`,
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-slate-500 text-xs font-medium mb-3 flex items-center gap-2">
                  {project.subtitle}
                  {project.year && (
                    <>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-600">{project.year}</span>
                    </>
                  )}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="mb-5 space-y-2">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                      <span
                        className="mt-1 w-1 h-1 rounded-full shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/8 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <LinkIcon href={link.href} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
