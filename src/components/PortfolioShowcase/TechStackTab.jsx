import styles from "./TechStackTab.module.css";

const TECH_STACK = [
  { name: "HTML", icon: <div className={styles.iconPlaceholder}>HTML</div> },
  { name: "CSS", icon: <div className={styles.iconPlaceholder}>CSS</div> },
  { name: "JavaScript", icon: <div className={styles.iconPlaceholder}>JS</div> },
  { name: "Tailwind CSS", icon: <div className={styles.iconPlaceholder}>TW</div> },
  { name: "Express JS", icon: <div className={styles.iconPlaceholder}>Ex</div> },
  { name: "Node JS", icon: <div className={styles.iconPlaceholder}>Node</div> },
  { name: "React + Native", icon: <div className={styles.iconPlaceholder}></div> },
  { name: "MongoDB", icon: <div className={styles.iconPlaceholder}></div> },
  { name: "JWT", icon: <div className={styles.iconPlaceholder}>JWT</div> },
  { name: "PostgreSQL", icon: <div className={styles.iconPlaceholder}>PG</div> },
  { name: "TypeScript", icon: <div className={styles.iconPlaceholder}>TS</div> },
  { name: "Docker", icon: <div className={styles.iconPlaceholder}></div> },
];

export default function TechStackTab() {
  return (
    <div className={styles.grid}>
      {TECH_STACK.map((tech) => (
        <div className={styles.card} key={tech.name}>
          <div className={styles.icon}>{tech.icon}</div>
          <div className={styles.label}>{tech.name}</div>
        </div>
      ))}
    </div>
  );
}
