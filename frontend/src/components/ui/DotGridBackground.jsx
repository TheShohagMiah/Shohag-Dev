"use client";
import { useEffect, useRef } from "react";

export default function DotGridBackground({ className = "", size = 80 }) {
  const dotRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Reads whatever --primary currently is (respects light/dark)
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();

    const lineColor = `color-mix(in srgb, ${primary} 10%, transparent)`;
    const dotColor = `color-mix(in srgb, ${primary} 35%, transparent)`;

    if (lineRef.current) {
      lineRef.current.style.backgroundImage = `
        linear-gradient(to right, ${lineColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
      `;
    }
    if (dotRef.current) {
      dotRef.current.style.backgroundImage = `radial-gradient(circle, ${dotColor} 1.5px, transparent 1.5px)`;
    }
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
    >
      <div
        ref={lineRef}
        className="absolute inset-0"
        style={{ backgroundSize: `${size}px ${size}px` }}
      />
      <div
        ref={dotRef}
        className="absolute inset-0"
        style={{
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `${size / 2}px ${size / 2}px`,
        }}
      />
    </div>
  );
}
