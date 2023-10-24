import { useLocation } from "react-router-dom"
import routes from "../data/routes"
import styles from "../App.module.css"

const ProgressBar = () => {
  const location = useLocation()

  const currentIndex = routes.indexOf(location.pathname)
  const totalRoutes = routes.length
  const progress = (currentIndex / (totalRoutes - 1)) * 100

  return (
    <>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
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
