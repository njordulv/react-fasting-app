import { useLocation } from "react-router-dom"
import routes from "../routes/routes"
import { progress } from "../data/formulas"
import styles from "../App.module.css"

const ProgressBar = () => {
  const location = useLocation()
  const currentIndex = routes.indexOf(location.pathname)
  const totalRoutes = routes.length
  const stepsProgress = progress(currentIndex, totalRoutes)

  return (
    <>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${stepsProgress}%` }}
        ></div>
      </div>
      <div className={styles.totalQuestions}>
        <span>
          {currentIndex} / {totalRoutes - 1}
        </span>
      </div>
    </>
  )
}

export default ProgressBar
