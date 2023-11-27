import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import Switcher from './Switcher'
import {
  setGoal,
  setGoalImperial,
  setVerdict,
  setWeightError,
  setDisabled,
  selectGoal,
  selectGoalImperial,
  selectWeightError,
  selectVerdict,
  selectDisabled,
  selectIsMetric,
} from '../redux/slices/formSlice'
import { verdictData } from '../data/verdict'
import styles from '../App.module.css'

const QuizWeightGoal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightError = useSelector(selectWeightError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabled)
  const isMetric = useSelector(selectIsMetric)

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

  const goalHandler = (e) => {
    e.preventDefault()
    const value = e.target.value

    dispatch(setGoal(value))
    dispatch(setGoalImperial(value))
    dispatch(setVerdict(''))

    if (value.length < 2) {
      dispatch(setDisabled(true))
      dispatch(setWeightError(''))
    }

    const percentGoal = (value / (isMetric ? inputWeight : weightImperial)) * 10

    if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      dispatch(
        setWeightError(
          "Something went wrong, it looks like your weight value isn't set"
        )
      )
      return
    }

    if (percentGoal >= 9.8) {
      dispatch(setVerdict(''))
      dispatch(setDisabled(true))
    } else if (percentGoal >= 9) {
      dispatch(setVerdict(verdictData[0].text))
      dispatch(setDisabled(false))
    } else if (percentGoal >= 8) {
      dispatch(setVerdict(verdictData[1].text))
      dispatch(setDisabled(false))
    } else if (percentGoal >= 7) {
      dispatch(setVerdict(verdictData[2].text))
      dispatch(setDisabled(false))
    } else if (percentGoal >= 4) {
      dispatch(setVerdict(verdictData[3].text))
      dispatch(setDisabled(false))
    } else {
      dispatch(setDisabled(true))
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()

    navigate('/quiz/results', {
      state: isMetric ? { inputHeight, inputWeight } : { totalCm, totalKg },
    })
  }

  return (
    <>
      <h2>What is your goal weight?</h2>
      <Switcher />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-weight">
            <input
              type="text"
              name="input-weight"
              className={`${styles.input}`}
              maxLength="3"
              placeholder={isMetric ? '65' : '120'}
              value={isMetric ? goal : goalImperial}
              onChange={goalHandler}
            />
            <span className={styles.inputMeasure}>
              {isMetric ? 'kg' : 'lbs'}
            </span>
          </label>
          <div className={styles.inputError}>{weightError}</div>
        </div>
        <button type="submit" disabled={disabled} className="button">
          Continue
        </button>
      </form>
      {verdict && (
        <div className={`${styles.weightInfo} ${styles.active}`}>
          {verdictText(verdict, percentNumber)}
        </div>
      )}
    </>
  )
}

export default QuizWeightGoal
