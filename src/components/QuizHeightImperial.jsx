import { useNavigate } from "react-router-dom"
import { useAppContext } from "./AppContext"
import styles from "../App.module.css"

const QuizHeightImperial = () => {
  const navigate = useNavigate()
  const { heightImperial, setHeightImperial, heightError, setHeightError } =
    useAppContext()
  const feet = heightImperial.feet
  const inch = heightImperial.inch
  const totalCm = (feet * 30.48 + inch * 2.54).toFixed()

  const imperialInputHandler = (event, name) => {
    const value = event.target.value
    setHeightImperial({ ...heightImperial, [name]: value })

    if (!feet || !inch) {
      setHeightError("")
    } else if (isNaN(feet) || isNaN(inch)) {
      setHeightError("Ensure you input digits only")
    } else if (feet < 4) {
      setHeightError("Please state at least 4 ft")
    } else if (feet > 7) {
      setHeightError("Please state at most 7 ft")
    } else if (inch > 11) {
      setHeightImperial({ ...heightImperial, inch: 11 })
      setHeightError("Please state at most 11 inch")
    } else {
      setHeightError("")
    }
  }

  const continueImperialHandler = (e) => {
    e.preventDefault()

    if (feet === "" || inch === "") {
      setHeightError("This fields are required")
    } else if (isNaN(feet) || isNaN(inch)) {
      setHeightError("Ensure you input digits only")
    } else if (feet < 4) {
      setHeightError("Please state at least 4 ft")
    } else if (feet > 7) {
      setHeightError("Please state at most 7 ft")
    } else if (inch > 11) {
      setHeightImperial({ ...heightImperial, inch: 11 })
      setHeightError("Please state at most 11 inch")
    } else {
      setHeightError("")
      navigate("/quiz/weight", { state: { totalCm } })
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
              value={heightImperial.feet}
              onChange={(e) => imperialInputHandler(e, "feet")}
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
              value={heightImperial.inch}
              onChange={(e) => imperialInputHandler(e, "inch")}
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
