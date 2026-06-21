"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ResumeCTA() {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <section className="section section-dark" id="resume">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(145deg, rgba(25,118,210,0.08), rgba(25,118,210,0.02))",
            border: "1px solid var(--color-border-hover)",
            borderRadius: 16, padding: "56px 40px",
            textAlign: "center", maxWidth: 700, margin: "0 auto",
          }}
        >
          <i className={r.icon} style={{ fontSize: 40, color: "var(--color-primary-light)", marginBottom: 16 }} />
          <h3 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 26, fontWeight: 600, marginBottom: 12 }}>
            {r.title}
          </h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 28, fontSize: 15 }}>
            {r.desc}
          </p>
          <motion.a
            href="#"
            className="btn btn-primary"
            style={{ padding: "16px 40px", display: "inline-flex" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download" /> {r.btn}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
