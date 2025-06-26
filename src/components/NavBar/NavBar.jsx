import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#hero" className={styles.link}>Home</a></li>
        <li><a href="#about" className={styles.link}>About</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#contact" className={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}
