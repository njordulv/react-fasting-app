import styles from "../App.module.css"

const Switcher = ({
  metric = true,
  setIsMetric = () => {},
  inputHeight = () => {},
  inputWeight = () => {},
  inputWeightImperial = () => {},
  errorHeight = () => {},
  errorWeight = () => {},
  disabled = () => {},
}) => {
  const metricHandler = () => {
    setIsMetric(!metric)
    inputHeight("")
    inputWeight("")
    inputWeightImperial("")
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
            defaultChecked={metric}
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
