"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Community() {
  const { t, lang } = useLanguage();

  const items = [
    {
      icon: "fas fa-heart",
      title: { pt: "Apaixonado por Tecnologia", en: "Passionate About Tech" },
      desc: { pt: "Sou um profissional apaixonado por tecnologia, aprendizado contínuo e resolução de problemas", en: "A professional passionate about technology, continuous learning, and problem-solving" },
    },
    {
      icon: "fas fa-users",
      title: { pt: "Trabalho em Equipe", en: "Teamwork" },
      desc: { pt: "Facilidade para trabalhar em equipe e me adaptar rapidamente a novos ambientes e desafios", en: "Ease of teamwork and quick adaptation to new environments and challenges" },
    },
    {
      icon: "fas fa-lightbulb",
      title: { pt: "Tecnologia com Propósito", en: "Tech with Purpose" },
      desc: { pt: "Acredito que a tecnologia deve gerar valor para pessoas e empresas, unindo conhecimento técnico, comunicação clara e foco em resultados", en: "I believe technology should create value for people and businesses, combining technical knowledge, clear communication, and results focus" },
    },
    {
      icon: "fas fa-rocket",
      title: { pt: "Orientado a Resultados", en: "Results-Driven" },
      desc: { pt: "Meu objetivo é contribuir para projetos inovadores, crescer profissionalmente e ajudar organizações através da tecnologia", en: "My goal is to contribute to innovative projects, grow professionally, and help organizations through technology" },
    },
    {
      icon: "fas fa-sync-alt",
      title: { pt: "Aprendizado Contínuo", en: "Continuous Learning" },
      desc: { pt: "Interesse constante em programação, automação e novas tecnologias para estar sempre atualizado", en: "Constant interest in programming, automation, and new technologies to stay up-to-date" },
    },
    {
      icon: "fas fa-search",
      title: { pt: "Resolução de Problemas", en: "Problem Solving" },
      desc: { pt: "Perfil analítico e orientado à solução, identificando rapidamente falhas e propondo soluções eficientes", en: "Analytical and solution-oriented profile, quickly identifying failures and proposing efficient solutions" },
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
