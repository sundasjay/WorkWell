import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Auth.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WorkWell - Register</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Register</h1>
        <form className={styles.form}>
          <label className={styles.label}>Email:</label>
          <input type='email' name='email' className={styles.input} required />
          <label className={styles.label}>Password:</label>
          <input
            type='password'
            name='password'
            className={styles.input}
            required
          />
          <button type='submit' className={styles.button}>
            Register
          </button>
        </form>
        <p className={styles.text}>
          Already have an account?{" "}
          <Link href='/login' legacyBehavior>
            <a className={styles.link}>Login</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
