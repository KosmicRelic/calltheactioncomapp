import styles from '../App.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Do you want to get clients for <span className={styles.freeWord}>free?</span></h1>
        <p>We market, qualify, and close leads. You deliver your service.</p>
        <a href="#partner" className={styles.ctaButton}>Partner With Us</a>
      </div>
    </section>
  );
}