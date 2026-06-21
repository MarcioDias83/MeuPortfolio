"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const certs = [
  { icon: "fas fa-graduation-cap", title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" }, desc: { pt: "Formação Superior em TI", en: "Higher Education in IT" } },
  { icon: "fas fa-certificate", title: { pt: "Pós-Graduação em Tecnologia", en: "Post-Graduate in Technology" }, desc: { pt: "Especialização na área de tecnologia", en: "Specialization in technology" } },
  { icon: "fas fa-language", title: { pt: "Inglês Técnico", en: "Technical English" }, desc: { pt: "Leitura e compreensão de documentação técnica", en: "Reading and understanding technical documentation" } },
  { icon: "fab fa-python", title: "Python", desc: { pt: "Em aprendizado contínuo", en: "Continuous learning" } },
  { icon: "fab fa-git-alt", title: "Git & GitHub", desc: { pt: "Controle de versão e colaboração", en: "Version control and collaboration" } },
  { icon: "fas fa-vial", title: { pt: "Qualidade de Software", en: "Software Quality" }, desc: { pt: "Testes funcionais e garantia da qualidade", en: "Functional testing and quality assurance" } },
  { icon: "fab fa-docker", title: "Docker", desc: { pt: "Conhecimentos em conteinerização", en: "Containerization knowledge" } },
  { icon: "fas fa-code", title: { pt: "Lógica de Programação", en: "Programming Logic" }, desc: { pt: "Fundamentos sólidos em desenvolvimento", en: "Solid development fundamentals" } },
];

export function Certifications() {
  const { t, lang } = useLanguage();

  const desc = (d: string | { pt: string; en: string }) =>
    typeof d === "string" ? d : d[lang];

  const title = (d: string | { pt: string; en: string }) =>
    typeof d === "string" ? d : d[lang];

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
              key={title(c.title)}
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
                {title(c.title)}
              </h6>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 12 }}>{desc(c.desc)}</p>
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
