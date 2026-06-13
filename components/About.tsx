"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_auto] gap-12 items-start"
        >
          <div>
            <p className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              I build software that{" "}
              <span className="gradient-text">thinks for itself.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{PROFILE.bio}</p>
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-border-card rounded-2xl p-6 min-w-55"
          >
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">
              Education
            </div>
            <div className="text-white font-semibold mb-1">Hunter College CUNY</div>
            <div className="text-slate-400 text-sm mb-3">B.S. Computer Science</div>
            <div className="inline-block text-xs px-2 py-1 rounded-md bg-purple-900/30 text-purple-300 border border-purple-800/50">
              Expected May 2027
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500 leading-relaxed">
              AI/ML · Algorithms · Computer Architecture · Statistics
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
