import styles from "../App.module.css"

const Switcher = ({ inputH, error, disabled, metric, setIsMetric }) => {
  const metricHandler = () => {
    setIsMetric(!metric)
    inputH("")
    disabled(true)
    error("")
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
