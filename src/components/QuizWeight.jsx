import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../App.module.css'
import Switcher from './Switcher'
import {
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setDisabledWeight,
  selectInputWeight,
  selectWeightError,
  selectDisabledWeight,
  selectIsMetric,
} from '../store/slices/formSlice'

const QuizWeight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputWeight = useSelector(selectInputWeight)
  const weightError = useSelector(selectWeightError)
  const disabled = useSelector(selectDisabledWeight)
  const isMetric = useSelector(selectIsMetric)

  const inputWeightHandler = (e) => {
    const value = e.target.value
    dispatch(setInputWeight(value))

    if (isMetric) {
      if (!value) {
        dispatch(setWeightError(''))
        dispatch(setDisabledWeight(true))
      } else if (isNaN(value) || value < 40 || value > 230) {
        dispatch(setDisabledWeight(true))
        dispatch(
          setWeightError('Kindly input a weight between 40 and 230 kilograms')
        )
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    } else {
      dispatch(setWeightImperial(value))
      if (!value) {
        dispatch(setWeightError(''))
        dispatch(setDisabledWeight(true))
      } else if (isNaN(value) || value < 90 || value > 540) {
        dispatch(setDisabledWeight(true))
        dispatch(setWeightError('Kindly input a weight between 90 and 540 lbs'))
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    navigate('/quiz/weight-goal')
  }

  return (
    <>
      <h2>Enter your weight</h2>
      <Switcher />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-weight">
            <input
              type="text"
              name="input-weight"
              className={`${styles.input}`}
              maxLength="3"
              placeholder={isMetric ? '75' : '130'}
              value={inputWeight}
              onChange={inputWeightHandler}
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
    </>
  )
}

export default QuizWeight
