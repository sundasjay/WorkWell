import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WorkWell - Rethinking Mental Health</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <img src='logo.png' />
        <h1 className={styles.title}>Welcome to WorkWell</h1>

        <div className={styles.grid}>
          <a href='/register' className={styles.card}>
            <h3>Register &rarr;</h3>
            <p>Join the community for workplace mental health.</p>
          </a>

          <a href='/login' className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Access your personalized WorkWell dashboard.</p>
          </a>
        </div>
      </main>

      <footer>Powered by NerdPower</footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
