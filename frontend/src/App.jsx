import React from "react";
import { Spotlight } from "./components/ui/Spotlight";
import Hero from "./components/hero/Hero";
import { GlowingEffectDemoSecond } from "./components/services/GlowingCard";
import AboutSection from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Navbar from "./components/ui/common/Navbar";
import ContactSection from "./components/contact/Contact";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Projects />
      <Blogs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
