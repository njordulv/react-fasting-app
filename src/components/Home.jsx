import { useNavigate } from 'react-router-dom'
import { GiWeightScale } from 'react-icons/gi'
import styles from '../App.module.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Welcome to the React Fasting App!</h1>
      <div className="text-left">
        <p>
          Get on the path to a healthier you with our fasting and BMI
          calculator. Start your journey to a better lifestyle today.
        </p>

        <h2>Features:</h2>
        <div className={styles.homeText}>
          <ul>
            <li>Take our quiz to customize your fasting plan</li>
            <li>Calculate your Body Mass Index (BMI)</li>
            <li>Get results and recommendations based on your BMI</li>
            <li>Track your progress with our progress bars</li>
            <li>Easily navigate through different quiz and result pages</li>
            <li>Check our testimonials</li>
            <li>Choose your best activity plan</li>
          </ul>
          <GiWeightScale className={styles.sectionIcon} />
        </div>
        <br />
        <p>Start exploring the app to unlock a healthier you!</p>
        <p>Ready to begin? Click below to start your personalized quiz.</p>
      </div>
      <br />
      <div className="text-center">
        <button
          type="button"
          className="button"
          onClick={() => navigate('/quiz')}
        >
          Start Now
        </button>
      </div>
    </>
  )
}

export default Home
