import styles from '../../App.module.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <div className={`${styles.wrapper} ${styles.FooterWrapper}`}>
        <div>
          Copyright &copy; {year} React Fasting App. <br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
