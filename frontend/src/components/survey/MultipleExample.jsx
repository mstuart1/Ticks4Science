import multipleExample from '../../images/multipleExample.png'
import styles from './Survey.module.css'


const MultipleExample = () => {
  
  return (
    <div className={styles.multiDiv}>
        <img className={styles.multiImg} src={multipleExample} alt='example of multiple ticks attached to a sheet of paper'/>
        <p className={styles.multiMsg}>This window opened in a new tab.  Check your browser for the tab with your current survey data.</p>
    </div>
  )
}
export default MultipleExample