import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi2";

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

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      {/* ambient background glow for the whole section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 20% 45%, rgba(127,119,221,0.16), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25, margin: "-80px" }}
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16"
      >
        {/* portrait with glow */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
            show: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="relative shrink-0 flex justify-center md:justify-start w-full md:w-auto"
        >
          <div className="absolute left-1/2 md:left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-violet blur-[70px] sm:blur-[85px] md:blur-[100px] opacity-30 pointer-events-none" />
          <div className="absolute right-[8%] top-[38%] w-9 h-9 rounded-full bg-violet/60 blur-[1px] shadow-[0_0_30px_10px_rgba(127,119,221,0.4)] hidden md:block pointer-events-none" />

          <img
            src="/portrait-placeholder-2.png"
            alt="Pratham Shukla"
            className="relative z-10 w-[200px] sm:w-[240px] md:w-[340px] lg:w-[380px] h-auto object-contain rounded-2xl drop-shadow-[0_0_60px_rgba(127,119,221,0.35)]"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>

        {/* content */}
        <div className="text-center md:text-left flex-1">
          <motion.p
            variants={fadeUp}
            className="text-violet text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4"
          >
            About me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-2xl sm:text-3xl md:text-5xl leading-tight mb-5 sm:mb-6"
          >
            <span className="text-violet">Curiosity</span>
            <br />
            <span style={{ color: "#ffffff" }}>is my operating system</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ color: "#ffffff" }}
            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-10"
          >
            I'm a{" "}
            <span className="text-violet font-semibold">
              B.Tech Information Technology
            </span>{" "}
            student at Ajay Kumar Garg Engineering College, Ghaziabad (SGPA
            8.86), currently working as a{" "}
            <span className="text-violet font-semibold">
              Software Developer Intern at Mobulous Technologies
            </span>
            . I build full-stack MERN products end to end — from database
            schema to deployed UI — and I've been increasingly focused on{" "}
            <span className="text-violet font-semibold">
              weaving generative AI into real, usable features
            </span>
            . I learn best by shipping, breaking things, and fixing them in
            production.
      
              I have also completed Internship at {" "}
              <span className="text-violet font-semibold">
              TechMahindra
            </span>
            {" "}as a{" "} <span className="text-violet font-semibold">
              FrontEnd Developer Intern
            </span>
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff" }}
            className="inline-flex items-center gap-2 border border-violet/50 text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_0_18px_rgba(127,119,221,0.25)] hover:shadow-[0_0_28px_rgba(127,119,221,0.45)] hover:border-violet transition-all duration-300"
          >
            Resume
            <HiOutlineDocumentText className="text-lg" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}