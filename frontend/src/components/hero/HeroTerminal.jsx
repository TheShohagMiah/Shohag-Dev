"use client";
import { useEffect, useRef, useState } from "react";

const TOKENS = [
  { type: "comment", text: "// Welcome to my workspace\n" },
  { type: "keyword", text: "import" },
  { type: "plain", text: " " },
  { type: "bracket", text: "{ " },
  { type: "fn", text: "Developer" },
  { type: "bracket", text: " }" },
  { type: "plain", text: " " },
  { type: "keyword", text: "from" },
  { type: "plain", text: " " },
  { type: "string", text: "'./universe'" },
  { type: "plain", text: ";\n\n" },
  { type: "keyword", text: "const" },
  { type: "plain", text: " " },
  { type: "fn", text: "Portfolio" },
  { type: "plain", text: " = () => " },
  { type: "bracket", text: "{\n" },
  { type: "plain", text: "  " },
  { type: "keyword", text: "return" },
  { type: "plain", text: " " },
  { type: "bracket", text: "(\n" },
  { type: "plain", text: "    " },
  { type: "tag", text: "<Developer" },
  { type: "plain", text: "\n      " },
  { type: "attr", text: "name" },
  { type: "bracket", text: "=" },
  { type: "string", text: '"Shohag Miah"' },
  { type: "plain", text: "\n      " },
  { type: "attr", text: "role" },
  { type: "bracket", text: "=" },
  { type: "string", text: '"Full Stack Engineer"' },
  { type: "plain", text: "\n      " },
  { type: "attr", text: "passion" },
  { type: "bracket", text: "=" },
  { type: "string", text: '"Engineering Beyond Boundaries"' },
  { type: "plain", text: "\n    " },
  { type: "tag", text: "/>" },
  { type: "plain", text: "\n  " },
  { type: "bracket", text: ")" },
  { type: "plain", text: ";\n" },
  { type: "bracket", text: "}" },
];

const COLOR_MAP = {
  comment: "#4b5563",
  keyword: "#818cf8",
  fn: "#34d399",
  string: "#f59e0b",
  tag: "#60a5fa",
  attr: "#c084fc",
  bracket: "#6b7280",
  plain: "#e5e7eb",
};

// Count total lines from all tokens
const TOTAL_LINES = TOKENS.reduce(
  (acc, t) => acc + (t.text.match(/\n/g) || []).length,
  1,
);

export default function HeroTerminal({ className = "" }) {
  const outputRef = useRef(null);
  const cursorRef = useRef(null);
  const lineNumRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(1);

  useEffect(() => {
    const output = outputRef.current;
    const cursor = cursorRef.current;
    const lineBox = lineNumRef.current;
    if (!output || !cursor || !lineBox) return;

    output.innerHTML = "";
    lineBox.innerHTML = "";
    output.appendChild(cursor);
    cursor.style.display = "inline-block";

    // Build initial line number column — all lines pre-rendered, dimmed
    // Active line gets highlighted as typing progresses
    for (let i = 1; i <= TOTAL_LINES; i++) {
      const ln = document.createElement("div");
      ln.id = `ln-${i}`;
      ln.textContent = String(i).padStart(2, " ");
      ln.style.color = "#2d2f36";
      ln.style.height = "1.85em";
      ln.style.lineHeight = "1.85em";
      ln.style.userSelect = "none";
      ln.style.textAlign = "right";
      lineBox.appendChild(ln);
    }

    // Highlight line 1 immediately
    function highlightLine(n) {
      // dim previous
      const prev = lineBox.querySelector(".active-ln");
      if (prev) {
        prev.style.color = "#3a3d47";
        prev.classList.remove("active-ln");
      }
      const el = document.getElementById(`ln-${n}`);
      if (el) {
        el.style.color = "#818cf8";
        el.classList.add("active-ln");
      }
      setCurrentLine(n);
    }
    highlightLine(1);

    let ti = 0,
      ci = 0;
    let currentSpan = null;
    let lineCount = 1;
    let timerId;

    function nextChar() {
      if (ti >= TOKENS.length) {
        cursor.style.display = "none";
        return;
      }

      const token = TOKENS[ti];

      if (ci === 0) {
        currentSpan = document.createElement("span");
        currentSpan.style.color = COLOR_MAP[token.type] || COLOR_MAP.plain;
        currentSpan.style.whiteSpace = "pre";
        output.insertBefore(currentSpan, cursor);
      }

      const ch = token.text[ci];
      currentSpan.textContent += ch;
      ci++;

      // Track newlines → advance line number highlight
      if (ch === "\n") {
        lineCount++;
        highlightLine(lineCount);
      }

      if (ci >= token.text.length) {
        ti++;
        ci = 0;
        currentSpan = null;
      }

      const speed = ch === "\n" ? 45 : Math.random() * 38 + 16;
      timerId = setTimeout(nextChar, speed);
    }

    const startTimer = setTimeout(nextChar, 500);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      className={`w-full max-w-2xl rounded-xl overflow-hidden border border-border shadow-2xl ${className}`}
      style={{
        background: "#0d0d0f",
        fontFamily: "'JetBrains Mono','Fira Code',monospace",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-border"
        style={{ background: "#151518" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center text-[11px] text-white/20 tracking-widest">
          portfolio.tsx — workspace
        </span>
      </div>

      {/* Editor body: line numbers + code */}
      <div className="flex min-h-[380px] overflow-hidden">
        {/* Line numbers column */}
        <div
          className="flex-shrink-0 px-3 pt-5 pb-5 border-r border-white/[0.05] text-[13px] leading-none select-none"
          style={{ background: "#0d0d0f", minWidth: "44px" }}
          ref={lineNumRef}
        />

        {/* Code column */}
        <div className="flex-1 px-5 py-5 overflow-x-auto">
          <div
            ref={outputRef}
            className="text-xs md:text-sm text-left font-mono font-semibold leading-[1.85] whitespace-pre-wrap break-words"
          >
            {/* Cursor lives here — inserted via JS */}
            <span
              ref={cursorRef}
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                verticalAlign: "text-bottom",
                background: "#818cf8",
                marginLeft: "1px",
                borderRadius: "1px",
                animation: "termBlink 0.9s step-end infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.06]"
        style={{ background: "#151518" }}
      >
        <div className="flex items-center gap-1.5 text-[10px] text-white/20 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          CONNECTED
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-white/20 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          TypeScript JSX
        </div>
        <div className="ml-auto text-[10px] text-white/20 tracking-wider">
          Ln {currentLine} · UTF-8
        </div>
      </div>

      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
