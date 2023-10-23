import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Quiz from "./components/Quiz"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import NotFound from "./components/NotFound"
import "./variables.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/quiz" element={<Quiz />} />
              <Route path="quiz/step-1" element={<Step1 />} />
              <Route path="quiz/step-2" element={<Step2 />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
