import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: "BizSupportPro",
    image: "https://your-image-url-or-placeholder.png",
    description: "Ticketing & subscription management platform for small businesses.",
    tech: ["React", "Node.js", "Express", "Stripe"],
    live: "https://krinna21.github.io/bizsupportpro/",    
    code: "https://github.com/Krinna21/bizsupportpro"
  },
  {
    title: "WhatToWear",
    image: "https://your-image-url-or-placeholder.png",
    description: "Weather-based outfit suggestion app built with React.",
    tech: ["React", "OpenWeather API"],
    live: "#",  
    code: "https://github.com/Krinna21/what-to-wear"
  },
  {
    title: "MassItPro",
    image: "https://your-image-url-or-placeholder.png",
    description: "Mass email marketing web platform with analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://massitpro.com",
    code: "https://github.com/Krinna21/massitpro"
  },
];


export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.inner}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((proj, idx) => (
            <div className={styles.card} key={proj.title}>
              <img className={styles.img} src={proj.image} alt={proj.title} />
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.desc}>{proj.description}</p>
              <div className={styles.tech}>
                {proj.tech.map(t => (
                  <span className={styles.badge} key={t}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>Live</a>
                <a href={proj.code} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
