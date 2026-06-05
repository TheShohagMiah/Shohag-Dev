"use client";
import { useEffect, useRef } from "react";

const SPACING = 28;
const BASE_R = 1.5;
const MAX_R = 6;
const INFLUENCE = 110;
const INFLUENCE_SQ = INFLUENCE * INFLUENCE;

// Resolves a value that may be a hex string OR a CSS variable name like "--primary"
function resolveColor(value) {
  if (value.startsWith("--")) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(value)
      .trim();
  }
  return value;
}

// Parses any CSS color string into { rv, gv, bv }.
// Handles hex (#rrggbb / #rgb) and rgb()/rgba() strings.
function parseColor(str) {
  const s = str.trim();

  if (s.startsWith("#")) {
    const h = s.replace("#", "");
    if (h.length === 3) {
      return {
        rv: parseInt(h[0] + h[0], 16),
        gv: parseInt(h[1] + h[1], 16),
        bv: parseInt(h[2] + h[2], 16),
      };
    }
    return {
      rv: parseInt(h.slice(0, 2), 16),
      gv: parseInt(h.slice(2, 4), 16),
      bv: parseInt(h.slice(4, 6), 16),
    };
  }

  // rgb(r, g, b) or rgba(r, g, b, a)
  const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m) return { rv: +m[1], gv: +m[2], bv: +m[3] };

  // Fallback — primary orange
  return { rv: 240, gv: 101, bv: 67 };
}

export default function DotMatrix({
  color = "--primary",
  dimOpacity = 0.18,
  mode = "repel",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    let dots = [],
      mouse = { x: -999, y: -999 },
      raf;

    // Resolve CSS var → actual color string, then parse to rgb channels once
    const resolved = resolveColor(color);
    const { rv, gv, bv } = parseColor(resolved);
    const dimColor = `rgba(${rv},${gv},${bv},${dimOpacity})`;

    function init() {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
      dots = [];
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          dots.push({ x: c * SPACING, y: r * SPACING });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const distSq = dx * dx + dy * dy;

        let radius = BASE_R;
        let fillStyle = dimColor;

        if (distSq < INFLUENCE_SQ) {
          const dist = Math.sqrt(distSq);
          const influence = 1 - dist / INFLUENCE;
          const scale = mode === "repel" ? 1 : 0.6;
          radius = BASE_R + (MAX_R * scale - BASE_R) * influence;
          const alpha = dimOpacity + (1 - dimOpacity) * influence;
          fillStyle = `rgba(${rv},${gv},${bv},${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse = { x: -999, y: -999 };
    };

    const ro = new ResizeObserver(init);
    ro.observe(wrap);
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [color, dimOpacity, mode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
