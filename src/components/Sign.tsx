import styles from "../styles/Sign.module.scss"
import Image from "next/image"

export const Sign = ({ signInfo }: { signInfo: SignInfo }) => {
  const { dates, imagePath, name } = signInfo

  return (
    <div className={styles.container}>
      <Image width={120} height={120} className={styles.image} src={imagePath} alt={name}/>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.dates}>{dates}</p>
    </div>
  )
}

interface SignInfo {
  name: string,
  imagePath: string,
  dates: string
}