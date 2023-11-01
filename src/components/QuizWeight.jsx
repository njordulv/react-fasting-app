import { useNavigate, useLocation } from "react-router-dom"
import { useAppContext } from "./AppContext"
import styles from "../App.module.css"
import Switcher from "./Switcher"

const QuizWeight = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    inputWeight,
    setInputWeight,
    weightImperial,
    setWeightImperial,
    weightError,
    setWeightError,
    disabled,
    setDisabled,
    isMetric,
  } = useAppContext()

  const totalKg = (weightImperial * 0.45359237).toFixed()
  const { inputHeight, totalCm } = location.state || {}

  const inputWeightHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    setInputWeight(value)
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
      ? navigate("/quiz/weight-goal", {
          state: { inputHeight, inputWeight },
        })
      : navigate("/quiz/weight-goal", {
          state: { totalCm, totalKg, weightImperial },
        })
  }

  return (
    <>
      <h2>Enter your weight</h2>
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
                placeholder="130"
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
