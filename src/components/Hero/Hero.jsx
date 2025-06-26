import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <main className={styles.hero} id="hero">
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1>Krinna Patel</h1>
        <p>Senior Frontend Developer</p>
      </motion.div>
    </main>
  );
}
