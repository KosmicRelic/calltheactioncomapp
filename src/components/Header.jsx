import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderNav from './HeaderNav';
import styles from '../App.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.logo}>
          <span className={styles.logoC}>C</span>ALL
          <span className={styles.logoT}>T</span>HE
          <span className={styles.logoA}>A</span>CTION
          <span style={{ fontWeight: 300 }}>.com</span>
        </div>
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
        <div className={styles.mobileMenu} onClick={() => setMenuOpen(false)}>
          <HeaderNav />
        </div>
      )}
    </header>
  );
}
