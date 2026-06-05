import { motion } from "framer-motion";

export default function MovingBorder({
  children,
  className = "",
  duration = 2000,
  borderRadius = "12px",
}) {
  return (
    <div
      className={`relative p-[2px] overflow-hidden ${className}`}
      style={{ borderRadius }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #06b6d4)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner content */}
      <div
        className="relative z-10 bg-white backdrop-blur-md px-5 py-2"
        style={{ borderRadius }}
      >
        {children}
      </div>
    </div>
  );
}
