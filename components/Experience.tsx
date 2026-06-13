"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-orange-400 uppercase tracking-widest mb-3">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-connector hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative sm:pl-14"
              >
                {/* Dot */}
                <div
                  className="absolute left-3.5 top-5 hidden sm:flex w-3 h-3 rounded-full -translate-x-1/2 items-center justify-center"
                  style={{ backgroundColor: exp.accentColor }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                </div>

                <div className="gradient-border-card rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {exp.company}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: exp.accentColor }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-slate-400 text-xs font-medium">
                        {exp.period}
                      </div>
                      <div className="text-slate-600 text-xs mt-0.5">
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: exp.accentColor }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md font-mono"
                        style={{
                          color: exp.accentColor,
                          background: exp.accentColor + "14",
                          border: `1px solid ${exp.accentColor}28`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
