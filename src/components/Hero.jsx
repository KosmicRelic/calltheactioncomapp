import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Do you want clients for <span className={styles.freeWord}>free?</span></h1>
        <p>
          Work with a team to scale your sales volume to hundred of thousands in annual revenue—at no cost to you.
        </p>
  <Link to="/partner" className={styles.ctaButton}>Start here</Link>
      </div>
    </section>
  );
}