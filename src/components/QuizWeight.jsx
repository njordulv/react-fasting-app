import { useNavigate } from "react-router-dom"
import styles from "../App.module.css"

const QuizWeight = () => {
  const navigate = useNavigate()

  const continueHandling = () => {
    return navigate("/quiz/quiz-results")
  }
  return (
    <>
      <h2>Enter your weight</h2>
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

export default QuizWeight
