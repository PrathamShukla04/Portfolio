import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import { FiLinkedin, FiGithub, FiCode, FiArrowDown } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/pratham-shukla-35b65a330/" },
  { icon: FiGithub, href: "https://github.com/PrathamShukla04" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/PrathamShukla04/" },
];

const words = [
  "Gen AI Enthusiast",
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "React.js · Node.js · MongoDB",
  "Next.js Developer",
  "JavaScript · TypeScript",
  "Java Developer",
];

// same fade variants as About.jsx, so the effect matches exactly
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

function TypewriterTag() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1200);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex]);

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/[0.05] border border-border px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-7 backdrop-blur-sm max-w-full">
      <FiCode className="text-violet text-base sm:text-lg shrink-0" />
      <span
        style={{ color: "#ffffff" }}
        className="text-sm sm:text-base md:text-lg font-medium whitespace-nowrap min-w-[160px] sm:min-w-[220px] text-left"
      >
        {text}
        <span className="inline-block w-[2px] h-4 sm:h-5 bg-cyan align-middle ml-0.5 animate-pulse" />
      </span>
    </div>
  );
}

// Small floating star particles for background depth
function StarField() {
  const stars = useRef(
    Array.from({ length: 28 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 3,
    }))
  ).current;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: 0.5,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(10px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Small facts list for the right-side bio — cleaner than a run-on paragraph
function BioFacts() {
  const facts = [
    "Building AI-powered, production-ready MERN applications",
    "Software Developer Intern at Mobulous Technologies",
    "Ex-Frontend Intern at TechMahindra",
  ];

  return (
    <ul className="text-textSecondary text-xs sm:text-sm mt-4 space-y-1.5 max-w-xs mx-auto lg:ml-auto lg:mr-0">
      {facts.map((fact, i) => (
        <li
          key={i}
          className="flex items-start justify-center lg:justify-end gap-2 text-center lg:text-right"
        >
          <span>{fact}</span>
          <span className="text-violet shrink-0 mt-1 hidden lg:inline">•</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // subtle mouse-parallax on portrait glow (kept as-is, purely cosmetic)
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      anime({
        targets: glowRef.current,
        translateX: x * 12,
        translateY: y * 12,
        duration: 800,
        easing: "easeOutQuad",
      });
    };

    const node = sectionRef.current;
    node.addEventListener("mousemove", handleMouseMove);
    return () => node.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById("about") || document.querySelector("section:nth-of-type(2)");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 sm:pt-28 md:pt-40 lg:pt-44 pb-10 md:pb-0"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 68%, rgba(127,119,221,0.11), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
        }}
      />

      <StarField />

      {/* subtle bottom vignette for grounding */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(5,5,15,0.6))",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25, margin: "-80px" }}
        className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-6 lg:gap-8"
      >
        {/* portrait — mobile & tablet, normal flow */}
        <motion.div
          variants={fadeUp}
          className="relative z-10 flex justify-center lg:hidden"
        >
          <div className="relative">
            <div className="absolute w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] rounded-full bg-violet blur-[70px] sm:blur-[85px] opacity-25 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />
            <img
              src="/portrait-placeholder.png"
              alt="Pratham Shukla"
              className="relative w-[140px] sm:w-[200px] h-auto object-contain drop-shadow-[0_0_50px_rgba(127,119,221,0.35)]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90px] h-[14px] sm:w-[130px] sm:h-[18px] rounded-[50%] bg-violet/40 blur-md pointer-events-none" />
          </div>
        </motion.div>

        {/* left text */}
        <div className="relative z-20 text-center lg:text-left lg:max-w-[340px] xl:max-w-[380px] shrink-0">
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <TypewriterTag />
          </motion.div>

          <motion.p variants={fadeUp} className="text-violet font-medium text-base sm:text-lg mb-2">
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeLeft}
            className="font-display font-bold text-textPrimary leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <div>Pratham</div>
            <div>Shukla</div>
          </motion.h1>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-block mt-5 sm:mt-8 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_28px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-300"
          >
            Let's Connect
          </motion.a>

          {/* socials — desktop: vertical, mobile/tablet: horizontal row */}
          <motion.div
            variants={fadeUp}
            className="flex lg:flex-col justify-center lg:justify-start gap-6 lg:gap-7 mt-5 sm:mt-8 lg:mt-14"
          >
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-textSecondary hover:text-textPrimary text-xl sm:text-2xl transition-colors w-fit hover:-translate-y-1 duration-200"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* right text */}
        <motion.div
          variants={fadeRight}
          className="relative z-20 order-last text-center lg:text-right lg:max-w-[340px] xl:max-w-[380px] shrink-0"
        >
          <p className="text-violet font-medium text-base sm:text-lg mb-2">Creative</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
            <span className="gradient-text">MERN Stack</span>
            <br />
            <span className="text-textPrimary">Developer</span>
          </h2>
          <BioFacts />
        </motion.div>
      </motion.div>

      {/* portrait — absolutely centered so it never squeezes the side text (desktop only) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25, margin: "-80px" }}
        className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex justify-center pointer-events-none"
      >
        <div className="relative">
          <div
            ref={glowRef}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[420px] h-[420px] rounded-full bg-violet blur-[110px] opacity-25 pointer-events-none"
          />
          <img
            src="/portrait-placeholder.png"
            alt="Pratham Shukla"
            className="relative w-[380px] lg:w-[460px] xl:w-[560px] h-auto object-contain drop-shadow-[0_0_70px_rgba(127,119,221,0.4)]"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </motion.div>

      {/* scroll indicator */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-textSecondary hover:text-textPrimary transition-colors"
        style={{ animation: "bounceArrow 2s ease-in-out infinite" }}
      >
        <FiArrowDown size={20} className="sm:hidden" />
        <FiArrowDown size={22} className="hidden sm:block" />
      </button>
    </section>
  );
}