import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C", "C++", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Socket.io (Client)"],
  },
  {
    label: "Backend & DB",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB", "Mongoose", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "Nginx", "PM2", "Git & GitHub", "Postman", "VS Code"],
  },
  {
    label: "AI & ML",
    items: ["Generative AI", "Prompt Engineering", "LLM Integration", "PyTorch", "scikit-learn", "OpenCV"],
  },
];

// same fade variants as About.jsx / Hero.jsx / Projects.jsx, so the effect matches exactly
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

const pillContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const pillItem = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function Pill({ label }) {
  return (
    <motion.span
      variants={pillItem}
      whileHover={{ y: -3 }}
      style={{ color: "#ffffff" }}
      className="border border-border text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:border-violet/50 hover:shadow-[0_8px_20px_-8px_rgba(139,92,246,0.4)] transition-all duration-200"
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      {/* ambient glow, matches other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 85% 10%, rgba(139,92,246,0.16), transparent 70%), radial-gradient(ellipse 55% 45% at 15% 90%, rgba(139,92,246,0.12), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2, margin: "-80px" }}
        className="relative max-w-5xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-violet text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 text-center"
        >
          What I offer
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4"
        >
          <span style={{ color: "#ffffff" }}>Skills &amp; </span>
          <span className="gradient-text">tools</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{ color: "#ffffff" }}
          className="text-sm sm:text-base text-center max-w-xl mx-auto mb-10 sm:mb-16 opacity-70"
        >
          The stack I reach for when turning an idea into a shipped product.
        </motion.p>

        <div className="flex flex-col gap-8 sm:gap-12">
          {skillGroups.map((group, i) => (
            <motion.div key={group.label} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="font-display text-xs font-bold text-violet/70">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 max-w-[24px] bg-violet/40" />
                <h3
                  style={{ color: "#ffffff" }}
                  className="font-semibold text-sm sm:text-base tracking-wide"
                >
                  {group.label}
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>
              <motion.div
                variants={pillContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {group.items.map((s) => (
                  <Pill key={s} label={s} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}