import { useLocation } from 'react-router-dom'
import routes from '../../routes/routes'
import styles from '../../App.module.css'

const TotalQuiz = () => {
  const location = useLocation()
  const currentIndex = routes.indexOf(location.pathname)
  const totalRoutes = routes.length

  return (
    <>
      <div className={styles.totalQuestions}>
        <span>
          <b>{currentIndex}</b> / {totalRoutes - 1}
        </span>
      </div>
    </>
  )
}

export default TotalQuiz
