import { Calendar, CheckCircle2, GraduationCap } from "lucide-react";

const Timeline = ({
  period,
  degree,
  institution,
  description,
  statusTag,
  isCurrent = false,
}) => {
  return (
    <div className="relative pl-15 pb-8 last:pb-0 group">
      {/* Dot */}
      <div
        className={`
          absolute left-0 top-3 w-9 h-9 rounded-full border border-border bg-card z-10
          flex items-center justify-center text-primary
          transition-all duration-300
          group-hover:border-primary group-hover:shadow-[0_0_14px_[bg-primary]]
        
        `}
      >
        <GraduationCap className="w-4 h-4" />
        {isCurrent && (
          <span className="absolute inset-0 rounded-full border border-primary animate-ping opacity-40" />
        )}
      </div>

      <div
        className={`relative overflow-hidden rounded-xl border p-5 transition-all duration-300 ease-out
        group-hover:-translate-y-0.5 group-hover:border-primary/40
          group-hover:shadow-xl group-hover:shadow-primary/8
          ${isCurrent ? "border-primary/30" : "border-border"}
        `}
      >
        {/* Hover background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* isCurrent permanent tint */}
        {isCurrent && (
          <div className="absolute inset-0 bg-linear-to-br from-primary/4 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Period row */}
        <div className="relative flex items-center gap-2 text-xs font-medium text-primary mb-3">
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>{period}</span>
          {isCurrent && (
            <span className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-500 font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Ongoing
            </span>
          )}
        </div>

        <h4 className="relative text-sm font-light text-foreground tracking-[0.1em] mb-0.5">
          {degree}
        </h4>

        <span className="relative block text-sm font-semibold text-muted mb-3">
          {institution}
        </span>

        <p className="relative text-sm font-light leading-relaxed text-muted">
          {description}
        </p>

        {statusTag && (
          <div className="relative pt-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs border
                ${
                  statusTag.type === "success"
                    ? "bg-emerald-500/8 border-emerald-500/25 text-emerald-500"
                    : "bg-primary/5 border-primary/20 text-muted"
                },
              `}
            >
              <CheckCircle2 className="w-3 h-3" />
              {statusTag.text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
