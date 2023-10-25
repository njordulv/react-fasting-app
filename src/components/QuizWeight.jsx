import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import styles from "../App.module.css"

const QuizWeight = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [inputWeight, setinputWeight] = useState("")
  const [weightError, setWeightError] = useState("")
  const [disabled, setDisabled] = useState(true)
  const queryParams = new URLSearchParams(location.search)
  const inputHeight = queryParams.get("inputHeight")

  const inputWeightHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    setinputWeight(value)

    if (!value) {
      setWeightError("")
      setDisabled(true)
    } else if (isNaN(value)) {
      setWeightError("Ensure you input digits only")
      setDisabled(true)
    } else if (value < 40) {
      setWeightError("Kindly input a minimum of 40 kilograms")
      setDisabled(true)
    } else if (value > 230) {
      setWeightError("Please specify a lower value")
      setDisabled(true)
    } else {
      setWeightError("")
      setDisabled(false)
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    navigate(
      `/quiz/results?inputHeight=${inputHeight}&inputWeight=${inputWeight}`
    )
  }

  return (
    <>
      <h2>Enter your weight</h2>
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
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
