import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import StepLayout from "./layouts/StepLayout"
import Home from "./components/Home"
import QuizStart from "./components/QuizStart"
import Quiz from "./components/Quiz"
import QuizHeight from "./components/QuizHeight"
import Results from "./components/Results"
import NotFound from "./components/NotFound"
import questions from "./data/questions"
import "./variables.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Body>
          <Routes>
            <Route path="/" element={<StepLayout />}>
              <Route index element={<Home />} />
              <Route path="/quiz" element={<QuizStart />} />
              <Route path="/quiz/quiz-height" element={<QuizHeight />} />
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
        </Body>
      </div>
    </BrowserRouter>
  )
}

export default App
