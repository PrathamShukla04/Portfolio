import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Minimum display time so it doesn't just flash — feels intentional.
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 1400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05050f]"
        >
          {/* ambient glow behind the mark */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full bg-violet blur-[120px] opacity-25 pointer-events-none"
          />

          <div className="relative flex flex-col items-center gap-5">
            {/* animated <PS /> mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-mono font-bold text-4xl tracking-tight"
            >
              <span className="text-textSecondary">&lt;</span>
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: "linear-gradient(90deg,#6366f1,#8b5cf6,#6366f1)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                PS
              </motion.span>
              <span className="text-textSecondary"> /&gt;</span>
            </motion.div>

            {/* progress bar */}
            <div className="w-40 h-[3px] rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}