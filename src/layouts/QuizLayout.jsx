import { Outlet } from "react-router-dom"
import HeaderQuiz from "../components/HeaderQuiz"
import styles from "../App.module.css"

const QuizLayout = () => {
  return (
    <>
      <HeaderQuiz />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default QuizLayout
