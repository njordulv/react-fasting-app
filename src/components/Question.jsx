import { useState } from "react"
import styles from "./Quiz.module.css"

const Question = ({ stepNumber, question, options, navTo }) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setTimeout(() => {
      navTo()
    }, 400)
  }

  return (
    <>
      <h1>{stepNumber}</h1>
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
                onChange={handleOptionChange}
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
