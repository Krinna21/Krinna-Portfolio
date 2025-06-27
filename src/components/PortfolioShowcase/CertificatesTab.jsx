import styles from "./CertificatesTab.module.css";

import cert1 from "../../assets/cert1.jpeg";
import cert2 from "../../assets/cert2.png";

const certificates = [
  {
    img: cert1,
    alt: "BSc in IT Certificate",
    name: "Bachelor of Science in Information Technology",
    date: "2017 – 2020"
  },
  {
    img: cert2,
    alt: "Software Engineering Certificate (Coming Soon)",
    name: "Software Engineering Certificate",
    date: "Expected July 2025" 
  }
];

export default function CertificatesTab() {
  return (
    <div className={styles.grid}>
      {certificates.map((cert, idx) => (
        <div className={styles.card} key={cert.name}>
          <img src={cert.img} alt={cert.alt} className={styles.img} />
          <div className={styles.meta}>
            <div className={styles.certName}>{cert.name}</div>
            <div className={styles.certDate}>{cert.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
