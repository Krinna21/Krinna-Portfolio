import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <h2>About Me</h2>
        <p>
          I’m <span className={styles.highlight}>Krinna</span>, a full-stack developer obsessed with <span className={styles.highlight}>details, speed, and beautiful UIs</span>.<br/>
          I love turning design systems into code, making animations feel magical, and building websites that feel like native apps.
        </p>
        <div className={styles.btnRow}>
          <a className={styles.primaryBtn} href="/Krinna_Resume.pdf" download>
            <span>⬇</span> Download Resume
          </a>
          <a className={styles.outlineBtn} href="#projects">
            <span></span> View Projects
          </a>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>{"</>"}</div>
            <div>
              <div className={styles.statNum}>6+</div>
              <div className={styles.statLabel}>Total Projects</div>
              <div className={styles.statDesc}>Web & mobile solutions</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🎓</div>
            <div>
              <div className={styles.statNum}>2</div>
              <div className={styles.statLabel}>Certificates</div>
              <div className={styles.statDesc}>Skills validated</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🗓️</div>
            <div>
              <div className={styles.statNum}>5</div>
              <div className={styles.statLabel}>Year of Experience</div>
              <div className={styles.statDesc}>Learning journey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
