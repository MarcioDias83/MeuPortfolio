"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CountUp } from "@/components/CountUp";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{a.tag}</span>
          <h2>{a.title}</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-josefin), sans-serif",
                fontSize: 26, fontWeight: 600, marginBottom: 16,
              }}
            >
              {a.heading}
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontWeight: 300, marginBottom: 16, fontSize: 15 }}>
              <span dangerouslySetInnerHTML={{ __html: a.p1 }} />
            </p>
            <p style={{ color: "var(--color-text-secondary)", fontWeight: 300, marginBottom: 16, fontSize: 15 }}>
              <span dangerouslySetInnerHTML={{ __html: a.p2 }} />
            </p>
            <p style={{ color: "var(--color-text-secondary)", fontWeight: 300, marginBottom: 16, fontSize: 15 }}>
              <span dangerouslySetInnerHTML={{ __html: a.p3 }} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "100%", borderRadius: 16,
                background: "linear-gradient(145deg, var(--color-bg-card), #111122)",
                border: "1px solid var(--color-border-subtle)",
                aspectRatio: "4/3",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 80, color: "rgba(66,165,245,0.12)",
              }}
            >
              <i className="fas fa-code" />
            </div>
          </motion.div>
        </div>

        <div className="highlights-grid">
          {a.highlights.map((h: { num: number; label: string }, i: number) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 12, padding: "24px 16px", textAlign: "center",
                transition: "0.3s",
              }}
              whileHover={{
                y: -4,
                borderColor: "rgba(66,165,245,0.2)",
                background: "rgba(25,118,210,0.06)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-josefin), sans-serif",
                  fontSize: 36, fontWeight: 700,
                  color: "var(--color-primary-light)", lineHeight: 1,
                }}
              >
                <CountUp target={h.num} />+
              </div>
              <p
                style={{
                  fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5,
                  color: "var(--color-text-muted)", marginTop: 8,
                }}
              >
                {h.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .about-grid {
          display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center;
        }
        .highlights-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
