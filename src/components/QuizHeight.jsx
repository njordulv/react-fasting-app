import { useNavigate } from "react-router-dom"
import styles from "../App.module.css"

const QuizHeight = () => {
  const navigate = useNavigate()

  const continueHandling = () => {
    return navigate("/quiz/quiz-weight")
  }
  return (
    <>
      <h2>Enter your height</h2>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={continueHandling}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default QuizHeight
