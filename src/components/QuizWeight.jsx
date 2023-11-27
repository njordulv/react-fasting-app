import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '../App.module.css'
import Switcher from './Switcher'
import {
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setDisabled,
  selectInputWeight,
  selectWeightImperial,
  selectWeightError,
  selectDisabled,
  selectIsMetric,
} from '../store/slices/formSlice'

const QuizWeight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const inputWeight = useSelector(selectInputWeight)
  const weightError = useSelector(selectWeightError)
  const weightImperial = useSelector(selectWeightImperial)
  const disabled = useSelector(selectDisabled)
  const isMetric = useSelector(selectIsMetric)

  const totalKg = (weightImperial * 0.45359237).toFixed()
  const { inputHeight, totalCm } = location.state || {}

  const inputWeightHandler = (e) => {
    e.preventDefault()
    const value = e.target.value
    dispatch(setInputWeight(value))

    if (isMetric) {
      dispatch(setWeightError(''))
      if (!value || isNaN(value) || value < 40 || value > 230) {
        dispatch(setDisabled(true))
        dispatch(
          setWeightError('Kindly input a weight between 40 and 230 kilograms')
        )
      } else {
        dispatch(setDisabled(false))
      }
    } else {
      dispatch(setWeightImperial(value))
      dispatch(setWeightError(''))
      if (!value || isNaN(value) || value < 90 || value > 540) {
        dispatch(setDisabled(true))
        dispatch(setWeightError('Kindly input a weight between 90 and 540 lbs'))
      } else {
        dispatch(setDisabled(false))
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()

    isMetric
      ? navigate('/quiz/weight-goal', {
          state: { inputHeight, inputWeight },
        })
      : navigate('/quiz/weight-goal', {
          state: { totalCm, totalKg, weightImperial },
        })
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
              value={isMetric ? inputWeight : weightImperial}
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
