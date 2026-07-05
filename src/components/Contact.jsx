import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiCopy, FiCheck, FiLinkedin, FiGithub, FiPhone, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const EMAIL = "shuklapratham28@gmail.com";
const PHONE = "+91-8187930650";

// --- EmailJS config ---
// 1. Create a free account at https://www.emailjs.com/
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template with variables: {{name}}, {{email}}, {{message}} -> copy the Template ID
// 4. Account -> General -> copy the Public Key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// same fade variants as About.jsx / Hero.jsx / Projects.jsx / Skills.jsx / Achievements.jsx
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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* ambient glow, matches other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 85% 15%, rgba(139,92,246,0.16), transparent 70%), radial-gradient(ellipse 55% 45% at 10% 90%, rgba(139,92,246,0.12), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2, margin: "-80px" }}
        className="relative max-w-2xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-violet text-sm font-medium tracking-widest uppercase mb-4 text-center"
        >
          Get in touch
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-3xl md:text-4xl text-center mb-4"
        >
          Let's build <span className="gradient-text">something together</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-textSecondary text-center mb-12"
        >
          Ghaziabad, Uttar Pradesh · Tell me about your next project.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="bg-white/[0.025] border border-border rounded-2xl p-6 md:p-8 hover:border-borderHover transition-colors duration-200"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
            <span className="text-textPrimary text-sm">{EMAIL}</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-medium text-textPrimary border border-border px-3 py-2 rounded-lg hover:border-borderHover hover:-translate-y-0.5 transition-all duration-200"
            >
              {copied ? <FiCheck className="text-cyan" /> : <FiCopy />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="flex items-center gap-2 text-textSecondary text-sm mb-8">
            <FiPhone className="text-violet" />
            <span>{PHONE}</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/[0.025] border border-border rounded-lg px-4 py-3 text-sm text-textPrimary placeholder:text-textTertiary outline-none focus:border-violet/60 focus:bg-white/[0.04] transition-all duration-200"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/[0.025] border border-border rounded-lg px-4 py-3 text-sm text-textPrimary placeholder:text-textTertiary outline-none focus:border-violet/60 focus:bg-white/[0.04] transition-all duration-200"
            />
            <textarea
              required
              rows={4}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/[0.025] border border-border rounded-lg px-4 py-3 text-sm text-textPrimary placeholder:text-textTertiary outline-none focus:border-violet/60 focus:bg-white/[0.04] transition-all duration-200 resize-none"
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-white text-black text-sm font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send message
                </>
              )}
            </motion.button>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan text-xs text-center"
              >
                Message sent — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-magenta text-xs text-center"
              >
                Something went wrong. Try emailing directly instead.
              </motion.p>
            )}
          </form>

          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-border">
            {[
              { href: "https://www.linkedin.com/in/pratham-shukla-35b65a330/", icon: <FiLinkedin /> },
              { href: "https://github.com/PrathamShukla04", icon: <FiGithub /> },
              { href: "https://leetcode.com/u/PrathamShukla04/", icon: <SiLeetcode /> },
            ].map(({ href, icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, color: "var(--violet, #8b5cf6)" }}
                className="text-textSecondary text-lg transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}