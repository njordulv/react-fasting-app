import { useState } from "react"
import styles from "./Question.module.css"

const Question = ({ question, options, navigateTo }) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
    setTimeout(() => {
      navigateTo()
    }, 400)
  }

  return (
    <>
      <h2>{question}</h2>
      <div className={styles.questionItems}>
        {options.map((option, index) => (
          <div
            key={index}
            className={
              selectedOption === option
                ? `${styles.questionItem} ${styles.questionItemActive}`
                : `${styles.questionItem}`
            }
          >
            <label>
              <input
                className={styles.questionInput}
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => handleOptionChange(e, index)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default Question
