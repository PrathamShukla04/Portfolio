import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// same fade variants as About.jsx / Hero.jsx, so the effect matches exactly
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

const projects = [
  {
    number: "01",
    tag: "Web · GenAI",
    title: "Synq",
    description:
      "A real-time collaborative code editor with a Monaco-based multi-file workspace, live cursors, and presence indicators powered by Socket.io. Backed by a modular service-layer API with JWT auth, role-based access control, and version snapshotting, plus a GenAI assistant panel for code explanation, refactoring, and bug detection.",
    stack: "React, Node.js, Express.js, MongoDB, Socket.io, Monaco Editor, Generative AI, AWS EC2",
    image: "/projects/synq.png",
    gradient: "from-[#241a44] to-[#0d0d14]",
    link: "https://synq.prathamshukla.shop/",
  },
  {
    number: "02",
    tag: "Web",
    title: "DevBridge",
    description:
      "A full-stack developer networking platform deployed on AWS EC2, serving 23 registered users, with a real-time social feed and live chat via Socket.io. Includes JWT-authenticated REST APIs with role-based access control and a premium subscription flow backed by AWS S3 uploads.",
    stack: "React, Node.js, Express.js, MongoDB, Socket.io, AWS EC2",
    image: "/projects/devbridge.png",
    gradient: "from-[#242044] to-[#0d0d14]",
    link: "https://devbridges.shop/",
  },
  {
    number: "03",
    tag: "Web · Blockchain",
    title: "AABHAAR Jharkhand",
    description:
      "A responsive tourism and governance platform built for Jharkhand's eco-tourism sector, with a blockchain-backed layer for tamper-proof record verification. Ships a reusable TypeScript/Tailwind component library that cut new-page build time for the team.",
    stack: "React, TypeScript, Tailwind CSS, Blockchain",
    image: "/projects/aabhar.png",
    gradient: "from-[#1a2e22] to-[#0d0d14]",
    link: "https://aabhaar-c3xq.vercel.app/",
  },
  {
    number: "04",
    tag: "AI · Chat",
    title: "Intellix",
    description:
      "An AI-powered chat interface integrating the Gemini API for real-time conversational interaction, with a full MERN backend handling auth and chat history persistence. API calls are batched to keep the UI smooth under load.",
    stack: "React, Node.js, Express.js, MongoDB, Gemini API",
    image: "/projects/intellix.png",
    gradient: "from-[#3a1f22] to-[#0d0d14]",
    link: "https://intellixchats.netlify.app/",
  },
  {
    number: "05",
    tag: "Web",
    title: "ScreenPass",
    description:
      "A full-stack movie ticket booking system with live showtimes, seat selection, genre filtering, and booking management. Built on the MERN stack with a Node/Express API handling shows, bookings, and user sessions.",
    stack: "React, Node.js, Express.js, MongoDB",
    image: "/projects/screenpass.png",
    gradient: "from-[#2a1f3a] to-[#0d0d14]",
    link: "https://screen-pass.vercel.app/",
  },
  {
    number: "06",
    tag: "Web · SIH",
    title: "MDR Tracker",
    description:
      "A hospital surveillance dashboard built for Smart India Hackathon, tracking multidrug-resistant infection cases in real time across wards. Features an interactive floor plan, live occupancy stats, and a critical-alerts feed for infection control staff.",
    stack: "React, Node.js, Express.js, MongoDB",
    image: "/projects/mdrtracker.png",
    gradient: "from-[#1f2a3a] to-[#0d0d14]",
    link: "https://ps2-gseo.vercel.app/tracking",
  },
  {
    number: "07",
    tag: "AI · Docs",
    title: "ClauseLogic",
    description:
      "A document intelligence tool that lets users upload DOCX or PDF contracts and query them using the Gemini API to instantly extract approvals, monetary amounts, and clause-level justifications for faster compliance review.",
    stack: "React, Node.js, Express.js, MongoDB, Gemini API",
    image: "/projects/clauselogic.png",
    gradient: "from-[#1f1f1f] to-[#0d0d14]",
    link: "https://docu-scan-ai-ip1a.vercel.app/",
  },
  {
    number: "08",
    tag: "Frontend",
    title: "JTGeats",
    description:
      "A static food delivery landing page for a home-cooked-meal courier service, built with vanilla HTML, CSS, and JavaScript with a pixel-accurate responsive layout matched against the original design file.",
    stack: "HTML, CSS, JavaScript",
    image: "/projects/jtgeats.png",
    gradient: "from-[#1a2e22] to-[#0d0d14]",
    link: "https://pratham2313014-akgec-ac-in.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      {/* ambient glow, matches About section vibe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 15% 20%, rgba(139,92,246,0.35), transparent 70%), radial-gradient(ellipse 70% 50% at 50% 90%, rgba(139,92,246,0.3), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25, margin: "-80px" }}
        className="relative max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-2xl sm:text-3xl md:text-5xl text-center mb-10 sm:mb-16 leading-tight"
        >
          <span className="text-textPrimary">Projects</span>
          <br />
          <span className="gradient-text">I've Shipped</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="relative px-1 md:px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1.05}
            breakpoints={{
              480: { slidesPerView: 1.15, spaceBetween: 24 },
              640: { slidesPerView: 1.6, spaceBetween: 24 },
              1024: { slidesPerView: 2.3, spaceBetween: 24 },
              1280: { slidesPerView: 3.1, spaceBetween: 24 },
            }}
            grabCursor
            className="projects-swiper pb-4"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.number}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ WebkitUserDrag: "none", userSelect: "none" }}
                  className="group flex flex-col h-full bg-[#0d0d14] border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:border-borderHover hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] transition-all duration-200"
                >
                  {/* top row: number + tag */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-textPrimary">
                      {p.number}
                    </span>
                    <span className="text-textSecondary text-xs sm:text-sm font-medium mt-1 sm:mt-2">
                      {p.tag}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-textPrimary mb-2 sm:mb-3 leading-snug">
                    {p.title}
                  </h3>

                  {/* description */}
                  <p className="text-textSecondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                    {p.description}
                  </p>

                  {/* techstack */}
                  <p className="text-textTertiary text-[10px] sm:text-xs uppercase tracking-wide font-semibold mb-1">
                    Techstack used
                  </p>
                  <p className="text-textSecondary text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                    {p.stack}
                  </p>

                  {/* screenshot preview, pinned to bottom of card, with a soft violet glow beneath it */}
                  <div
                    className={`mt-auto w-full h-40 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} border border-border shadow-[0_25px_45px_-20px_rgba(127,119,221,0.5)]`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      <style>{`
        .projects-swiper .swiper-button-prev,
        .projects-swiper .swiper-button-next {
          width: 44px;
          height: 44px;
          margin-top: 0;
          top: 55%;
          background: rgba(13, 13, 20, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          color: #fff;
          z-index: 30;
          pointer-events: auto;
        }
        .projects-swiper .swiper-button-prev:after,
        .projects-swiper .swiper-button-next:after {
          font-size: 15px;
          font-weight: 700;
        }
        .projects-swiper .swiper-button-prev {
          left: 4px;
        }
        .projects-swiper .swiper-button-next {
          right: 4px;
        }
        @media (min-width: 1024px) {
          .projects-swiper .swiper-button-prev {
            left: 8px;
          }
          .projects-swiper .swiper-button-next {
            right: 8px;
          }
        }
        @media (max-width: 767px) {
          .projects-swiper .swiper-button-prev,
          .projects-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}