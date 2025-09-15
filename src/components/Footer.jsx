import styles from '../App.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>CallTheAction.com</h3>
          <p>
            Partnering with businesses to deliver qualified customers with zero upfront cost. 
            We handle the marketing, you handle the delivery.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <p><Link to="/marketing">Marketing Solutions</Link></p>
          <p><Link to="/sales">Sales Partnerships</Link></p>
          <p><Link to="/partner">Become a Partner</Link></p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Company</h3>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/careers">Careers</Link></p>
          <p><a href="mailto:info@calltheaction.com">Contact</a></p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Get Started</h3>
          <p>Ready to grow your business?</p>
          <p><Link to="/partner">Start Your Partnership Today</Link></p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} CallTheAction.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
