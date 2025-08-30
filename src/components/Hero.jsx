import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Do you want clients for <span className={styles.freeWord}>free?</span></h1>
        <p>We market, qualify, and close leads. You deliver your service.</p>
  <Link to="/partner" className={styles.ctaButton}>Partner With Us</Link>
      </div>
    </section>
  );
}