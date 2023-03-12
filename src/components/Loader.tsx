import styles from '../styles/Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src='/signs/horoscope.png'/>
      <div className={styles.ldsDualRing}/>
    </div>
  )
}

