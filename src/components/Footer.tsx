"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, lang } = useLanguage();

  const links = [
    { href: "#home", label: lang === "pt" ? "Home" : "Home" },
    { href: "#about", label: lang === "pt" ? "Sobre" : "About" },
    { href: "#skills", label: lang === "pt" ? "Habilidades" : "Skills" },
    { href: "#projects", label: lang === "pt" ? "Projetos" : "Projects" },
    { href: "#contact", label: lang === "pt" ? "Contato" : "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        background: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "32px 0", textAlign: "center",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 16 }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: 13, color: "var(--color-text-muted)", transition: "0.3s" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
          © 2026 <a href="#" style={{ color: "var(--color-primary-light)" }}>Márcio</a>. {t.footer.rights}
        </p>
      </div>
    </motion.footer>
  );
}
