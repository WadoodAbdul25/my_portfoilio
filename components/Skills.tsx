"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES, PRIMARY_STACK, LEVEL_CONFIG } from "@/data/skills";

type Tab = "stack" | "proficiency";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>("stack");

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex gap-1 p-1 rounded-xl bg-white/5 border border-white/8 w-fit mb-10"
        >
          {(["stack", "proficiency"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                activeTab === tab
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
              style={
                activeTab === tab
                  ? { background: "linear-gradient(135deg, #7c3aed, #0891b2)" }
                  : {}
              }
            >
              {tab === "stack" ? "All Skills" : "Proficiency"}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "stack" ? (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {SKILL_CATEGORIES.map((category, i) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="gradient-border-card rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2 h-5 rounded-full"
                      style={{ background: category.color }}
                    />
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="text-sm px-3 py-1.5 rounded-lg font-medium cursor-default"
                        style={{
                          color: category.color,
                          background: category.color + "14",
                          border: `1px solid ${category.color}28`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="proficiency"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="gradient-border-card rounded-2xl p-8 space-y-6"
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">
                Primary Stack
              </p>
              {PRIMARY_STACK.map((item, i) => {
                const cfg = LEVEL_CONFIG[item.level];
                return (
                  <div key={item.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">
                        {item.skill}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ color: cfg.color, background: cfg.bg }}
                      >
                        {item.level}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/6 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: cfg.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${cfg.percentage}%` }}
                        transition={{
                          duration: 0.9,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
