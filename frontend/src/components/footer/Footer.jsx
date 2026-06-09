import React from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
const Footer = () => {
  return (
    <div className="py-10 relative w-full">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-2 justify-center items-center w-full ">
        <p className="font-mono flex items-center gap-3 font-bold">
          <HiMiniCodeBracket size={18} className="text-primary" />
          <span>Shohag Miah | Full Stack Developer</span>
        </p>
        <p className="text-muted">
          Built with using Next.js, TypeScript & Tailwind
        </p>
        <p className="text-muted">© 2026 Abdul Momin. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
