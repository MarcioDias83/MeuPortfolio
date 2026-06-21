"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed", bottom: 24, right: 24, zIndex: 99,
            width: 44, height: 44, borderRadius: "50%",
            background: "var(--color-primary)", color: "#fff", border: "none",
            cursor: "pointer", fontSize: 18,
            boxShadow: "0 4px 16px rgba(25,118,210,0.3)",
          }}
        >
          <i className="fas fa-chevron-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
