import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Auth.module.css";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a login process, then navigate to the dashboard
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>WorkWell - Login</title>
      </Head>

      <p>Type any valid email and password and click login</p>

      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
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
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
