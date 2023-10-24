import { useLocation } from "react-router-dom"
import styles from "../App.module.css"

const Body = ({ children }) => {
  const location = useLocation()

  const bodyClass =
    location.pathname === "/quiz" || location.pathname === "/quiz/"
      ? styles.quizStartPage
      : styles.quizPage

  document.body.className = bodyClass

  return <>{children}</>
}

export default Body
