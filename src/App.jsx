import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import StepLayout from "./layouts/StepLayout"
import QuizStart from "./components/QuizStart"
import Quiz from "./components/Quiz"
import questions from "./data/questions"
import Results from "./components/Results"
import NotFound from "./components/NotFound"
import "./variables.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StepLayout />}>
            <Route path="/quiz" element={<QuizStart />} />
            <Route path="/quiz/quiz-results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
            {questions.map((_, index) => (
              <Route
                key={index}
                path={`/quiz/quiz-${index + 1}`}
                element={<Quiz quizIndex={index} />}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
