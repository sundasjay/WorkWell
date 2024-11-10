import styles from "../../styles/Dashboard.module.css";
export default function Jobseeker() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Welcome to WorkWell</h1>
        <p>Rethinking Mental Health in the Workplace</p>
      </section>
      <section className={styles.score}>
        <img src='apply.jpg' alt='Work Life Balance Score' />
      </section>
      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Set Goals &rarr;</h3>
          <p>Set your goals for an ideal careers.</p>
        </div>
        <div className={styles.card}>
          <h3>Resume and Cover Letters &rarr;</h3>
          <p>
            Checkout our AI guided tool to help you create efficient resumes.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Popular Employers &rarr;</h3>
          <p>Read top favorite employees rated to match your preferences.</p>
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
        <h3>Are you scared of switching jobs dueto visa binds?</h3>
        <p>
          Get connected with migration lawyers and union to get teh help you
          need to say hi to your new, healthier job.
        </p>
        <button className={styles.ctaButton}>Get Help Now</button>
      </section>
    </>
  );
}
