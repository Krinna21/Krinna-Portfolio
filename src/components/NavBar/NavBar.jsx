import styles from './NavBar.module.css';

export default function NavBar({ activeId }) {
  const links = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map(link => (
          <li key={link.id}>
            <a
              href={link.href}
              className={
                activeId === link.id
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
