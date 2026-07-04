import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiArrowUp } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-textTertiary text-xs text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-textSecondary">Pratham Shukla</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/pratham-shukla-35b65a330/"
            target="_blank"
            rel="noreferrer"
            className="text-textTertiary hover:text-violet text-sm transition-colors duration-200"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/PrathamShukla04"
            target="_blank"
            rel="noreferrer"
            className="text-textTertiary hover:text-violet text-sm transition-colors duration-200"
          >
            <FiGithub />
          </a>
          <a
            href="https://leetcode.com/u/PrathamShukla04/"
            target="_blank"
            rel="noreferrer"
            className="text-textTertiary hover:text-violet text-sm transition-colors duration-200"
          >
            <SiLeetcode />
          </a>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-textSecondary hover:border-borderHover hover:text-violet transition-colors duration-200"
          >
            <FiArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}