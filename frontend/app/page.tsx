import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the Zoom App Tester</h1>
          <div className={styles.grid}>
            <a
              href="https://zoom.us/oauth/authorize?response_type=code&client_id=HTy8rNVSSKa375Ya_hIAvg&redirect_uri=htps://localhost:3000
"
              className={styles.card}
            >
              <h2>Documentation &rarr;</h2>
              <p>Login in Zoom</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Explore the Next.js 13 playground.</p>
            </a>

            <a
              href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
