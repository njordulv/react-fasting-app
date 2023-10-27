import { useLocation } from "react-router-dom"
import { RiCheckFill } from "react-icons/ri"
import { useSelectedOptions } from "./OptionsContext"
import styles from "./Question.module.css"

const Question = ({ question, options, navigateTo }) => {
  const { optionsHistory, setOptionsHistory } = useSelectedOptions()
  const location = useLocation()
  const selectedOption = optionsHistory[location.pathname] || ""

  const handleOptionChange = (option) => {
    setTimeout(() => {
      navigateTo()
    }, 400)
    setOptionsHistory((prevHistory) => ({
      ...prevHistory,
      [location.pathname]: option,
    }))
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
                checked={selectedOption === option ? "checked" : ""}
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
