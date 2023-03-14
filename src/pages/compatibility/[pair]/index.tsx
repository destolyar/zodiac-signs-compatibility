import type { GetServerSidePropsContext } from 'next'
import { Sign } from '@/components/Sign'
import { Progressbar } from '@/components/Progressbar'
import { InlineShareButtons } from 'sharethis-reactjs';
import { useCallback } from 'react'
import Head from 'next/head'
import signs from '@/data/signs.json'
import pairs from '@/data/zodiac-pairs.json'
import ReactGA from 'react-ga';
import Link from 'next/link'

import styles from '@/styles/Compatibility.module.scss'


export default function Home({ firstSign, secondSign }:
  { firstSign: SignInterface, secondSign: SignInterface }) {

  const pair = pairs.find(pair =>
    pair.possibleCombinations.includes(firstSign.name) &&
    pair.possibleCombinations.includes(secondSign.name)
  )

  const handleShare = useCallback(() => {
    ReactGA.event({
      category: "Astro compatibility",
      action: "Share compatibility"
    })
  }, [])

  const handleStartOver = useCallback(() => {
    ReactGA.event({
      category: "Astro compatibility",
      action: "Try astro compatibility button clicked"
    })
  }, [])

  const SHARE_DESCRIPTION = "Check my zodiac compatibility results!"

  return (
    <>
      <Head>
        <title>Compatibility result!</title>
      </Head>
      <h1 className={styles.pageTitle}>Is it a match?</h1>
      {pair && <main className={styles.container}>
        <section className={styles.signs}>
          <Sign signInfo={firstSign} />
          <span className={styles.plus}>+</span>
          <Sign signInfo={secondSign} />
        </section>
        <section>
          <h2 className={styles.comment}>{pair.overallscore >= 70 ? "What an astounding match!" : "It's an ok match"}</h2>
          <Progressbar isOverallScore percent={pair.overallscore} />
        </section>

        <section className={styles.secondaryScore}>
          <Progressbar title={"Career"} percent={pair.careerscore} />
          <Progressbar title={"Sex life"} percent={pair.intimatescore} />
          <Progressbar title={"Mindset"} percent={pair.mindsetscore} />
          <Progressbar title={"Friendship"} percent={pair.interestsscore} />
        </section>

        <section>
          <h2 className={styles.subtitle}>Overall</h2>
          <p className={styles.description}>{pair.description}</p>
        </section>

        <InlineShareButtons
          config={{
            alignment: 'center',
            color: 'social',
            enabled: true,
            font_size: 16,
            labels: 'cta',
            language: 'en',
            networks: [
              'pinterest',
              'whatsapp',
              'facebook',
              'twitter'
            ],
            padding: 12,
            radius: 4,          
            show_total: false,
            size: 40,
            image: "https://bit.ly/2CMhCMC",
            title: SHARE_DESCRIPTION,
            message: SHARE_DESCRIPTION,
            url: "https://zodiac-signs-compatibility.vercel.app/"
          }}
        />
        <button className={styles.share} onClick={handleShare}>Share results✨</button>
        <Link href="/" className={styles.redirect} onClick={handleStartOver}>Start over</Link>
      </main>}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { res } = context
  const pair = context.query.pair as string

  const splitedPair = pair.split("+")
  const firstSign = signs.find(sign => sign.name === splitedPair[0])
  const secondSign = signs.find(sign => sign.name === splitedPair[1])

  const signsExists = firstSign && secondSign
  if (!signsExists) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()

    return { props: {} }
  }


  return {
    props: {
      firstSign: firstSign,
      secondSign: secondSign
    },
  };
}

interface SignInterface {
  name: string,
  imagePath: string,
  dates: string
}