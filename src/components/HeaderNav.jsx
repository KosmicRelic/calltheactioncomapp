
import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
  {/* Removed Benefits and Testimonials */}
  <Link to="/partner" className={styles.headerNavLink}>Partner With Us</Link>
  <Link to="/about" className={styles.headerNavLink}>About Us</Link>
      <Link to="/careers" className={styles.headerNavLink}>Careers</Link>
    </nav>
  );
}
