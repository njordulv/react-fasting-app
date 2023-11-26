import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppContext } from './AppContext'
import styles from '../App.module.css'
import Switcher from './Switcher'
import { verdictData } from '../data/verdict'

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

  const verdictText = (text, percentNumber) => {
    const updatedText = text.replace(
      /\d+(?=\s(of your weight))/i,
      percentNumber + '%'
    )
    return updatedText
  }

  let percentNumber = isMetric
    ? (((inputWeight - goal) / inputWeight) * 100).toFixed()
    : (((weightImperial - goal) / weightImperial) * 100).toFixed()

  const answer1 = verdictData[0].text
  const answer2 = verdictData[1].text
  const answer3 = verdictData[2].text
  const answer4 = verdictData[3].text

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

    const percentGoalToCheck = isMetric ? percentGoal : percentGoalImp

    if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      setWeightError(
        "Something went wrong, it looks like your weight value isn't set"
      )
      return
    }

    if (percentGoalToCheck >= 9.8) {
      setVerdict('')
      setDisabled(true)
    } else if (percentGoalToCheck >= 9) {
      setVerdict(answer1)
      setDisabled(false)
    } else if (percentGoalToCheck >= 8) {
      setVerdict(answer2)
      setDisabled(false)
    } else if (percentGoalToCheck >= 7) {
      setVerdict(answer3)
      setDisabled(false)
    } else if (percentGoalToCheck >= 4) {
      setVerdict(answer4)
      setDisabled(false)
    } else {
      setDisabled(true)
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
        {verdictText(verdict, percentNumber)}
      </div>
    </>
  )
}

export default QuizWeightGoal
