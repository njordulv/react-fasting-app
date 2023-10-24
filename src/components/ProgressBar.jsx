import { useLocation } from "react-router-dom"
import styles from "../App.module.css"

const ProgressBar = () => {
  const location = useLocation()

  // Define your quiz routes
  const quizRoutes = [
    "/quiz",
    ...Array.from({ length: 10 }, (_, i) => `/quiz/quiz-${i + 1}`),
    "/quiz/quiz-results",
  ]

  // Calculate progress based on the current route
  const currentIndex = quizRoutes.indexOf(location.pathname)
  const totalRoutes = quizRoutes.length
  const progress = (currentIndex / (totalRoutes - 1)) * 100

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar
