import { motion } from "framer-motion";
import { DockItem } from "./dock-item";

export default function FloatingDock({ items = [] }) {
  return (
    <div className="">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl"
      >
        {items.map((item, idx) => (
          <DockItem
            key={idx}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </motion.div>
    </div>
  );
}
