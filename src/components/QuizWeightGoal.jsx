import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Switcher from './Switcher'
import {
  setGoal,
  setGoalImperial,
  setVerdict,
  setWeightError,
  setDisabledGoal,
  selectGoal,
  selectInputWeight,
  selectGoalImperial,
  selectWeightImperial,
  selectWeightError,
  selectVerdict,
  selectDisabledGoal,
  selectIsMetric,
} from '../store/slices/formSlice'
import { verdictData } from '../data/verdict'
import styles from '../App.module.css'

const QuizWeightGoal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputWeight = useSelector(selectInputWeight)
  const weightImperial = useSelector(selectWeightImperial)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightError = useSelector(selectWeightError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)

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
      dispatch(setDisabledGoal(true))
      dispatch(setWeightError(''))
    }

    const percentGoal = (value / (isMetric ? inputWeight : weightImperial)) * 10

    if (!value) {
      dispatch(setWeightError(''))
    } else if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      dispatch(
        setWeightError(
          "Something went wrong, it looks like your weight value isn't set"
        )
      )
      return
    }

    if (percentGoal >= 9.8) {
      dispatch(setVerdict(''))
      dispatch(setDisabledGoal(true))
    } else if (percentGoal >= 9) {
      dispatch(setVerdict(verdictData[0].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 8) {
      dispatch(setVerdict(verdictData[1].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 7) {
      dispatch(setVerdict(verdictData[2].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 4) {
      dispatch(setVerdict(verdictData[3].text))
      dispatch(setDisabledGoal(false))
    } else {
      dispatch(setDisabledGoal(true))
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    navigate('/quiz/results')
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
