"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TiltCard } from "@/components/TiltCard";

export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{s.tag}</span>
          <h2>{s.title}</h2>
        </motion.div>
        <div className="skills-grid">
          {s.list.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <TiltCard>
                <div
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: 12, padding: "32px 24px",
                    transition: "0.3s",
                    position: "relative", overflow: "hidden", cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 8,
                      background: "rgba(25,118,210,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, color: "var(--color-primary-light)", marginBottom: 16,
                    }}
                  >
                    <i className={skill.icon} />
                  </div>
                  <h5 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 16, marginBottom: 8 }}>
                    {skill.title}
                  </h5>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                    {skill.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        @media (max-width: 992px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
