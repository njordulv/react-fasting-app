import ProgressScroll from './ProgressScroll'
import styles from '../App.module.css'

const HeaderOffer = () => {
  return (
    <header className={styles.sticky}>
      <div className={styles.wrapper}>
        <div className={`${styles.container} ${styles.spaceBetween}`}>
          <div className="timer">00:00:00</div>
          <button className="button">Get My Plan</button>
        </div>
      </div>
      <ProgressScroll />
    </header>
  )
}

export default HeaderOffer
