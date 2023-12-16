import { Outlet } from 'react-router-dom'
import HeaderQuiz from '../components/Common/HeaderQuiz'
import Footer from '../components/Common/Footer'
import styles from '../App.module.css'

const QuizLayout = () => {
  return (
    <>
      <HeaderQuiz />
      <section className={styles.mainSection}>
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

export default QuizLayout
