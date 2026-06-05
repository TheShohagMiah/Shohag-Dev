import React from "react";
import { GraduationCap } from "lucide-react";
import Timeline from "./Timeline";
import StatCard from "./StatCard";
import SectionHeader from "../ui/common/SectionHeader";

export default function AboutPortfolioSection() {
  const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "40+", label: "Projects completed" },
    { value: "12", label: "Happy clients" },
    { value: "99%", label: "Client satisfaction" },
  ];

  const education = [
    {
      isCurrent: true,
      period: "2022 — Present",
      degree: "BSc in Computer Science & Engineering",
      institution: "Dhaka University of Engineering & Technology",
      description:
        "Focusing on software engineering, algorithms, and distributed systems. Active member of the programming club.",
      statusTag: { text: "Currently enrolled", type: "success" },
    },
    {
      period: "2021 — 2022",
      degree: "Full Stack Web Development",
      institution: "Programming Hero Bootcamp",
      description:
        "Intensive 6-month bootcamp covering MERN stack, REST APIs, and modern frontend development with React.",
      statusTag: { text: "Certificate earned", type: "default" },
    },
    {
      period: "2019 — 2021",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Residential Model College",
      description:
        "Science group with focus on Physics, Chemistry, and Mathematics. GPA 5.00 out of 5.00.",
      statusTag: { text: "GPA 5.00 / 5.00", type: "default" },
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-6 ">
        <SectionHeader
          tag="About me"
          title="I'm Shohag,"
          highlightedTitle="Full Stack Developer"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* ── Left Column: Bio & Stats ── */}
          <div className="lg:col-span-6 flex flex-col gap-10 mt-5">
            <p className="card text-md font-light leading-relaxed text-muted -mt-6 p-6 sm:p-8 rounded-2xl ">
              I am a <b>full-stack developer with 2.5+ years</b> of industry
              experience, currently refining my expertise at Philips University,
              Cyprus.
              <br />
              <br /> My approach is simple: build digital products that are as
              robust under the hood as they are intuitive on the surface. What
              started as a fascination with electronics technology has evolved
              into a career dedicated to the web ecosystem.
              <br />
              <br />I don't just write code — I solve problems through scalable
              architecture and clean design.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* ── Right Column: Education Timeline ── */}
          <div className="relative lg:col-span-6">
            <div className="absolute left-[17px] top-0 bottom-0 w-[2px] h-full bg-linear-to-b from-primary via-accent/40 to-transparent last:hidden" />

            <div className="space-y-0">
              {education.map((item, index) => (
                // ✅ FIX 1: isCurrent now forwarded to Timeline
                <Timeline
                  key={index}
                  isCurrent={item.isCurrent}
                  period={item.period}
                  degree={item.degree}
                  institution={item.institution}
                  description={item.description}
                  statusTag={item.statusTag}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
