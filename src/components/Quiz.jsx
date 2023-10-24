import { useNavigate } from "react-router-dom"
import Question from "./Question"
import questions from "../data/questions"

const Quiz = ({ quizIndex }) => {
  const navigate = useNavigate()
  const question = questions[quizIndex]

  const navigateHandler = () => {
    if (quizIndex < questions.length - 1) {
      navigate(`/quiz/question-${quizIndex + 2}`)
    } else {
      navigate("/quiz/height")
    }
  }

  return (
    <>
      <Question
        question={question.question}
        options={question.options}
        navigateTo={navigateHandler}
      />
    </>
  )
}

export default Quiz
