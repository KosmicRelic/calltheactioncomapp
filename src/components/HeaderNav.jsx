import styles from '../App.module.css';

export default function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <a href="#benefits" className={styles.headerNavLink}>Benefits</a>
      <a href="#testimonials" className={styles.headerNavLink}>Testimonials</a>
      <a href="#Careers" className={styles.headerNavLink}>Partner With Us</a>
      <a href="#Careers" className={styles.headerNavLink}>About Us</a>
      <a href="#Careers" className={styles.headerNavLink}>Careers</a>
    </nav>
  );
}
