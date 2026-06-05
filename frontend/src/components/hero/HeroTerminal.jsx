import React from "react";

export default function HeroTerminal() {
  return (
    <div className="relative z-10">
      <div className="glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-3 text-sm text-muted">shohag@portfolio</span>
        </div>

        {/* Terminal Body */}
        <div className="code p-6 text-sm md:text-base">
          <p className="text-green-400">$ whoami</p>

          <p className="mb-4 mt-2">Full Stack Developer</p>

          <p className="text-green-400">$ skills</p>

          <p className="mb-4 mt-2">React, Node.js, Express, MongoDB</p>

          <p className="text-green-400">$ status</p>

          <p className="mt-2">Available for freelance work 🚀</p>

          <p className="mt-4 text-green-400">$ _</p>
        </div>
      </div>
    </div>
  );
}
