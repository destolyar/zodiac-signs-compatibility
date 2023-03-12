import styles from '../styles/Progressbar.module.scss'

export const Progressbar = ({ title, percent, isOverallScore=false }: { title?: string, percent: number, isOverallScore?: boolean }) => {
  const progressBarStyles = {
    '--progress': percent + "%",
  } as React.CSSProperties
  
  return (
    <div className={styles.container}>
      {isOverallScore ? <h3 className={styles.centredScore}>{percent}%</h3> : <h3 className={styles.title}>{title} {percent}%</h3>}
      <div className={isOverallScore ? styles.overallBarBorder : styles.barBorder}>
        <div className={styles.barValue} style={progressBarStyles}/>
      </div>
    </div>
  )
}