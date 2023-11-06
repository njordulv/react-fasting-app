import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppContext } from './AppContext'
import styles from '../App.module.css'
import Switcher from './Switcher'

const QuizWeightGoal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [disabled, setDisabled] = useState(true)

  const {
    goal,
    setGoal,
    goalImperial,
    setGoalImperial,
    verdict,
    setVerdict,
    weightError,
    setWeightError,
    isMetric,
  } = useAppContext()

  const { inputHeight, inputWeight, totalCm, totalKg, weightImperial } =
    location.state || {}
  const percents = (((inputWeight - goal) / inputWeight) * 100).toFixed()
  const percentsImp = (
    ((weightImperial - goal) / weightImperial) *
    100
  ).toFixed()

  const verdictText = (val, text, keyword) => {
    const index = text.indexOf(keyword)
    if (index !== -1) {
      const updatedText =
        text.slice(0, index + keyword.length) +
        ' ' +
        val +
        '%' +
        text.slice(index + keyword.length)
      return updatedText
    }
    return text
  }

  const answer1 = `Realistic goal: lose of your weight. Ensure your well-being and long-term health by effectively managing your weight. According to the recommendations of the CDC (Centers for Disease Control and Prevention), losing 4 kg per month is considered a safe and reasonable approach.`
  const answer2 = `Enhance your overall well-being: lose of your weight. Health conditions associated with obesity show improvement with a weight loss of 10% or more. There is a significant reduction in the likelihood of developing heart disease and lower blood sugar levels, while the anti-inflammatory effects increase.`
  const answer3 = `Simple and effortless goal: lose of your weight. Boost your energy levels and enhance sleep quality through daily physical activity. According to research conducted by the University of Utah, even brief 5-minute workouts can make a significant difference!`
  const answer4 = `Challenging goal: lose of your weight. Individuals who are overweight and manage to lose more than 20% of their body weight generally experience improved health and higher levels of life satisfaction, in contrast to those who lose 10% or less.`

  const goalHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    const percentGoal = (value / inputWeight) * 10
    const percentGoalImp = (value / weightImperial) * 10
    setGoal(value)
    setGoalImperial(value)
    setVerdict('')

    if (value.length < 2) {
      setDisabled(true)
      setWeightError('')
    }

    if (isMetric) {
      if (!inputWeight) {
        setWeightError(
          "Something went wrong, look's like your weight value isn't set"
        )
      } else if (percentGoal >= 9.8) {
        setVerdict('')
        setDisabled(true)
      } else if (percentGoal >= 9) {
        setVerdict(answer1)
        setDisabled(false)
      } else if (percentGoal >= 8) {
        setVerdict(answer2)
        setDisabled(false)
      } else if (percentGoal >= 7) {
        setVerdict(answer3)
        setDisabled(false)
      } else if (percentGoal >= 4) {
        setVerdict(answer4)
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    } else {
      if (!weightImperial) {
        setWeightError(
          "Something went wrong, look's like your weight value isn't set"
        )
      } else if (percentGoalImp >= 9.8) {
        setVerdict('')
        setDisabled(true)
      } else if (percentGoalImp >= 9) {
        setVerdict(answer1)
        setDisabled(false)
      } else if (percentGoalImp >= 8) {
        setVerdict(answer2)
        setDisabled(false)
      } else if (percentGoalImp >= 7) {
        setVerdict(answer3)
        setDisabled(false)
      } else if (percentGoalImp >= 4) {
        setVerdict(answer4)
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()

    isMetric
      ? navigate('/quiz/results', { state: { inputHeight, inputWeight } })
      : navigate('/quiz/results', { state: { totalCm, totalKg } })
  }

  return (
    <>
      <h2>What is your goal weight?</h2>
      <Switcher />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          {isMetric ? (
            <label htmlFor="input-weight">
              <input
                type="text"
                name="input-weight"
                className={`${styles.input}`}
                maxLength="3"
                placeholder="65"
                value={goal}
                onChange={goalHandler}
              />
              <span className={styles.inputMeasure}>kg</span>
            </label>
          ) : (
            <label htmlFor="input-weight-lbs">
              <input
                type="text"
                name="input-weight-lbs"
                className={`${styles.input}`}
                maxLength="3"
                placeholder="120"
                value={goalImperial}
                onChange={goalHandler}
              />
              <span className={styles.inputMeasure}>lbs</span>
            </label>
          )}
          <div className={styles.inputError}>{weightError}</div>
        </div>
        <button type="submit" disabled={disabled} className="button">
          Continue
        </button>
      </form>
      <div
        className={
          verdict
            ? `${styles.weightInfo} ${styles.active}`
            : `${styles.weightInfo}`
        }
      >
        {verdictText(isMetric ? percents : percentsImp, verdict, 'lose')}
      </div>
    </>
  )
}

export default QuizWeightGoal
