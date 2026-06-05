import React from "react";

const SectionHeader = ({ tag, title, highlightedTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 mb-20  ">
      <div className="flex items-center gap-2 text-primary">
        <span className="w-5 h-px bg-primary" />
        <span className="text-sm font-bold tracking-[0.1rem] uppercase">
          {tag}
        </span>
      </div>
      <h3 className="text-4xl font-black text-foreground">
        {title} <span className="bg-gradient-accent">{highlightedTitle}</span>
      </h3>
    </div>
  );
};

export default SectionHeader;
