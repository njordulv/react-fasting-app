import { useState } from "react"
import styles from "./Quiz.module.css"

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
      <div className={styles.quizItems}>
        {options.map((option, index) => (
          <div
            key={index}
            className={
              selectedOption === option
                ? `${styles.quizItem} ${styles.quizItemActive}`
                : `${styles.quizItem}`
            }
          >
            <label>
              <input
                className={styles.quizInput}
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
