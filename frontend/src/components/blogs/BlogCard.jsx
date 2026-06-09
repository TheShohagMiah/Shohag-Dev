import React from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuCalendar,
  LuClock,
  LuGithub,
  LuLink,
  LuTag,
} from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../ui/common/Button";
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

const BlogCard = ({ blog, index }) => {
  const { title, description, tags, status, gradient, github, demo, image } =
    blog;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col rounded-lg border border-border bg-card overflow-hidden
                 transition-all duration-300
                 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-linear-to-tl from-primary/10 via-transparent to-primary/5 rounded-lg opacity-100  transition-opacity duration-300 pointer-events-none" />
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-linear-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="w-full">
          <img src={image} alt="" />
        </div>
        {/* subtle grid overlay */}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 flex-1 p-5">
        <div className="metadata flex gap-5 text-xs py-5">
          <span className="flex gap-2">
            <LuCalendar />
            <span>June 12, 2026</span>
          </span>
          <span className="flex gap-2">
            <LuClock />
            <span>4 min read</span>
          </span>
        </div>
        <a href="">
          <h3 className="text-sm font-light tracking-[0.12rem] text-foreground leading-snug hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </a>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 bg-primary/5 rounded-sm border border-border text-primary flex items-center gap-2 "
            >
              <LuTag />
              {tag}
            </span>
          ))}
        </div>
        <a
          href=""
          className="mt-5 flex items-center gap-1 font-bold text-sm text-primary hover:text-orange-300"
        >
          Read Article{" "}
          <span>
            <RiArrowRightSLine size={18} />
          </span>
        </a>
      </div>
    </motion.div>
  );
};
export default BlogCard;
