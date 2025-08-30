import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import HeaderNav from './HeaderNav';
import styles from '../App.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
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
          <RxHamburgerMenu size={32} />
        </button>
      </div>
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.mobileMenuClose}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <RxCross2 size={32} color="white" />
          </button>
          <HeaderNav />
        </div>
      )}
    </header>
  );
}
