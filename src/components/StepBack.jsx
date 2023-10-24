import { useLocation, useNavigate } from "react-router-dom"
import { IoArrowBackSharp } from "react-icons/io5"
import routes from "../data/routes"
import styles from "../App.module.css"

const StepBack = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentIndex = routes.indexOf(location.pathname)

  const stepBackHandler = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1])
    }
  }

  return (
    <>
      <button
        className={`${styles.buttonIcon} ${styles.btnBack}`}
        onClick={stepBackHandler}
      >
        <IoArrowBackSharp />
      </button>
    </>
  )
}

export default StepBack
