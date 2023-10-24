import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import ProgressBar from "../components/ProgressBar"
import styles from "../App.module.css"

const StepLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ProgressBar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default StepLayout
