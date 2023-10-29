import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import styles from "../App.module.css"
import Switcher from "./Switcher"

const QuizWeight = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [inputWeight, setinputWeight] = useState("")
  const [weightImperial, setWeightImperial] = useState("")
  const [weightError, setWeightError] = useState("")
  const [disabled, setDisabled] = useState(true)
  const queryParams = new URLSearchParams(location.search)
  const inputHeight = queryParams.get("inputHeight")
  const [isMetric, setIsMetric] = useState(true)
  const totalKg = (weightImperial * 0.45359237).toFixed()

  const inputWeightHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    setinputWeight(value)
    setWeightImperial(value)

    if (!value) {
      setWeightError("")
      setDisabled(true)
    } else if (isNaN(value)) {
      setWeightError("Ensure you input digits only")
      setDisabled(true)
    } else if (isMetric && (value < 40 || value > 230)) {
      setWeightError(
        isMetric
          ? "Kindly input a weight between 40 and 230 kilograms"
          : "Kindly input a weight between 90 and 540 lbs"
      )
      setDisabled(true)
    } else if (!isMetric && (value < 90 || value > 540)) {
      setWeightError(
        isMetric
          ? "Kindly input a weight between 40 and 230 kilograms"
          : "Kindly input a weight between 90 and 540 lbs"
      )
      setDisabled(true)
    } else {
      setWeightError("")
      setDisabled(false)
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    isMetric
      ? navigate(
          `/quiz/results?inputHeight=${inputHeight}&inputWeight=${inputWeight}`
        )
      : navigate(
          `/quiz/results?inputHeight=${inputHeight}&inputWeight=${totalKg}`
        )
  }

  return (
    <>
      <h2>Enter your weight</h2>
      <Switcher
        inputWeigh={setinputWeight}
        inputWeightImperial={setWeightImperial}
        errorWeight={setWeightError}
        disabled={setDisabled}
        metric={isMetric}
        setIsMetric={setIsMetric}
      />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          {isMetric ? (
            <label htmlFor="input-weight">
              <input
                type="text"
                name="input-weight"
                className={`${styles.input}`}
                maxLength="3"
                placeholder="75"
                value={inputWeight}
                onChange={inputWeightHandler}
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
                placeholder="100"
                value={weightImperial}
                onChange={inputWeightHandler}
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
    </>
  )
}

export default QuizWeight
