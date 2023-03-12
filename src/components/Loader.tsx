import Image from 'next/image'
import styles from '../styles/Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src='/signs/horoscope.png' alt={"horoscope"} width={120} height={120}/>
      <div className={styles.ldsDualRing}/>
    </div>
  )
}

