import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  setHeightImperial,
  setHeightError,
  selectHeightImperialFeet,
  selectHeightImperialInch,
  selectHeightError,
} from '../redux/slices/formSlice'
import styles from '../App.module.css'

const QuizHeightImperial = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const feet = useSelector(selectHeightImperialFeet)
  const inch = useSelector(selectHeightImperialInch)
  const heightError = useSelector(selectHeightError)

  const [localFeet, setLocalFeet] = useState(feet)
  const [localInch, setLocalInch] = useState(inch)

  const totalCm = (localFeet * 30.48 + localInch * 2.54).toFixed()

  const imperialInputHandler = (event, name) => {
    const value = event.target.value

    if (name === 'feet') {
      setLocalFeet(value)
    } else if (name === 'inch') {
      setLocalInch(value)
    }

    const updatedFeet = name === 'feet' ? value : localFeet
    const updatedInch = name === 'inch' ? value : localInch

    dispatch(setHeightImperial({ feet: updatedFeet, inch: updatedInch }))

    if (!updatedFeet || !updatedInch) {
      dispatch(setHeightError(''))
    } else if (isNaN(updatedFeet) || isNaN(updatedInch)) {
      dispatch(setHeightError('Ensure you input digits only'))
    } else if (updatedFeet < 4) {
      dispatch(setHeightError('Please state at least 4 ft'))
    } else if (updatedFeet > 7) {
      dispatch(setHeightError('Please state at most 7 ft'))
    } else if (updatedInch > 11) {
      dispatch(setHeightImperial({ feet: updatedFeet, inch: '11' }))
      dispatch(setHeightError('Please state at most 11 inch'))
    } else {
      dispatch(setHeightError(''))
    }
  }

  const continueImperialHandler = (e) => {
    e.preventDefault()

    if (localFeet === '' || localInch === '') {
      dispatch(setHeightError('This fields are required'))
    } else if (isNaN(localFeet) || isNaN(localInch)) {
      dispatch(setHeightError('Ensure you input digits only'))
    } else if (localFeet < 4) {
      dispatch(setHeightError('Please state at least 4 ft'))
    } else if (localFeet > 7) {
      dispatch(setHeightError('Please state at most 7 ft'))
    } else if (localInch > 11) {
      dispatch(setHeightImperial({ feet: localFeet, inch: '11' }))
      dispatch(setHeightError('Please state at most 11 inch'))
    } else {
      dispatch(setHeightError(''))
      navigate('/quiz/weight', { state: { totalCm } })
    }
  }

  return (
    <>
      <form onSubmit={continueImperialHandler} className={styles.heightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-height-ft">
            <input
              type="text"
              name="input-height-ft"
              className={`${styles.input} ${styles.inputMin}`}
              maxLength="1"
              placeholder="5"
              value={localFeet}
              onChange={(e) => imperialInputHandler(e, 'feet')}
            />
            <span className={styles.inputMeasure}>ft</span>
          </label>
          <label htmlFor="input-height-inch">
            <input
              type="text"
              name="input-height-inch"
              className={`${styles.input} ${styles.inputMin}`}
              maxLength="2"
              placeholder="9"
              value={localInch}
              onChange={(e) => imperialInputHandler(e, 'inch')}
            />
            <span className={styles.inputMeasure}>inch</span>
          </label>
          <div className={styles.inputError}>{heightError}</div>
        </div>
        <button type="submit" className="button">
          Continue
        </button>
      </form>
    </>
  )
}

export default QuizHeightImperial
