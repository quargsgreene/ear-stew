import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {
  const [volume, setVolume] = useState(false);
  const toggleMute = () => {
    setVolume(!volume);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ear Stew Home</title>
        <meta name="description" content="Ear Stew Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={toggleMute} className={styles.button}>{volume ? '🔊': '🔇'}</button>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Ear Stew
        </h1>

        <h2 className={styles.description}>
          Listen differently...
        </h2>

        <nav>
          <ul className={styles.list}>
            <li className={styles.listitem}>
              <a href="#">
              🥘 Enter
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="/about" >
              &#128066; About
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="#">
              &#128126; Stats
              </a>
            </li>
          </ul>
        </nav>

      </main>
    </div>
  )
}
