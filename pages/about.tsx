import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function About () {
  return (
  <div className = {styles.container}>
    <Head>
      <title>About</title>
      <meta name="description"
      content="About" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <button className={styles.button}>
      <Link href="/">
        <a className={styles.nav}>Home</a>
        </Link>
      </button>
    <main className={styles.main}>
      <h1 className={styles.title}>
        About
      </h1>
      <p>
        Are you tired of sweaty drunk people bumping against you at live shows? <br />
        Did you long for a different livestream experience during the beginning of the pandemic? <br />
        Ear stew is here to offer a new alternative to livestreaming. <br />
        Here, one can interact with the performer and the performance
        in ways besides commenting. <br />
        You will discover how...
      </p>
    </main>
  </div>
  )
}