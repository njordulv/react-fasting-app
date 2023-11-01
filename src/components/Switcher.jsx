import { useAppContext } from "./AppContext"
import styles from "../App.module.css"

const Switcher = () => {
  const {
    isMetric,
    setIsMetric,
    setInputHeight,
    setHeightImperial,
    setInputWeight,
    setWeightImperial,
    setGoal,
    setGoalImperial,
    setVerdict,
    setHeightError,
    setWeightError,
    setDisabled,
  } = useAppContext()

  const toggleMetric = () => {
    setIsMetric(!isMetric)

    if (isMetric) {
      setInputHeight("")
      setHeightImperial({ feet: "", inch: "" })
      setInputWeight("")
      setWeightImperial("")
      setGoal("")
      setGoalImperial("")
      setVerdict("")
      setHeightError("")
      setWeightError("")
      setDisabled(true)
    }
  }

  return (
    <>
      <div className={styles.switcher}>
        <div className={styles.switcherButton}>
          <input
            type="checkbox"
            className={styles.switcherCheckbox}
            checked={isMetric}
            onChange={() => toggleMetric()}
          />
          <div className={styles.switcherKnobs}>
            <span></span>
          </div>
          <div className={styles.switcherLayer}></div>
        </div>
      </div>
    </>
  )
}

export default Switcher
