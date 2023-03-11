import styles from "../styles/Sign.module.scss"

export const Sign = ({ signInfo }: { signInfo: SignInfo }) => {
  const { dates, imagePath, name } = signInfo

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagePath} alt={name} />
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