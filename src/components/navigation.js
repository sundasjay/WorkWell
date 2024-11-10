import styles from "../../styles/Dashboard.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href='/dashboard' legacyBehavior>
        <a className={styles.navLink}>Home</a>
      </Link>
      <Link href='/set-goals' legacyBehavior>
        <a className={styles.navLink}>Set Goals</a>
      </Link>
      <Link href='/self-assessments' legacyBehavior>
        <a className={styles.navLink}>Self Assessments</a>
      </Link>
      <Link href='/employer-rating' legacyBehavior>
        <a className={styles.navLink}>Employer Rating</a>
      </Link>
      <Link href='/resources' legacyBehavior>
        <a className={styles.navLink}>Resources</a>
      </Link>
      <Link href='/profile' legacyBehavior>
        <a className={styles.navLink}>Profile</a>
      </Link>
    </nav>
  );
}
