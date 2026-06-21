"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const certs = [
  { icon: "fab fa-aws", title: "AWS Certified", desc: "Solutions Architect" },
  { icon: "fab fa-google", title: "Google Cloud", desc: "Associate Cloud Engineer" },
  { icon: "fab fa-microsoft", title: "Azure AZ-900", desc: "Azure Fundamentals" },
  { icon: "fas fa-shield-alt", title: "CompTIA Security+", desc: "Security Certification" },
  { icon: "fab fa-docker", title: "Docker", desc: "Docker Certified Associate" },
  { icon: "fab fa-linux", title: "Linux Professional", desc: "LPIC-1 Certified" },
  { icon: "fas fa-database", title: "MongoDB", desc: "Associate Developer" },
  { icon: "fas fa-project-diagram", title: "Scrum Master", desc: "Professional Scrum Master" },
];

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{t.certs.tag}</span>
          <h2>{t.certs.title}</h2>
        </motion.div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--color-bg-surface)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 12, padding: "28px 20px", textAlign: "center",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: 56, height: 56, margin: "0 auto 16px",
                  background: "rgba(255,255,255,0.04)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, color: "var(--color-primary-light)",
                }}
              >
                <i className={c.icon} />
              </div>
              <h6 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 14, marginBottom: 4 }}>
                {c.title}
              </h6>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 12 }}>{c.desc}</p>
              <a href="#" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600 }}>
                {t.certs.verify}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .certs-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 992px) { .certs-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px) { .certs-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </section>
  );
}
