import React from "react";
import { cn } from "../../../lib/utils";

// ✅ FIX 1: primary outline/ghost now use theme token classes, not hardcoded blue-600
// ✅ FIX 3: each variant carries its own hover shadow color
const variants = {
  primary: {
    solid:
      "bg-primary text-primary-fg border-transparent " +
      "hover:opacity-90 hover:shadow-primary/30",
    outline:
      "bg-transparent text-primary border-primary " +
      "hover:bg-primary/10 hover:shadow-primary/20",
    ghost:
      "bg-transparent text-primary border-transparent " + "hover:bg-primary/10",
  },
  secondary: {
    solid:
      "bg-card text-foreground border-border " +
      "hover:border-primary hover:bg-card/80 hover:shadow-foreground/10 " +
      "dark:bg-card dark:text-foreground dark:hover:bg-card/60",
    outline:
      "bg-transparent text-foreground border-border " +
      "hover:bg-card hover:shadow-foreground/10 " +
      "dark:text-foreground dark:border-border",
    ghost:
      "bg-transparent text-muted border-transparent " +
      "hover:bg-card hover:text-foreground " +
      "dark:text-muted",
  },
  danger: {
    solid:
      "bg-danger text-white border-transparent " +
      "hover:opacity-90 hover:shadow-danger/30",
    outline:
      "bg-transparent text-danger border-danger " +
      "hover:bg-danger/10 hover:shadow-danger/20",
    ghost:
      "bg-transparent text-danger border-transparent " + "hover:bg-danger/10",
  },
};

// ✅ ring color per variant for focus-visible
const ringColors = {
  primary: "focus-visible:ring-primary",
  secondary: "focus-visible:ring-border",
  danger: "focus-visible:ring-danger",
};

const sizes = {
  sm: "px-3.5 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-7 py-3 text-base rounded-xl gap-2.5",
};

const Button = ({
  label,
  variant = "primary",
  // ✅ FIX 4: renamed from `style` (clashes with React's native style prop) to `styleVariant`
  styleVariant = "solid",
  size = "md",
  icon: Icon = null,
  iconPosition = "left",
  loading = false,
  disabled = false,
  onClick,
  className = "",
  // pass-through so <Button style={{ marginTop: 8 }} /> still works
  ...rest
}) => {
  const variantClass =
    variants[variant]?.[styleVariant] ?? variants.primary.solid;
  const sizeClass = sizes[size] ?? sizes.md;
  // ✅ FIX 2: ring color is now variant-aware
  const ringClass = ringColors[variant] ?? ringColors.primary;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        // base
        "inline-flex items-center justify-center font-medium border",
        "transition-all duration-150 ease-in-out",
        // motion — shadow only on non-ghost styles
        styleVariant !== "ghost" && "hover:-translate-y-px hover:shadow-lg",
        "active:translate-y-0 active:scale-[0.98]",
        // disabled
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
        // focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        ringClass,
        // variant + size
        variantClass,
        sizeClass,
        className,
      )}
      {...rest}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
            />
          </svg>
          <span>Loading…</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          {label && <span>{label}</span>}
          {Icon && iconPosition === "right" && (
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
