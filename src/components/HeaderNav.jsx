
import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function HeaderNav({ onNavigate }) {
  const handleClick = () => {
    if (onNavigate) onNavigate();
  };
  
  const navItems = [
    { to: '/marketing', label: 'Marketing Solutions' },
    { to: '/sales', label: 'Sales Partners' },
    { to: '/about', label: 'About Us' },
    { to: '/careers', label: 'Careers' },
  ];

  return (
    <nav className={styles.headerNav}>
      {navItems.map((item, index) => (
        <Link 
          key={item.to}
          to={item.to} 
          className={styles.headerNavLink} 
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
      <Link 
        to="/partner" 
        className={styles.headerNavCta} 
        onClick={handleClick}
      >
        Become a Partner
      </Link>
    </nav>
  );
}
