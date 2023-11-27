import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import QuizHeightImperial from './QuizHeightImperial'
import Switcher from './Switcher'
import {
  setInputHeight,
  setHeightError,
  setDisabled,
  selectInputHeight,
  selectHeightError,
  selectDisabled,
  selectIsMetric,
} from '../store/slices/formSlice'
import styles from '../App.module.css'

const QuizHeight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputHeight = useSelector(selectInputHeight)
  const heightError = useSelector(selectHeightError)
  const disabled = useSelector(selectDisabled)
  const isMetric = useSelector(selectIsMetric)

  const inputHeightHandler = (e) => {
    const value = e.target.value
    dispatch(setInputHeight(value))

    if (isMetric) {
      if (!value) {
        dispatch(setHeightError(''))
        dispatch(setDisabled(true))
      } else if (isNaN(value)) {
        dispatch(setHeightError('Ensure you input digits only'))
        dispatch(setDisabled(true))
      } else if (value < 120) {
        dispatch(setHeightError('The minimum allowable height is 120 cm'))
        dispatch(setDisabled(true))
      } else if (value > 240) {
        dispatch(setHeightError('The maximum allowable height is 240 cm'))
        dispatch(setDisabled(true))
      } else {
        dispatch(setHeightError(''))
        dispatch(setDisabled(false))
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    dispatch(setInputHeight(inputHeight))
    navigate('/quiz/weight', { state: { inputHeight: inputHeight } })
  }

  return (
    <>
      <h2>Enter your height</h2>
      <Switcher />
      {isMetric ? (
        <form onSubmit={continueHandler} className={styles.heightForm}>
          <div className={styles.inputField}>
            <div>
              <label htmlFor="input-height">
                <input
                  type="text"
                  name="input-height"
                  className={`${styles.input}`}
                  maxLength="3"
                  placeholder="180"
                  value={inputHeight}
                  onChange={inputHeightHandler}
                />
                <span className={styles.inputMeasure}>cm</span>
              </label>
            </div>
            <div className={styles.inputError}>{heightError}</div>
          </div>
          <button type="submit" disabled={disabled} className="button">
            Continue
          </button>
        </form>
      ) : (
        <QuizHeightImperial />
      )}
    </>
  )
}

export default QuizHeight
