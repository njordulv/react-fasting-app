import styles from "../App.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.wrapper} ${styles.FooterWrapper}`}>
        <div>&copy; 2023 React Fasting App</div>
        <div>
          Stay motivated and achieve your health goals. Remember, the journey to
          a healthier you starts with the first step. Keep pushing forward, and
          you'll see progress!
        </div>
      </div>
    </footer>
  )
}

export default Footer
