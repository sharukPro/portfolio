import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Home'
import logo from '../assets/s.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>

        <title>Sharook Andathodan</title>
        <meta name="description" content="personal portfolio app" />

        <meta property="og:url" content="https://janhvipatil.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sharook Andathodan" />
        <meta property="og:description" content="personal portfolio app" />
        <meta property="og:image" content={logo} />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:domain" content="janhvipatil.me" /> */}
        <meta property="twitter:url" content="https://janhvipatil.me" />
        <meta name="twitter:title" content="Janhvi Patil" />
        <meta name="twitter:description" content="personal portfolio app" />
        <meta name="twitter:image" content={logo} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/log32-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/log16-16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323538" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <main>
        <Landing />
      </main>
    </div>
  )
}

export default Home