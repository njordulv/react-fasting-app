import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../App.module.css"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <section>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DefaultLayout
