import React from "react";
import { Spotlight } from "./components/ui/Spotlight";
import Hero from "./components/hero/Hero";
import { GlowingEffectDemoSecond } from "./components/services/GlowingCard";
import AboutSection from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Navbar from "./components/ui/common/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Projects />
    </div>
  );
};

export default App;
