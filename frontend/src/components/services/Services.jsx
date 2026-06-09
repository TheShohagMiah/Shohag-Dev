import React from "react";
import SectionHeader from "../ui/common/SectionHeader";
import { GlowingEffectDemoSecond } from "./GlowingCard";

const Services = () => {
  return (
    <section id="services" className="py-24 relative border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          tag="What i deliver"
          title="Core Growth "
          highlightedTitle="Channels"
        />

        <GlowingEffectDemoSecond />
      </div>
    </section>
  );
};

export default Services;
