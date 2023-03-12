import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import signs from '@/data/signs.json'
import pairs from '@/data/zodiac-pairs.json'
import { Sign } from '@/components/Sign'


export default function Home({ firstSign, secondSign }:
  { firstSign: SignInterface, secondSign: SignInterface }) {

  const pair = pairs.find(pair =>
    pair.possibleCombinations.includes(firstSign.name) &&
    pair.possibleCombinations.includes(secondSign.name)
  )

  return (
    <>
      <Head>
        <title>Compatibility result!</title>
      </Head>
      <h1>Is it a match?</h1>
      <main>
        generated page for {firstSign.name} + {secondSign.name}
        
        <Sign signInfo={firstSign}/>
        <Sign signInfo={secondSign}/>
      </main>
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