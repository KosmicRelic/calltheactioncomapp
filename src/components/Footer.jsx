import styles from '../App.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} CallTheAction.com. All rights reserved.</p>
    </footer>
  );
}
