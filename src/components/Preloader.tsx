"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "var(--color-bg-dark)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 24,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{
              width: 48, height: 48,
              borderRadius: "50%",
              border: "3px solid rgba(66,165,245,0.1)",
              borderTopColor: "var(--color-primary-light)",
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-josefin), sans-serif",
              fontSize: 12, color: "var(--color-text-muted)",
              letterSpacing: 3, textTransform: "uppercase",
            }}
          >
            {t.preloader}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
