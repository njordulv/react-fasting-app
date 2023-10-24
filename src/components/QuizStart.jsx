import { useNavigate } from "react-router-dom"
import styles from "../App.module.css"

const QuizStart = () => {
  const navigate = useNavigate()

  const startQuizHandling = () => {
    return navigate("question-1")
  }

  return (
    <>
      <h1>Achieve Your Ideal Weight</h1>
      <p>
        Welcome to Achieve Your Ideal Weight App - your trusted companion on the
        journey to a healthier lifestyle and reaching your desired weight. Our
        questions will help create a personalized plan for you, considering your
        goals, habits, and needs. Start your unique path to becoming the best
        version of yourself right now!
      </p>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={startQuizHandling}
        >
          Start Now
        </button>
      </div>
    </>
  )
}

export default QuizStart
