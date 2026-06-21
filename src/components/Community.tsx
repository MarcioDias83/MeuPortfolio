"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Community() {
  const { t, lang } = useLanguage();

  const items = [
    {
      icon: "fas fa-search",
      title: { pt: "Analítico", en: "Analytical" },
      desc: { pt: "Perfil orientado à solução de problemas com análise criteriosa", en: "Solution-oriented profile with careful analysis" },
    },
    {
      icon: "fas fa-comments",
      title: { pt: "Comunicação Clara", en: "Clear Communication" },
      desc: { pt: "Facilidade para explicar conceitos técnicos de forma simples", en: "Ability to explain technical concepts simply" },
    },
    {
      icon: "fas fa-brain",
      title: { pt: "Aprendizado Contínuo", en: "Continuous Learning" },
      desc: { pt: "Interesse constante em programação, automação e novas tecnologias", en: "Constant interest in programming, automation and new technologies" },
    },
    {
      icon: "fas fa-handshake",
      title: { pt: "Foco no Cliente", en: "Customer Focus" },
      desc: { pt: "Experiência em atendimento e compreensão das necessidades do usuário", en: "Experience in service and understanding user needs" },
    },
    {
      icon: "fas fa-users",
      title: { pt: "Trabalho em Equipe", en: "Teamwork" },
      desc: { pt: "Colaboração eficiente em ambientes multidisciplinares", en: "Efficient collaboration in multidisciplinary environments" },
    },
    {
      icon: "fas fa-clock",
      title: { pt: "Gestão de Tempo", en: "Time Management" },
      desc: { pt: "Organização e priorização de demandas em ambientes dinâmicos", en: "Organization and prioritization in dynamic environments" },
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{t.community.tag}</span>
          <h2>{t.community.title}</h2>
        </motion.div>
        <div className="community-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.title[lang]}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 12, padding: 24,
                display: "flex", alignItems: "center", gap: 16,
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: 48, height: 48, borderRadius: 8,
                  background: "rgba(124,58,237,0.1)", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, color: "var(--color-primary-light)",
                }}
              >
                <i className={item.icon} />
              </div>
              <div>
                <h6 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 14, marginBottom: 2 }}>
                  {item.title[lang]}
                </h6>
                <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{item.desc[lang]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .community-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }
        @media (max-width: 600px) { .community-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
