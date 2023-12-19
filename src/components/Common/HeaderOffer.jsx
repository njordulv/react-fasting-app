import ProgressScroll from '../ProgressScroll'
import ThemeSwitcher from '../ThemeSwitcher'
import styles from '../../App.module.css'

const HeaderOffer = () => {
  const handleScrollToPlan = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.sticky}>
      <div className={styles.wrapper}>
        <div className={`${styles.container} ${styles.justifyEnd}`}>
          <ThemeSwitcher />
          <button className="button" onClick={handleScrollToPlan}>
            Get My Plan
          </button>
        </div>
      </div>
      <ProgressScroll />
    </header>
  )
}

export default HeaderOffer
