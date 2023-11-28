import { useSelector, useDispatch } from 'react-redux'
import {
  toggleSwitch,
  selectSwitcherSystem,
  selectSwitcherIsMetric,
} from '../store/slices/switcherSlice'
import { resetForm, setIsMetric } from '../store/slices/formSlice'
import styles from '../App.module.css'

const Switcher = () => {
  const dispatch = useDispatch()
  const SwitcherIsMetric = useSelector(selectSwitcherIsMetric)
  const SwitcherSystem = useSelector(selectSwitcherSystem)

  const toggleSystem = () => {
    dispatch(toggleSwitch())
    dispatch(resetForm())
    dispatch(setIsMetric(!SwitcherIsMetric))
  }

  return (
    <>
      <div className={styles.switcher}>
        <div className={styles.switcherButton}>
          <input
            type="checkbox"
            className={styles.switcherCheckbox}
            name={SwitcherSystem}
            checked={SwitcherIsMetric}
            onChange={() => toggleSystem()}
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
