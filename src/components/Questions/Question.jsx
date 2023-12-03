import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RiCheckFill } from 'react-icons/ri'
import { setOptionHistory } from '../../store/slices/optionHistorySlice'
import styles from './Question.module.css'

const Question = ({ question, options, navigateTo }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const selectedOption =
    useSelector((state) => state.optionHistory[location.pathname]) || ''

  const handleOptionChange = (option) => {
    setTimeout(() => {
      navigateTo()
    }, 400)
    dispatch(setOptionHistory({ pathname: location.pathname, option }))
  }

  return (
    <>
      <h2>{question}</h2>
      <div className={styles.questionItems}>
        {options.map((option, index) => (
          <div key={index} className={styles.questionItem}>
            <label>
              <input
                className={styles.questionInput}
                type="radio"
                value={option}
                checked={selectedOption === option ? 'checked' : ''}
                onChange={() => handleOptionChange(option)}
              />
              <span className={styles.questionItemBackground}></span>
              <span className={styles.questionItemTitle}>{option}</span>
              <span className={styles.questionCheckbox}>
                <RiCheckFill className={styles.questionIcon} />
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default Question
