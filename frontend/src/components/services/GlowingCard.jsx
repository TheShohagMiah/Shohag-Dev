"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <div className="">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 ">
        <GridItem
          index="01"
          icon={<Box className="h-5 w-5 text-primary" />}
          title="Frontend Development"
          description="Crafting visually stunning, high-performance user interfaces using React and Next.js. Focused on core web vitals and seamless user journeys."
        />
        <GridItem
          index="02"
          icon={<Settings className="h-5 w-5 text-primary" />}
          title="Backend Architure"
          description="Refactoring legacy codebases for speed, SEO, and accessibility. Keeping your digital products"
        />

        <GridItem
          index="03"
          icon={<Sparkles className="h-5 w-5 text-primary" />}
          title="Full stack solution"
          description="End-to-end product development from wireframing to deployment. Bridging design and robust functionality."
        />
        <GridItem
          index="04"
          icon={<Search className="h-5 w-5 text-primary" />}
          title="App optimization"
          description="Refactoring legacy codebases for speed, SEO, and accessibility. Keeping your digital products modern.Refactoring legacy codebases for speed, SEO, and accessibility. Keeping your digital products modern."
        />
      </ul>
    </div>
  );
}

const GridItem = ({ index, icon, title, description }) => {
  return (
    <li className={`min-h-56 list-none`}>
      <div className="relative h-full border border-border rounded-2xl">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={20}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="absolute top-2 right-5 font-syne font-extrabold text-7xl text-white/[0.02] select-none pointer-events-none transition-all duration-300 group-hover:text-white/[0.05]">
              {index}
            </div>
            <div className="w-fit rounded-lg border border-primary/30 bg-primary/10 text-primary p-3">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans font-semibold text-sm text-black md:text-xl">
                {title}
              </h3>
              <h2 className="font-sans text-muted text-xs md:text-sm">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
