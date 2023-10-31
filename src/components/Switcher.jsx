import styles from "../App.module.css"

const Switcher = ({
  isMetric = true,
  setIsMetric = () => {},
  inputHeight = () => {},
  inputWeight = () => {},
  inputWeightImperial = () => {},
  setGoal = () => {},
  setGoalImperial = () => {},
  setVerdict = () => {},
  errorHeight = () => {},
  errorWeight = () => {},
  disabled = () => {},
}) => {
  const metricHandler = () => {
    setIsMetric(!isMetric)
    inputHeight("")
    inputWeight("")
    inputWeightImperial("")
    setGoal("")
    setGoalImperial("")
    setVerdict("")
    errorHeight("")
    errorWeight("")
    disabled(true)
  }

  return (
    <>
      <div className={styles.switcher}>
        <div className={styles.switcherButton}>
          <input
            type="checkbox"
            className={styles.switcherCheckbox}
            defaultChecked={isMetric}
            onChange={() => metricHandler()}
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
