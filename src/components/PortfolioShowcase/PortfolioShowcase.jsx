import { useState } from "react";
import styles from "./PortfolioShowcase.module.css";
import ProjectsTab from "./ProjectsTab";
import CertificatesTab from "./CertificatesTab";
import TechStackTab from "./TechStackTab";

const ProjectIcon = () => <span className={styles.icon}>{"<>"}</span>;
const CertIcon = () => <span className={styles.icon}>{"🏆"}</span>;
const TechIcon = () => <span className={styles.icon}>{"⚙️"}</span>;

const TABS = [
  { key: "projects", label: "Projects", icon: <ProjectIcon /> },
  { key: "certificates", label: "Certificates", icon: <CertIcon /> },
  { key: "techstack", label: "Tech Stack", icon: <TechIcon /> },
];

export default function PortfolioShowcase() {
  const [tab, setTab] = useState("projects");

  return (
    <section className={styles.showcase} id="portfolio-showcase">
      <div className={styles.header}>
        <div className={styles.heading}>Portfolio Showcase</div>
        <div className={styles.subheading}>
          Explore my journey through <b>projects</b>, <b>certifications</b>, and <b>technical expertise</b>.<br />
          Each section represents a milestone in my continuous learning path.
        </div>
      </div>

      <nav className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`${styles.tabBtn} ${tab === t.key ? styles.active : ""}`}
            onClick={() => setTab(t.key)}
            type="button"
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.tabContent}>
        {tab === "projects" && <ProjectsTab />}
        {tab === "certificates" && <CertificatesTab />}
        {tab === "techstack" && <TechStackTab />}
      </div>
    </section>
  );
}
