import React from "react";
import SectionHeader from "../ui/common/SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ShopFlow — E-Commerce Platform",
    description:
      "Full-stack store with cart, Stripe payments, admin dashboard, and real-time inventory tracking.",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind"],
    status: { label: "Live", color: "emerald" },
    gradient: "from-indigo-950 to-indigo-900",
    github: "https://github.com/shohag/shopflow",
    demo: "https://shopflow.vercel.app",
  },
  {
    title: "DevCollab — Real-time Workspace",
    description:
      "Collaborative tool with live cursors, shared docs, task boards, and team chat powered by Socket.io.",
    tags: ["React", "Node.js", "Socket.io", "Redis", "Postgres"],
    status: { label: "Live", color: "emerald" },
    gradient: "from-emerald-950 to-emerald-900",
    github: "https://github.com/shohag/devcollab",
    demo: "https://devcollab.vercel.app",
  },
  {
    title: "AIWrite — AI Content Studio",
    description:
      "AI writing assistant with GPT-4, tone control, templates, and export to PDF/Markdown.",
    tags: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
    status: { label: "Beta", color: "amber" },
    gradient: "from-stone-950 to-stone-900",
    github: "https://github.com/shohag/aiwrite",
    demo: "https://aiwrite.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Things i've built"
          title="A selection of full-stack projects."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
