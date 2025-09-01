import React from 'react';
import styles from '../App.module.css';

export default function About() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 28, background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(83,138,216,0.09)' }}>
      <div style={{ marginBottom: 18, display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontWeight: 600, fontSize: 18, lineHeight: 1 }}>About</span>
        <div className={styles.blackLogo} style={{ display: 'inline-block', marginLeft: 10 }}>
          <span className={styles.blackLogoC}>C</span>ALL
          <span className={styles.blackLogoT}>T</span>HE
          <span className={styles.blackLogoA}>A</span>CTION
          <span className={styles.blackLogoDotCom}>.COM</span>
        </div>
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 0 }}>
        <p style={{ marginBottom: 12 }}>
          <b>CALLTHEACTION.COM</b> is a team of marketers, closers, and builders who believe in one thing: results. We help businesses grow by connecting them with the right customers and closing the deals that matter.
        </p>
        <ul style={{ paddingLeft: 22, margin: 0, fontSize: 15, color: '#222', listStyle: 'disc inside' }}>
          <li style={{ marginBottom: 6 }}><b>Our Mission:</b> To help businesses win by delivering real, measurable growth.</li>
          <li style={{ marginBottom: 6 }}><b>Our Approach:</b> We combine world-class marketing with relentless sales execution.</li>
          <li style={{ marginBottom: 6 }}><b>Our Promise:</b> No fluff, no empty promises—just results you can see and feel.</li>
        </ul>
        <p style={{ marginTop: 14, color: '#3b82f6', fontWeight: 600, fontSize: 15 }}>
          If you want to work with a team that cares about your success as much as you do, you’re in the right place.
        </p>
      </div>
    </div>
  );
}
