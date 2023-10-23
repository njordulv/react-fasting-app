import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import StepLayout from "./layouts/StepLayout"
import Quiz from "./components/Quiz"
import Step from "./components/Step"
import steps from "./data/steps"
import NotFound from "./components/NotFound"
import "./variables.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StepLayout />}>
            <Route path="/steps" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
            {steps.map((_, index) => (
              <Route
                key={index}
                path={`/steps/step-${index + 1}`}
                element={<Step stepIndex={index} />}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
