"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useLanguage } from "@/context/LanguageContext";

const SECTIONS = ["home", "about", "skills", "experience", "projects", "contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTIONS);
  const { t, lang, toggle } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const labels: Record<string, string> = t.nav;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled
            ? "rgba(10,10,15,0.95)"
            : "rgba(10,10,15,0.85)",
          backdropFilter: "blur(24px) saturate(1.2)",
          WebkitBackdropFilter: "blur(24px) saturate(1.2)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          height: 68, display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            maxWidth: 1140, margin: "0 auto", padding: "0 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "100%",
          }}
        >
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            style={{
              fontFamily: "var(--font-josefin), sans-serif",
              fontSize: 22, fontWeight: 600,
              letterSpacing: 3, color: "#fff",
            }}
          >
            Már<span style={{ color: "var(--color-primary-light)" }}>cio</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={toggle}
              aria-label="Toggle language"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))",
                border: "1px solid rgba(167,139,250,0.2)",
                borderRadius: 6, padding: "4px 10px",
                color: "var(--color-primary-light)", fontSize: 12, fontWeight: 600,
                cursor: "pointer", letterSpacing: 1,
                transition: "0.2s",
              }}
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{
                display: "none", background: "none", border: "none",
                cursor: "pointer", color: "#fff", padding: 8,
              }}
              className="nav-toggle-btn"
            >
              <svg viewBox="0 0 100 100" style={{ width: 36, height: 36 }}>
                <path
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  style={{
                    fill: "none", stroke: "currentColor", strokeWidth: 4,
                    strokeLinecap: "round",
                    strokeDasharray: "40 139",
                    transition: "stroke-dasharray .4s, stroke-dashoffset .4s",
                    strokeDashoffset: menuOpen ? -98 : 0,
                  }}
                />
                <path
                  d="m 30,50 h 40"
                  style={{
                    fill: "none", stroke: "currentColor", strokeWidth: 4,
                    strokeLinecap: "round",
                  }}
                />
                <path
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                  style={{
                    fill: "none", stroke: "currentColor", strokeWidth: 4,
                    strokeLinecap: "round",
                    strokeDasharray: "40 180",
                    transition: "stroke-dasharray .4s, stroke-dashoffset .4s",
                    strokeDashoffset: menuOpen ? -138 : 0,
                  }}
                />
              </svg>
            </button>
          </div>

          <ul
            className={`nav-links-list ${menuOpen ? "open" : ""}`}
            style={{
              display: "flex", gap: 32, listStyle: "none",
            }}
          >
            {SECTIONS.map((id, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={activeId === id ? "active" : ""}
                  style={{
                    fontFamily: "var(--font-josefin), sans-serif",
                    fontSize: 11, textTransform: "uppercase",
                    letterSpacing: 2, color: activeId === id ? "#fff" : "rgba(255,255,255,0.6)",
                    position: "relative", padding: "22px 0",
                    transition: "0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {labels[id as keyof typeof labels]}
                  <span
                    style={{
                      position: "absolute", bottom: 0, left: "50%",
                      transform: "translateX(-50%)",
                      width: activeId === id ? "100%" : 0,
                      height: 2, background: "var(--color-primary-light)",
                      transition: "0.4s cubic-bezier(0.4,0,0.2,1)",
                      borderRadius: 2,
                    }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .nav-toggle-btn { display: block !important; }
            .nav-links-list {
              display: none !important;
              position: absolute; top: 68px; left: 0; right: 0;
              background: rgba(10,10,15,0.97);
              backdrop-filter: blur(24px);
              flex-direction: column; padding: 8px 24px; gap: 0;
              border-bottom: 1px solid rgba(255,255,255,0.06);
            }
            .nav-links-list.open { display: flex !important; }
            .nav-links-list a { padding: 14px 0 !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          }
        `}</style>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
