import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styles from "../App.module.css"
import QuizHeightImperial from "./QuizHeightImperial"

const QuizHeight = () => {
  const navigate = useNavigate()
  const [inputHeight, setInputHeight] = useState("")
  const [heightError, setHeightError] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [switcher, setSwitcher] = useState(true)

  const inputHeightHandler = (text) => {
    text.preventDefault()
    const value = text.target.value
    setInputHeight(value)

    if (switcher) {
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
  }

  const continueHandler = (e) => {
    e.preventDefault()
    navigate("/quiz/weight", { state: { inputHeight } })
  }

  const metricHandler = () => {
    setSwitcher(!switcher)
    setInputHeight("")
    setDisabled(true)
    setHeightError("")
  }

  return (
    <>
      <h2>Enter your height</h2>
      <div className={styles.switcher}>
        <div className={styles.switcherButton}>
          <input
            type="checkbox"
            className={styles.switcherCheckbox}
            defaultChecked={switcher}
            onChange={() => metricHandler()}
          />
          <div className={styles.switcherKnobs}>
            <span></span>
          </div>
          <div className={styles.switcherLayer}></div>
        </div>
      </div>
      {switcher ? (
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
                <span className={styles.inputMeasure}>
                  {switcher ? "cm" : ""}
                </span>
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
