import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <span className={styles.new}>PARTNER</span>
      <span><span className={styles.bannerHighlight}>Limited partnership slots now available</span> — Apply today to secure your spot</span>
      <Link to="/partner" className={styles.bannerCta}>
        Apply Now
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{marginLeft: '8px'}}>
          <path d="M15.7071 8.70711C16.0976 8.31659 16.0976 7.68342 15.7071 7.2929L9.34315 1.29289C8.95262 0.902369 8.31946 0.902369 7.92893 1.29289C7.53841 1.68342 7.53841 2.31658 7.92893 2.70711L13.2218 8L7.92893 13.2929C7.53841 13.6834 7.53841 14.3166 7.92893 14.7071C8.31946 15.0976 8.95262 15.0976 9.34315 14.7071L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="white"/>
        </svg>
      </Link>
    </div>
  );
}
