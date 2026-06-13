"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

const ROLES = [
  "Multi-Agent Systems Builder",
  "Full-Stack Engineer",
  "Open to Opportunities",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        } else {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        }
      },
      isDeleting ? 45 : 90
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-orb absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="float-orb-2 absolute top-40 right-16 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="float-orb-3 absolute bottom-32 left-1/3 w-72 h-72 rounded-full bg-orange-500/8 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-medium tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 pulse-ring" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
        >
          <span className="gradient-text">{PROFILE.name}</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <span className="text-xl sm:text-2xl font-semibold text-slate-200">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-purple-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto"
        >
          {PROFILE.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 rounded-xl font-semibold text-slate-200 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-8 mt-14"
        >
          {[
            { value: "3+", label: "Projects Shipped" },
            { value: "60%", label: "Planning Time Saved" },
            { value: "50+", label: "Beta Users" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="gradient-text text-2xl font-black">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
