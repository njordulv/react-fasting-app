import { Outlet } from 'react-router-dom'
import HeaderQuiz from '../components/HeaderQuiz'
import Footer from '../components/Footer'
import styles from '../App.module.css'

const QuizLayout = () => {
  return (
    <>
      <HeaderQuiz />
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

export default QuizLayout
