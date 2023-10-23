import { useState } from "react"
import styles from "./Quiz.module.css"

const Question = ({ counter, question, options, navigateTo, all }) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setTimeout(() => {
      navigateTo()
    }, 400)
  }

  return (
    <>
      <div className={styles.supHeading}>
        <span>{`${counter} / ${all}`}</span>
        <div
          className={styles.progressBar}
          style={{
            width: `${counter}0%`,
          }}
        ></div>
      </div>
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
