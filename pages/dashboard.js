import { useState } from "react";
import Head from "next/head";
import JobSeeker from "../src/components/jobseeker";
import Employed from "../src/components/employed";
import Retirement from "../src/components/retirement";
import styles from "../styles/Dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  const [mode, setMode] = useState("Employed");

  const renderDashboard = () => {
    if (mode === "Job Seeker") return <JobSeeker />;
    if (mode === "Employed") return <Employed />;
    if (mode === "Retirement") return <Retirement />;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>WorkWell - Dashboard</title>
      </Head>

      <nav className={styles.nav}>
        <Link href='/dashboard' legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
        {/* <Link href='/set-goals' legacyBehavior>
          <a className={styles.navLink}>Set Goals</a>
        </Link> */}
        <Link href='/self-assessments' legacyBehavior>
          <a className={styles.navLink}>Self Assessments</a>
        </Link>
        {/* <Link href='/employer-rating' legacyBehavior>
          <a className={styles.navLink}>Employer Rating</a>
        </Link> */}
        <Link href='/resources ' legacyBehavior>
          <a className={styles.navLink}>Resources</a>
        </Link>
        <Link href='/profile' legacyBehavior>
          <a className={styles.navLink}>Profile</a>
        </Link>

        {/* Mode Selection Dropdown */}
        <div className={styles.modeDropdown}>
          <span>Mode: {mode}</span>
          <div className={styles.dropdownContent}>
            <button onClick={() => setMode("Job Seeker")}>Job Seeker</button>
            <button onClick={() => setMode("Employed")}>Employed</button>
            <button onClick={() => setMode("Retirement")}>Retirement</button>
          </div>
        </div>
      </nav>

      <main>{renderDashboard()}</main>
    </div>
  );
}
