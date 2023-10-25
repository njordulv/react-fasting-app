import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styles from "../App.module.css"

const QuizHeight = () => {
  const navigate = useNavigate()
  const [inputHeight, setinputHeight] = useState("")
  const [heightError, setHeightError] = useState("")
  const [disabled, setDisabled] = useState(true)

  const inputHeightHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    setinputHeight(value)

    if (!value) {
      setHeightError("")
      setDisabled(true)
    } else if (isNaN(value)) {
      setHeightError("Ensure you input digits only")
      setDisabled(true)
    } else if (value < 120) {
      setHeightError("The minimum allowable height is 120 cm")
      setDisabled(true)
    } else if (value > 240) {
      setHeightError("The maximum allowable height is 240 cm")
      setDisabled(true)
    } else {
      setHeightError("")
      setDisabled(false)
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    navigate(`/quiz/weight?inputHeight=${inputHeight}`)
  }

  return (
    <>
      <h2>Enter your height</h2>
      <form onSubmit={continueHandler} className={styles.heightForm}>
        <div className={styles.inputField}>
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
          </label>
          <div className={styles.inputError}>{heightError}</div>
        </div>
        <button type="submit" disabled={disabled} className="button">
          Continue
        </button>
      </form>
    </>
  )
}

export default QuizHeight
