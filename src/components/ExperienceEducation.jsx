import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experience = [
  {
    title: "Software Developer Intern",
    org: "Mobulous Technologies Pvt. Ltd.",
    date: "May 2026 — Present",
    description:
      "Reduced post-release defect rate by 10% by designing and executing a regression test suite across 10 modules. Cut reported UI bugs post-deployment through cross-browser and cross-device validation, and accelerated bug-fix turnaround time by 8% via close collaboration with senior engineers.",
  },
  {
    title: "Frontend Web Developer Intern",
    org: "Tech Mahindra",
    date: "Aug 2025 — Oct 2025",
    description:
      "Cut new-component build time by 7% by designing a reusable UI component library (toggle switches, file uploaders) adopted by the frontend team. Caught 10% of UI regressions pre-QA via component-level test coverage, and lifted task-completion rate by 8% on Bodh AI through UX redesign.",
  },
];

const education = [
  {
    title: "B.Tech, Information Technology",
    org: "Ajay Kumar Garg Engineering College",
    date: "2023 — 2027",
    description:
      "SGPA: 8.86. Coursework spanning data structures, DBMS, computer networks, and software engineering, alongside self-driven full-stack and AI projects. Contributed to deep learning crowd-counting research with the Edge Vision Analytics Research Group.",
  },
  {
    title: "Class XII, CBSE",
    org: "Jagran Public School, Kannauj",
    date: "2023",
    description: "Scored 89% in senior secondary examinations.",
  },
  {
    title: "Class X, CBSE",
    org: "Jagran Public School, Kannauj",
    date: "2021",
    description: "Scored 93.4% in secondary examinations.",
  },
];

// same fade variants as About.jsx / Hero.jsx / Projects.jsx / Skills.jsx, so the effect matches exactly
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

function Entry({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border-l-2 border-border pl-4 sm:pl-6 pb-6 sm:pb-8 last:pb-0 relative"
    >
      <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet shadow-[0_0_12px_rgba(127,119,221,0.6)]" />
      <p className="text-textTertiary text-xs mb-1">{item.date}</p>
      <h3 className="text-textPrimary font-medium text-base sm:text-lg mb-1">
        {item.title}
      </h3>
      <p className="text-violet text-xs sm:text-sm mb-2">{item.org}</p>
      <p className="text-textSecondary text-xs sm:text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function ExperienceEducation() {
  const [tab, setTab] = useState("experience");

  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      {/* ambient glow, matches other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 90% 15%, rgba(139,92,246,0.15), transparent 70%), radial-gradient(ellipse 55% 45% at 10% 90%, rgba(139,92,246,0.12), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2, margin: "-80px" }}
        className="relative max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-violet text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 text-center"
        >
          Background
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10"
        >
          Experience &amp; education
        </motion.h2>

        <motion.div variants={fadeUp} className="flex justify-center gap-2 mb-8 sm:mb-12">
          {["experience", "education"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? "bg-white text-black"
                  : "text-textSecondary border border-border hover:text-textPrimary"
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {(tab === "experience" ? experience : education).map((item, i) => (
              <Entry key={i} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}