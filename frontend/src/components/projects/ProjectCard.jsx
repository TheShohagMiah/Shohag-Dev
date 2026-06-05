import React from "react";
import { motion } from "framer-motion";
import { LuGithub, LuLink } from "react-icons/lu";
const statusColors = {
  emerald: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  amber: "bg-amber-500/20  border-amber-500/30  text-amber-400",
};

const dotColors = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectCard = ({ project, index }) => {
  const { title, description, tags, status, gradient, github, demo } = project;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden
                 transition-all duration-300
                 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-linear-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* hover glow */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Project initial */}
        <span className="relative text-3xl font-semibold tracking-tight text-white/10 select-none">
          {title.split("—")[0].trim()}
        </span>

        {/* Status badge */}
        <div
          className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusColors[status.color]}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[status.color]}`}
          />
          {status.label}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-border">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border text-xs font-medium text-muted
                       hover:border-primary/40 hover:text-primary transition-all duration-150"
          >
            <LuGithub className="w-3.5 h-3.5" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-white text-xs font-medium
                       hover:opacity-90 transition-opacity"
          >
            <LuLink className="w-3.5 h-3.5" />
            Live demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
