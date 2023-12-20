import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styles from '../../App.module.css'
import { useNavigate } from 'react-router'

const Loader = () => {
  const navigate = useNavigate()
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 1
      if (progress > 100) {
        clearInterval(interval)
        setTimeout(() => {
          navigate('/email/')
        }, 1000)
      } else {
        setPercentage(progress)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <CircularProgressbar
      className={styles.CircularProgressbar}
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={5}
      styles={buildStyles({
        textColor: 'var(--color)',
        pathColor: 'var(--purple)',
        trailColor: 'var(--dark)',
        textSize: '15px',
      })}
    />
  )
}

export default Loader
