import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import anime from "animejs";
import { SiLeetcode } from "react-icons/si";
import { FiAward } from "react-icons/fi";

// same fade variants as About.jsx / Hero.jsx / Projects.jsx / Skills.jsx / ExperienceEducation.jsx
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

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const obj = useRef({ val: 0 });

  useEffect(() => {
    if (!inView) return;
    obj.current.val = 0;
    anime({
      targets: obj.current,
      val: to,
      round: 1,
      duration: 1400,
      easing: "easeOutExpo",
      update: () => {
        if (ref.current) ref.current.textContent = obj.current.val + suffix;
      },
    });
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl gradient-text">
      0{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      {/* ambient glow, matches other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 15% 10%, rgba(139,92,246,0.16), transparent 70%), radial-gradient(ellipse 55% 45% at 90% 90%, rgba(139,92,246,0.12), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2, margin: "-80px" }}
        className="relative max-w-4xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-violet text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 text-center"
        >
          Track record
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-10 sm:mb-14"
        >
          Achievements &amp; <span className="gradient-text">certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <motion.div
            variants={fadeUp}
            className="bg-white/[0.025] border border-border rounded-2xl p-5 sm:p-6 text-center hover:border-borderHover hover:-translate-y-1 transition-all duration-200"
          >
            <Counter to={250} suffix="+" />
            <p className="text-textSecondary text-xs sm:text-sm mt-3">
              Data Structures &amp; Algorithms problems solved on LeetCode
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="bg-white/[0.025] border border-border rounded-2xl p-5 sm:p-6 text-center hover:border-borderHover hover:-translate-y-1 transition-all duration-200"
          >
            <Counter to={3} />
            <p className="text-textSecondary text-xs sm:text-sm mt-3">
              Full-stack products shipped and deployed to production
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3 bg-white/[0.025] border border-border rounded-2xl p-4 sm:p-5 flex-1 hover:border-borderHover transition-colors duration-200"
          >
            <SiLeetcode className="text-violet text-lg sm:text-xl mt-1 shrink-0" />
            <p className="text-textSecondary text-xs sm:text-sm leading-relaxed">
              Solved 250+ DSA problems on LeetCode, strengthening
              problem-solving and coding efficiency.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3 bg-white/[0.025] border border-border rounded-2xl p-4 sm:p-5 flex-1 hover:border-borderHover transition-colors duration-200"
          >
            <FiAward className="text-violet text-lg sm:text-xl mt-1 shrink-0" />
            <p className="text-textSecondary text-xs sm:text-sm leading-relaxed">
              Certified JavaScript Developer — advanced JavaScript
              certification from NamasteDev.com.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}