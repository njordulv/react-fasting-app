import { useNavigate } from "react-router-dom"
import Question from "./Question"
import questions from "../data/questions"

const Quiz = ({ quizIndex }) => {
  const navigate = useNavigate()
  const question = questions[quizIndex]
  const questionsAll = questions.length

  const navigateHandler = () => {
    if (quizIndex < questions.length - 1) {
      navigate(`/quiz/quiz-${quizIndex + 2}`)
    } else {
      navigate("/quiz/quiz-results")
    }
  }

  return (
    <>
      <Question
        total={questionsAll}
        counter={question.counter}
        question={question.question}
        options={question.options}
        navigateTo={navigateHandler}
      />
    </>
  )
}

export default Quiz
