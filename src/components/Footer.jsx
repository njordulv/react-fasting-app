import styles from '../App.module.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <div className={`${styles.wrapper} ${styles.FooterWrapper}`}>
        <div>
          Copyright &copy; {year} React Fasting App. All Rights Reserved.
        </div>
        <div>
          <div>
            Stay motivated and achieve your health goals. Keep pushing forward,
            and you'll see progress!
          </div>
          <div>
            Remember, the journey to a healthier you starts with the first step.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
