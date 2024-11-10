import styles from "../../styles/Dashboard.module.css";
export default function Employeed() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Welcome to WorkWell</h1>
        <p>Rethinking Mental Health in the Workplace</p>
      </section>
      <section className={styles.score}>
        <img src='score.jpg' alt='Work Life Balance Score' />
      </section>
      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Set Goals &rarr;</h3>
          <p>Set your work life balance goals</p>
        </div>
        <div className={styles.card}>
          <h3>Self Assessments &rarr;</h3>
          <p>Evaluate your mental well-being regularly.</p>
        </div>
        <div className={styles.card}>
          <h3>Employer Rating &rarr;</h3>
          <p>Rate your employer based on your personal experience.</p>
        </div>
        <div className={styles.card}>
          <h3>Resources &rarr;</h3>
          <p>Get resources and tips for workplace mental health.</p>
        </div>
        <div className={styles.card}>
          <h3>Jobs for your heart &rarr;</h3>
          <p>Checkout jobs where you are most likely to shine.</p>
        </div>
        <div className={styles.card}>
          <h3>Market trends &rarr;</h3>
          <p>
            Checkout industry trends for salaries, resign rate and other
            insights.
          </p>
        </div>
      </section>
      <section className={styles.cta}>
        <h3>Need Help with a Work Injury?</h3>
        <p>
          If you've experienced a work-related injury, find support and
          resources to help you recover and manage your situation effectively.
        </p>
        <button className={styles.ctaButton}>Get Help for Work Injury</button>
      </section>
    </>
  );
}
