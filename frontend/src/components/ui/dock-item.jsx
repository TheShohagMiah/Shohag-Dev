import { motion } from "framer-motion";

export function DockItem({ icon, label, href }) {
  return (
    <a href={href}>
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 transition cursor-pointer"
      >
        {icon}

        {/* Tooltip */}
        <span className="absolute -top-8 text-xs text-white opacity-0 hover:opacity-100 transition">
          {label}
        </span>
      </motion.div>
    </a>
  );
}
