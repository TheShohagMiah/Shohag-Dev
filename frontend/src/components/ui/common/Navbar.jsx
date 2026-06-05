"use client";
import { useState, useEffect } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../../lib/utils";
import Button from "./Button";
import { useTheme } from "../../../hooks/ThemeToggle";

const items = [
  "Home",
  "About",
  "Services",
  "Skills",
  "Projects",
  "Blogs",
  "Contact",
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-main/80 backdrop-blur-md border-b border-border/40"
            : "py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-[15px] font-semibold tracking-tight text-foreground"
          >
            Shohag<span className="text-primary">.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={cn(
                  "text-[15px] px-3 py-1.5 rounded-lg border transition-all duration-150",
                  active === item
                    ? "text-primary bg-primary/8 border-primary/25"
                    : "text-muted border-transparent hover:text-foreground hover:bg-card",
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle — icon only, no text */}

            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-border/80 transition-all duration-150"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Resume — desktop only */}
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <HiOutlineDownload size={13} />
              Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground transition-colors"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path
                  d="M0 1h16M0 6h10M0 11h13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Drawer panel */}
          <div
            className="absolute top-0 right-0 h-full w-64 bg-main border-l border-border flex flex-col p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">
                  Shohag Miah
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/10 border border-red-400/30 text-red-400 hover:bg-red-500/20 transition-colors"
              >
                <RxCross2 size={11} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col flex-1 gap-0.5">
              {items.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActive(item);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-150",
                    active === item
                      ? "text-primary bg-primary/8"
                      : "text-muted hover:text-foreground hover:bg-card",
                  )}
                >
                  {item}
                  <HiArrowRight size={12} className="opacity-30" />
                </a>
              ))}
            </nav>

            {/* Footer */}
            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-primary text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <HiOutlineDownload size={13} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
