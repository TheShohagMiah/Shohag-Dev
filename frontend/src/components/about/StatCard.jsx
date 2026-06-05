import React from "react";

const StatCard = ({ value, label }) => {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between gap-2 min-h-[110px] transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      {/* ✅ FIX 4: text-foreground for numbers — they should stand out */}
      <span className="text-3xl font-semibold tracking-tight text-foreground">
        {value}
      </span>
      {/* ✅ FIX 5: text-muted instead of hardcoded text-neutral-600 */}
      <span className="text-xs font-medium tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
};

export default StatCard;
