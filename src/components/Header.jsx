import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import HeaderNav from './HeaderNav';
import styles from '../App.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.innerHeader}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logoC}>C</span>ALL
          <span className={styles.logoT}>T</span>HE
          <span className={styles.logoA}>A</span>CTION
          <span className={styles.logoDotCom}>.COM</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <HeaderNav />
        </div>
        
        {/* Mobile Hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
          <RxHamburgerMenu size={34} strokeWidth={0.4}/>
        </button>
      </div>
      
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className={styles.mobileMenuBackdrop} onClick={() => setMenuOpen(false)}>
          <div
            className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.mobileMenuHeader}>
              <Link to="/" className={styles.mobileLogoLink}>
                <span className={styles.logoIcon}>⚡</span>
                <span className={styles.mobileLogoText}>CALLTHEACTION.COM</span>
              </Link>
              <button
                className={styles.mobileMenuClose}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <RxCross2 size={24} />
              </button>
            </div>
            <HeaderNav onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
