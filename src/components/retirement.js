import styles from "../../styles/Dashboard.module.css";
export default function Retirement() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Welcome to WorkWell</h1>
        <p>Rethinking Mental Health in the Workplace</p>
      </section>
      <section className={styles.score}>
        <img src='retire.jpg' alt='Work Life Balance Score' />
      </section>
      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Pre-retirement Help &rarr;</h3>
          <p>Start preparing for retirement in a healthy way.</p>
        </div>
        <div className={styles.card}>
          <h3>Pension Calculator &rarr;</h3>
          <p>
            Calculate your pensions and get professional advise on investment.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Post-retirement Gigs &rarr;</h3>
          <p>Find jobs that are meant for elderly to help keep you busy.</p>
        </div>
        <div className={styles.card}>
          <h3>Resources &rarr;</h3>
          <p>Get resources and tips for workplace mental health.</p>
        </div>
        <div className={styles.card}>
          <h3>Early Retirement &rarr;</h3>
          <p>Want to retire early? Here is what you can do.</p>
        </div>
        <div className={styles.card}>
          <h3>Market trends &rarr;</h3>
          <p>
            Checkout industry trends for salaries, resign rate and other
            insights.
          </p>
        </div>
      </section>
    </>
  );
}
