import React from "react";
import { motion } from "framer-motion";
import {
  LuGithub,
  LuLinkedin,
  LuSend,
  LuMapPin,
  LuMail,
  LuArrowRight,
  LuPhone,
  LuLocate,
} from "react-icons/lu";
import Input from "../ui/common/Input";
import SectionHeader from "../ui/common/SectionHeader";
import Button from "../ui/common/Button";
import { PiHandshakeFill } from "react-icons/pi";

const AddressItem = ({ icon, title, info, subtitle }) => {
  return (
    <div className="p-5 relative rounded-2xl bg-card/60 border border-border transition-all duration-300 flex items-center gap-4 group backdrop-blur-sm group-hover:bg-success/10 group-hover:border-success/40 ">
      <div className="absolute inset-0 bg-linear-to-bl from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"></div>
      <div className="icon w-11 h-11 rounded-xl bg-primary/5 border border-border/60 flex items-center justify-center transition-all duration-300 group-hover:text-primary shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted uppercase tracking-wider">{title}</p>
        <p className="text-sm sm:text-base font-medium mt-0.5 truncate">
          {info}
        </p>
        <p className="text-xs font-dmSans text-muted/60 mt-0.5">{subtitle}</p>
      </div>
      <LuArrowRight className="text-muted/40 group-hover:text-muted ml-auto shrink-0 transition-colors" />
    </div>
  );
};
export default function ContactSection() {
  // Animation variants for the container orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual sliding/fading elements
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle production-ready form submission logic here
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border">
      <motion.div
        className="mx-auto max-w-7xl px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <SectionHeader
          tag="GET IN TOUCH"
          title="Let's turn your ideas into reality."
        />
        <div className="grid lg:grid-cols-12 gap-10 ">
          {/* Left Column: Contact Information */}
          <motion.div
            variants={itemVariantsRight}
            className="relative col-span-12 lg:col-span-8 "
          >
            <div className="absolute inset-0 bg-linear-to-br rounded-2xl from-primary/7 via-transparent to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-full rounded-2xl border border-border p-8 backdrop-blur-sm shadow-2xl shadow-primary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                  {" "}
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                  {" "}
                  <Input
                    label="Phone"
                    type="cell"
                    name="Phone"
                    id="phone"
                    required
                    placeholder="+1(555) 000-0000"
                  />
                  <Input
                    label="Subjet"
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border border-border bg-card text-sm px-4 py-3 placeholder-slate-400 transition duration-200 ease-in-out focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  label="Hire Me"
                  variant="primary"
                  className="px-10 text-white w-full"
                  icon={LuSend}
                  iconPosition="right"
                />
              </form>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[3px] bg-linear-to-r from-transparent via-primary to-transparent"></div>
          </motion.div>

          <motion.div
            variants={itemVariantsLeft}
            className="col-span-12 lg:col-span-4 flex flex-col gap-4"
          >
            <AddressItem
              icon={<LuPhone size={15} />}
              title="Phone/WhatsApp"
              info="+35794566173"
              subtitle="Available 24 Hours"
            />
            <AddressItem
              icon={<LuMail size={15} />}
              title="Email"
              info="shohagmiah7474@gmail.com"
              subtitle="Replies within 24 hours"
            />
            <AddressItem
              icon={<LuMapPin size={15} />}
              title="Location"
              info="Nicosia,Cyprus"
              subtitle="Serving clients worldwide"
            />

            <div class="p-5 rounded-2xl bg-success/5 border border-success/15 flex items-start gap-3 mt-2">
              <div class="relative flex h-3 w-3 shrink-0 mt-1">
                <span class="animate-ping absolute inset-0 rounded-full bg-success opacity-60"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-success"></span>
              </div>
              <div>
                <p class="text-sm font-syne font-bold text-success">
                  Currently Available
                </p>
                <p class="text-xs font-dmSans text-text-muted mt-1">
                  Taking on select new clients. Spot availability is limited.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Glassmorphic Lead Form */}
      </motion.div>
    </section>
  );
}
