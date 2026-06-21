"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        background: "var(--color-bg-dark)", paddingTop: 68,
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(7,7,13,1) 0%, transparent 40%)
          `,
          zIndex: 0,
        }}
      />
      <div
        style={{
          maxWidth: 1140, margin: "0 auto", padding: "0 24px",
          position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
        }}
        className="hero-grid"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: 13, textTransform: "uppercase", letterSpacing: 3,
              color: "var(--color-primary-light)", marginBottom: 12, fontWeight: 600,
            }}
          >
            {h.greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-josefin), sans-serif",
              fontSize: "clamp(42px, 6vw, 64px)",
              fontWeight: 700, lineHeight: 1.1, marginBottom: 8,
              background: "linear-gradient(135deg, #fff 30%, var(--color-primary-light) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {h.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-josefin), sans-serif",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 300, color: "var(--color-text-secondary)",
              marginBottom: 20, letterSpacing: 1,
            }}
          >
            {h.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              color: "var(--color-text-secondary)", maxWidth: 520,
              marginBottom: 28, fontWeight: 300, fontSize: 15, lineHeight: 1.8,
            }}
          >
            {h.desc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            className="hero-cta"
          >
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className="btn btn-primary"
            >
              <i className="fas fa-eye" /> {h.btnProjects}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              className="btn btn-outline"
            >
              <i className="fas fa-envelope" /> {h.btnContact}
            </a>
            <a href="#" className="btn btn-glass">
              <i className="fas fa-download" /> {h.btnResume}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          className="hero-image"
        >
          <div
            style={{
              width: 320, height: 320, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              padding: 4, position: "relative",
              boxShadow: "0 0 60px rgba(124,58,237,0.2)",
            }}
            className="hero-image-wrap"
          >
            <div
              style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "var(--color-bg-dark)",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src="/foto.jpg"
                alt="Márcio Dias"
                width={320}
                height={320}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        href="#about"
        onClick={(e) => handleClick(e, "about")}
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center",
          gap: 8, color: "var(--color-text-muted)", fontSize: 10,
          textTransform: "uppercase", letterSpacing: 2, cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 24, height: 36, border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: 12, position: "relative",
          }}
        >
          <div
            style={{
              width: 3, height: 8, borderRadius: 2,
              background: "var(--color-primary-light)",
              position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)",
            }}
            className="scroll-wheel"
          />
        </div>
        <span>{h.scroll}</span>
      </motion.a>

      <style jsx>{`
        @keyframes heroGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(124,58,237,0.2); }
          50% { box-shadow: 0 0 80px rgba(124,58,237,0.35); }
        }
        .hero-image-wrap { animation: heroGlow 4s ease-in-out infinite; }
        .scroll-wheel { animation: scrollWheel 2s ease-in-out infinite; }
        @keyframes scrollWheel {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(14px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .hero-image { order: -1; }
          .hero-image-wrap { width: 220px !important; height: 220px !important; }
          .hero-cta { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
