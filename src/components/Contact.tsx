"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Erro ao enviar mensagem");
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setErrorMsg("Erro de conexão. Tente novamente.");
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <section className="section" id="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: "center", padding: 80 }}
          >
            <div
              style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "rgba(124,58,237,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px", fontSize: 36, color: "var(--color-primary-light)",
              }}
            >
              <i className="fas fa-check-circle" />
            </div>
            <h3 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 24, marginBottom: 8 }}>
              {c.sent}
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>{c.sentDesc}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span>{c.tag}</span>
          <h2>{c.title}</h2>
        </motion.div>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
              {c.heading}
            </h3>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: 28, fontSize: 15 }}>
              {c.desc}
            </p>

            <ContactItem icon="fas fa-phone-alt" label={lang === "pt" ? "Telefone" : "Phone"} value={c.phone} />
            <ContactItem icon="fas fa-envelope" label="Email" value={c.emailAddr} />
            <ContactItem icon="fas fa-map-marker-alt" label={lang === "pt" ? "Localização" : "Location"} value={c.location} />
            <ContactItem icon="fab fa-linkedin-in" label="LinkedIn" value={c.linkedin} />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ display: "flex", gap: 12, marginTop: 32 }}
            >
              {[
                { icon: "fab fa-github", href: "https://github.com/MarcioDias83" },
                { icon: "fab fa-linkedin-in", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
                { icon: "fab fa-youtube", href: "#" },
              ].map((s) => (
                <motion.a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, background: "var(--color-primary)" }}
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--color-border-subtle)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: "var(--color-text-secondary)",
                    transition: "0.3s",
                  }}
                >
                  <i className={s.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ width: "100%" }}>
              <input
                type="text"
                placeholder={c.name}
                required
                minLength={2}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                disabled={state === "sending"}
              />
              <input
                type="email"
                placeholder={c.email}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                disabled={state === "sending"}
              />
              <input
                type="text"
                placeholder={c.subject}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                style={inputStyle}
                disabled={state === "sending"}
              />
              <textarea
                placeholder={c.message}
                required
                minLength={10}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, height: 140, resize: "vertical" }}
                disabled={state === "sending"}
              />

              {state === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}
                >
                  {errorMsg}
                </motion.p>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: 16, opacity: state === "sending" ? 0.7 : 1 }}
                whileHover={state === "sending" ? {} : { scale: 1.02 }}
                whileTap={state === "sending" ? {} : { scale: 0.98 }}
                disabled={state === "sending"}
              >
                {state === "sending" ? (
                  <><i className="fas fa-spinner fa-spin" /> Enviando…</>
                ) : (
                  <><i className="fas fa-paper-plane" /> {c.send}</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
        }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "14px 18px", marginBottom: 16,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--color-border-subtle)",
  borderRadius: 8, color: "#fff",
  fontFamily: "var(--font-open-sans), sans-serif",
  fontSize: 14, outline: "none",
  transition: "border-color 0.3s",
};

function ContactItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
      <div
        style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, color: "var(--color-primary-light)",
        }}
      >
        <i className={icon} />
      </div>
      <div>
        <h6 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--color-text-muted)", marginBottom: 2 }}>
          {label}
        </h6>
        <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{value}</span>
      </div>
    </div>
  );
}
