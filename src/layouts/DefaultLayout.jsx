import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import styles from "../App.module.css"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
