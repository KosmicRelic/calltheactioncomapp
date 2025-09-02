
import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function HeaderNav({ onNavigate }) {
  const handleClick = (e) => {
    if (onNavigate) onNavigate();
  };
  return (
    <nav className={styles.headerNav}>
      <Link to="/marketing" className={styles.headerNavLink} onClick={handleClick}>Marketing</Link>
      <Link to="/sales" className={styles.headerNavLink} onClick={handleClick}>Sales</Link>
      <Link to="/partner" className={styles.headerNavLink} onClick={handleClick}>Partner With Us</Link>
      <Link to="/about" className={styles.headerNavLink} onClick={handleClick}>About Us</Link>
      <Link to="/careers" className={styles.headerNavLink} onClick={handleClick}>Careers</Link>
    </nav>
  );
}
