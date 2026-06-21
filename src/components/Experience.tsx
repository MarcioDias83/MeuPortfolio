"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    date: { pt: "Período recente", en: "Recent period" },
    company: "Caixa Econômica Federal",
    role: { pt: "Suporte Técnico — Projeto de Migração", en: "Technical Support — Migration Project" },
    items: {
      pt: [
        "Participação em projeto de migração de estações de trabalho do setor jurídico",
        "Suporte aos usuários durante todo o processo de migração",
        "Instalação e configuração de equipamentos",
        "Validação do ambiente pós-migração",
      ],
      en: [
        "Participation in workstation migration project for the legal sector",
        "User support throughout the migration process",
        "Installation and configuration of equipment",
        "Post-migration environment validation",
      ],
    },
  },
  {
    date: { pt: "Período anterior", en: "Previous period" },
    company: "Souza Cruz",
    role: { pt: "Consultor de Vendas — Gestão de Carteira", en: "Sales Consultant — Portfolio Management" },
    items: {
      pt: [
        "Gestão de carteira de clientes varejistas",
        "Negociação e acompanhamento de resultados",
        "Desenvolvimento de relacionamento comercial",
        "Vendas consultivas e prospecção",
      ],
      en: [
        "Retail client portfolio management",
        "Negotiation and results monitoring",
        "Commercial relationship development",
        "Consultative sales and prospecting",
      ],
    },
  },
  {
    date: { pt: "Período anterior", en: "Previous period" },
    company: "Terra",
    role: { pt: "Operador de Vendas", en: "Sales Operator" },
    items: {
      pt: [
        "Vendas ativas e receptivas de serviços de internet",
        "Oferta de antivírus, e-mail e streaming de música",
        "Atendimento ao cliente e negociação",
        "Serviços de valor agregado",
      ],
      en: [
        "Active and inbound sales of internet services",
        "Offering antivirus, email, and music streaming",
        "Customer service and negotiation",
        "Value-added services",
      ],
    },
  },
];

export function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{t.experience.tag}</span>
          <h2>{t.experience.title}</h2>
        </motion.div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} lang={lang} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .timeline {
          position: relative; max-width: 800px; margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute; left: 24px; top: 0; bottom: 0;
          width: 1px; background: linear-gradient(to bottom, transparent, rgba(124,58,237,0.2), transparent);
        }
        @media (min-width: 768px) {
          .timeline::before { left: 50%; transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function TimelineItem({
  exp, index, lang,
}: {
  exp: typeof experiences[0];
  index: number;
  lang: "pt" | "en";
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="timeline-item"
    >
      <div
        style={{
          position: "absolute", left: 16, top: 4,
          width: 16, height: 16, borderRadius: "50%",
          background: "var(--color-bg-dark)",
          border: "3px solid var(--color-primary-light)",
          zIndex: 1,
          boxShadow: "0 0 12px rgba(124,58,237,0.3)",
        }}
        className="timeline-dot"
      />
      <div style={{ paddingLeft: 60 }} className="timeline-content">
        <div
          style={{
            fontSize: 12, textTransform: "uppercase", letterSpacing: 2,
            color: "var(--color-primary-light)", marginBottom: 8, fontWeight: 600,
          }}
        >
          {exp.date[lang]}
        </div>
        <div
          style={{
            fontFamily: "var(--font-josefin), sans-serif",
            fontSize: 16, fontWeight: 600, marginBottom: 4,
          }}
        >
          {exp.company}
        </div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 12 }}>
          {exp.role[lang]}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15 }}
          style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.7 }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            {exp.items[lang].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 + index * 0.15 }}
                style={{ marginBottom: 8, paddingLeft: 20, position: "relative" }}
              >
                <span style={{ position: "absolute", left: 0, color: "var(--color-primary-light)" }}>▹</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      <style jsx>{`
        .timeline-item {
          position: relative; padding-left: 0; padding-bottom: 48px;
        }
        @media (min-width: 768px) {
          .timeline-item { width: 50%; }
          .timeline-item:nth-child(odd) { padding-right: 40px; text-align: right; margin-left: 0; }
          .timeline-item:nth-child(even) { margin-left: 50%; padding-left: 40px; text-align: left; }
          .timeline-item:nth-child(odd) .timeline-dot { left: auto; right: -8px; }
          .timeline-item:nth-child(even) .timeline-dot { left: -8px; right: auto; }
        }
      `}</style>
    </motion.div>
  );
}
