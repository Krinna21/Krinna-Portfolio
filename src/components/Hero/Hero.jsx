import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CanvasBackground from "./CanvasBackground";
import styles from "./Hero.module.css";

export default function Hero() {
  const [scatter, setScatter] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < window.innerHeight * 0.3) {
        setScatter(true);
      } else {
        setScatter(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.hero} id="hero">
      <CanvasBackground className={styles.particles} scatter={scatter} />
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>Krinna Patel</h1>
        <p>Full-Stack Developer</p>
      </motion.div>
    </main>
  );
}
