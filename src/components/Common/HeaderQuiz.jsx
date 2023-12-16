import { Link } from 'react-router-dom'
import { IoFitnessOutline } from 'react-icons/io5'
import StepBack from '../StepBack'
import ProgressBar from '../ProgressBar'
import TotalQuiz from '../Quiz/TotalQuiz'
import styles from '../../App.module.css'

const HeaderQuiz = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <StepBack />
          <Link to="/" className={styles.logo} title="Fasting App">
            <IoFitnessOutline className={styles.logoIcon} />
          </Link>
          <TotalQuiz />
          <ProgressBar />
        </div>
      </div>
    </header>
  )
}

export default HeaderQuiz
