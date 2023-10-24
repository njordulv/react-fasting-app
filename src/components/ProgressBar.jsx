import { useLocation } from "react-router-dom"
import styles from "../App.module.css"

const ProgressBar = () => {
  const location = useLocation()

  const quizRoutes = [
    "/quiz",
    ...Array.from({ length: 10 }, (_, i = 0) => `/quiz/quiz-${i + 1}`),
    "/quiz/quiz-height",
    "/quiz/quiz-weight",
    "/quiz/quiz-results",
  ]

  const currentIndex = quizRoutes.indexOf(location.pathname)
  const totalRoutes = quizRoutes.length
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
