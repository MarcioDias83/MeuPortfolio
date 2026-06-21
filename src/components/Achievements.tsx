"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const achievements = [
  { icon: "fas fa-headset", title: { pt: "Suporte Técnico e Atendimento", en: "Technical Support & Service" }, desc: { pt: "Experiência em suporte técnico e atendimento ao usuário em empresas de grande porte", en: "Experience in technical support and user service at large companies" } },
  { icon: "fas fa-graduation-cap", title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" }, desc: { pt: "Formação superior em TI com visão sistêmica e técnica", en: "Higher education in IT with systemic and technical vision" } },
  { icon: "fab fa-linux", title: { pt: "Linux e Windows", en: "Linux & Windows" }, desc: { pt: "Conhecimento sólido em Linux (Mint/Ubuntu) e Windows 10/11", en: "Solid knowledge of Linux (Mint/Ubuntu) and Windows 10/11" } },
  { icon: "fas fa-brain", title: { pt: "Aprendizado e Adaptação", en: "Learning & Adaptation" }, desc: { pt: "Facilidade de aprendizado e adaptação a novas ferramentas e tecnologias", en: "Ease of learning and adapting to new tools and technologies" } },
  { icon: "fas fa-search", title: { pt: "Perfil Analítico", en: "Analytical Profile" }, desc: { pt: "Perfil analítico e orientado à solução de problemas", en: "Analytical profile focused on problem-solving" } },
  { icon: "fas fa-comments", title: { pt: "Comunicação e Foco no Cliente", en: "Communication & Customer Focus" }, desc: { pt: "Comunicação clara e foco no cliente para compreender necessidades e entregar soluções", en: "Clear communication and customer focus to understand needs and deliver solutions" } },
  { icon: "fas fa-sync-alt", title: { pt: "Programação e Automação", en: "Programming & Automation" }, desc: { pt: "Interesse contínuo em programação, automação e novas tecnologias", en: "Continuous interest in programming, automation and new technologies" } },
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
