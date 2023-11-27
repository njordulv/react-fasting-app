import { useSelector, useDispatch } from 'react-redux'
import {
  toggleSwitch,
  selectSwitcherSystem,
  selectSwitcherIsMetric,
} from '../redux/slices/switcherSlice'
import {
  setInputHeight,
  setHeightError,
  setInputWeight,
  setWeightError,
  setIsMetric,
  setHeightImperial,
  setWeightImperial,
  setGoal,
  setGoalImperial,
  setVerdict,
  setActive,
} from '../redux/slices/formSlice'
import styles from '../App.module.css'

const Switcher = () => {
  const dispatch = useDispatch()
  const SwitcherIsMetric = useSelector(selectSwitcherIsMetric)
  const SwitcherSystem = useSelector(selectSwitcherSystem)

  const toggleSystem = () => {
    dispatch(toggleSwitch())

    dispatch(setInputHeight(''))
    dispatch(setHeightError(''))
    dispatch(setInputWeight(''))
    dispatch(setWeightError(''))
    dispatch(setIsMetric(!SwitcherIsMetric))
    dispatch(setHeightImperial({ feet: '', inch: '' }))
    dispatch(setWeightImperial(''))
    dispatch(setGoal(''))
    dispatch(setGoalImperial(''))
    dispatch(setVerdict(''))
    dispatch(setActive(''))
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
