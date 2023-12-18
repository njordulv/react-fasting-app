import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import QuizLayout from './layouts/QuizLayout'
import OfferLayout from './layouts/OfferLayout'
import Home from './components/Home'
import NotFound from './components/NotFound'
import QuizStart from './components/Quiz/QuizStart'
import Quiz from './components/Quiz/Quiz'
import QuizHeight from './components/Quiz/QuizHeight'
import QuizWeight from './components/Quiz/QuizWeight'
import QuizWeightGoal from './components/Quiz/QuizWeightGoal'
import Results from './components/Results/Results'
import Testimonials from './components/Testimonials/Testimonials'
import Email from './components/Email/Email'
import Offer from './components/Offer/Offer'
import Checkout from './components/Checkout/Checkout'
import PrivacyPolicy from './components/PrivacyPolicy'
import questions from './data/questions'
import './variables.css'
import './animations.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/quiz" element={<QuizStart />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/email" element={<Email />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route element={<QuizLayout />}>
            <Route path="quiz/height" element={<QuizHeight />} />
            <Route path="quiz/weight" element={<QuizWeight />} />
            <Route path="quiz/weight-goal" element={<QuizWeightGoal />} />
            <Route path="quiz/results" element={<Results />} />
            {questions.map((_, index) => (
              <Route
                key={index}
                path={`quiz/question-${index + 1}`}
                element={<Quiz quizIndex={index} />}
              />
            ))}
          </Route>
          <Route element={<OfferLayout />}>
            <Route path="/offer" element={<Offer />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
