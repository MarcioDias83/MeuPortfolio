"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const achievements = [
  { icon: "fas fa-graduation-cap", title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" }, desc: { pt: "Formação superior em TI com visão sistêmica e técnica", en: "Higher education in IT with systemic and technical vision" } },
  { icon: "fas fa-certificate", title: { pt: "Pós-Graduação em Tecnologia", en: "Post-Graduate in Technology" }, desc: { pt: "Especialização cursada ampliando conhecimentos técnicos", en: "Specialization completed, expanding technical knowledge" } },
  { icon: "fas fa-language", title: { pt: "Inglês Técnico", en: "Technical English" }, desc: { pt: "Capacidade de leitura e compreensão de documentação técnica", en: "Ability to read and understand technical documentation" } },
  { icon: "fas fa-headset", title: { pt: "Suporte N1/N2", en: "N1/N2 Support" }, desc: { pt: "Experiência em help desk e service desk corporativo", en: "Experience in corporate help desk and service desk" } },
  { icon: "fas fa-users", title: { pt: "Comunicação e Negociação", en: "Communication & Negotiation" }, desc: { pt: "Habilidades desenvolvidas em vendas e relacionamento", en: "Skills developed in sales and relationship management" } },
  { icon: "fas fa-sync-alt", title: { pt: "Adaptabilidade", en: "Adaptability" }, desc: { pt: "Facilidade para aprender novas ferramentas e tecnologias", en: "Ease of learning new tools and technologies" } },
];

export function Achievements() {
  const { t, lang } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{t.achievements.tag}</span>
          <h2>{t.achievements.title}</h2>
        </motion.div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title[lang]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 12, padding: "28px 24px", textAlign: "center",
                transition: "0.3s",
              }}
            >
              <div style={{ fontSize: 32, color: "var(--color-primary-light)", marginBottom: 12 }}>
                <i className={a.icon} />
              </div>
              <h5 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 14, marginBottom: 8 }}>
                {a.title[lang]}
              </h5>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{a.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .achievements-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        @media (max-width: 768px) { .achievements-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .achievements-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
