import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { cn } from "../../lib/utils";
import Button from "../ui/common/Button";
import { LuGitFork } from "react-icons/lu";
import { PiHandshakeFill } from "react-icons/pi";
import DotMatrix from "../ui/DotMatrix";

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "TypeScript",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden antialiased py-24"
    >
      {/* Dot Matrix Background */}
      <DotMatrix color="--primary" dimOpacity={0.18} />

      {/* Left Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-20" fill="#f06543" />

      {/* Right Spotlight */}
      <Spotlight className="-top-40 right-0 md:right-20" fill="#f065431a" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Availability badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary px-5 py-2 text-sm backdrop-blur-sm">
          {/* ✅ FIX 1: class → className */}
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_6px_rgba(230,83,32,0.6)]" />
          </span>
          Available For New Task
        </span>

        <h1 className="mt-6 text-7xl font-black md:text-8xl tracking-tight">
          Hi, I'm <span className="gradient-text-accent">Shohag Miah</span>
        </h1>

        <div className="mt-6">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Specialist",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl text-accent font-medium"
          />
        </div>

        {/* ✅ FIX 2: text-md → text-base */}
        <p className="mx-auto mt-8 max-w-2xl text-base text-neutral-400 leading-relaxed">
          I build scalable and premium full-stack web applications with
          exceptional user experiences, clean architecture, and modern
          technologies.
        </p>

        <div className="flex items-center justify-center gap-5 mt-6">
          <Button
            label="Hire Me"
            variant="primary"
            className="px-10 text-white"
            icon={PiHandshakeFill}
          />
          <Button
            label="Github"
            variant="secondary"
            className="px-10"
            icon={LuGitFork}
          />
        </div>

        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-2 opacity-80 animate-slide-in-up">
          {/* ✅ FIX 1: class → className */}
          <span className="text-xs font-mono text-gray-500 mr-2 py-1">
            LOADED_MODULES:
          </span>
          {techs.map((tech) => (
            // ✅ FIX 1: class → className
            <span
              key={tech}
              className="px-2 py-1 bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono rounded tracking-wider hover:bg-primary/15 hover:border-primary/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
