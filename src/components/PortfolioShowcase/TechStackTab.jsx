import styles from "./TechStackTab.module.css";

import htmlIcon from "../../assets/html.svg";     
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/js.svg";
import nodeIcon from "../../assets/node.svg";
import reactIcon from "../../assets/react.svg";
import mongoIcon from "../../assets/mongo.svg";
import jwtIcon from "../../assets/jwt.svg";
import gitIcon from "../../assets/git.svg";
import figmaIcon from "../../assets/figma.svg";
import vueIcon from "../../assets/vue.svg";


const TECH_STACK = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Node JS", icon: nodeIcon },
  { name: "React + Native", icon: reactIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "JWT", icon: jwtIcon },
  { name: "GitHub", icon: gitIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Vue", icon: vueIcon },
];

export default function TechStackTab() {
  return (
    <div className={styles.grid}>
      {TECH_STACK.map((tech) => (
        <div className={styles.card} key={tech.name}>
          <div className={styles.icon}>
            <img src={tech.icon} alt={tech.name} className={styles.iconImg} />
          </div>
          <div className={styles.label}>{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

