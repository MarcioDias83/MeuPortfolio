"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TiltCard } from "@/components/TiltCard";

const projects = [
  {
    icon: "fas fa-laptop-code",
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
    desc: { pt: "Site portfólio desenvolvido com Next.js, TypeScript, Three.js e Framer Motion.", en: "Portfolio website built with Next.js, TypeScript, Three.js and Framer Motion." },
    tags: ["Next.js", "TypeScript", "Three.js", "Framer Motion"],
  },
  {
    icon: "fas fa-robot",
    title: { pt: "Automação com Python", en: "Python Automation" },
    desc: { pt: "Scripts de automação de tarefas e processos utilizando Python.", en: "Task and process automation scripts using Python." },
    tags: ["Python", "Automação", "APIs"],
  },
  {
    icon: "fas fa-check-double",
    title: { pt: "Testes de Software", en: "Software Testing" },
    desc: { pt: "Projetos acadêmicos e práticos de testes funcionais e validação de sistemas.", en: "Academic and practical projects in functional testing and system validation." },
    tags: ["QA", "Testes", "Validação"],
  },
  {
    icon: "fas fa-terminal",
    title: { pt: "Estudos em Desenvolvimento", en: "Development Studies" },
    desc: { pt: "Repositórios com exercícios, algoritmos e projetos de aprendizado em Python.", en: "Repositories with exercises, algorithms and learning projects in Python." },
    tags: ["Python", "Git", "Lógica"],
  },
];

export function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section className="section section-dark" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{t.projects.tag}</span>
          <h2>{t.projects.title}</h2>
        </motion.div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title[lang]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard>
                <div
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-subtle)",
                    borderRadius: 12, overflow: "hidden",
                    transition: "0.3s",
                  }}
                >
                  <div
                    style={{
                      height: 200, background: "#12121e",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 48, color: "rgba(167,139,250,0.08)",
                      position: "relative", overflow: "hidden",
                    }}
                  >
                    <i className={p.icon} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h5 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 17, marginBottom: 8 }}>
                      {p.title[lang]}
                    </h5>
                    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 14 }}>
                      {p.desc[lang]}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "4px 12px", borderRadius: 20, fontSize: 10,
                            background: "rgba(124,58,237,0.1)", color: "var(--color-primary-light)",
                            textTransform: "uppercase", letterSpacing: 1, fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      <a href="https://github.com/marciodias" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600 }}>
                        <i className="fab fa-github" /> {t.projects.code}
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
        }
        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
