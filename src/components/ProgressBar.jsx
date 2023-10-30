import { useLocation } from "react-router-dom"
import { progress } from "../data/formulas"
import routes from "../routes/routes"
import styles from "../App.module.css"

const ProgressBar = () => {
  const location = useLocation()
  const currentIndex = routes.indexOf(location.pathname)
  const totalRoutes = routes.length
  const stepsProgress = progress(currentIndex, totalRoutes - 1)

  return (
    <>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${stepsProgress}%` }}
        ></div>
      </div>
    </>
  )
}

export default ProgressBar
