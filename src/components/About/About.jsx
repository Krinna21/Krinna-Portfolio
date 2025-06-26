import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <h2>About Me</h2>
        <p>
          I’m Krinna, a senior frontend developer obsessed with <span className={styles.highlight}>details, speed, and beautiful UIs</span>.
          I love turning design systems into code, making animations feel magical, and making websites that feel like native apps.
        </p>
      </div>
    </section>
  );
}
