import signs from '@/data/signs.json'
import Head from 'next/head'
import { Sign } from '@/components/Sign'
import { useState, memo, useCallback, useMemo, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import { Loader } from '@/components/Loader'

import styles from '@/styles/Home.module.scss'

const LOADER_TIMEOUT = 3000;
const DESCRIPTION_TEXT = 'Looking for the perfect match? Our zodiac partnership compatibility test uses the power of astrology to help you. Discover which zodiac signs are most compatible with yours. Whether you\'re looking for a romantic partner or just a new friend, our comparison provides valuable insights and advantages to help you make the most of your relationships.';

export default function Home() {
  const [firstSliderIndex, setFirstSliderIndex] = useState(0);
  const [secondSliderIndex, setSecondSliderIndex] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
   
  const currentPair = useMemo(() => `${signs[firstSliderIndex].name}+${signs[secondSliderIndex].name}`, [firstSliderIndex, secondSliderIndex])

  const router = useRouter()

  const handleSubmit = useCallback(() => {
    setIsLoaderVisible(true)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    if (isLoaderVisible) {
      const timerId = setTimeout(() => {
        router.push(`/compatibility/${currentPair}`)
      }, LOADER_TIMEOUT)
      
      return () => clearTimeout(timerId)
    }
  }, [isLoaderVisible, router, currentPair])

  const sliderBreakpoints = {
    1640: {
      slidesPerView: 5
    }
  }

  return (
    <>
      <Head>
        <title>Zodiac queer compatibility calculator</title>
        <meta name="description" content="Zodiac queer compatibility calculator" />
        <meta name="viewport" content="min-width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.pageTitle}>Will it be a match 🌟?</h1>
      <main className={styles.container}>
        {isLoaderVisible ? <Loader /> : signs && <>
          <h2 className={styles.subtitle}>Check your zodiac compatibility</h2>
          <p className={styles.description}>{DESCRIPTION_TEXT}</p>
          <h3 className={styles.sliderTitle}>Your sign</h3>
          <Swiper
            onSlideChange={(swiper) => setFirstSliderIndex(swiper.realIndex)}
            initialSlide={firstSliderIndex}
            slidesPerView={3}
            centeredSlides
            spaceBetween={20}
            loop
            slideToClickedSlide
            breakpoints={sliderBreakpoints}>
            {signs.map(sign =>
              <SwiperSlide key={sign.name}>
                <Sign signInfo={sign} />
              </SwiperSlide>)}
          </Swiper>

          <span className={styles.plus}>+</span>
          <h3 className={styles.sliderTitle}>Their sign</h3>

          <Swiper
            onSlideChange={(swiper) => setSecondSliderIndex(swiper.realIndex)}
            initialSlide={secondSliderIndex}
            slidesPerView={3}
            centeredSlides
            spaceBetween={20}
            loop
            slideToClickedSlide
            breakpoints={sliderBreakpoints}
            >
            {signs.map(sign =>
              <SwiperSlide key={sign.dates}>
                <Sign signInfo={sign} />
              </SwiperSlide>)}
          </Swiper>

          <button className={styles.submit} onClick={handleSubmit}>Check your compatibility✨</button>
        </>}
      </main>
    </>
  )
}
