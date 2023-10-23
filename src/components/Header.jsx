import { Link } from "react-router-dom"
import { IoFitnessOutline } from "react-icons/io5"
import styles from "../App.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo} title="Fasting App">
          <IoFitnessOutline className={styles.logoIcon} />
        </Link>
      </div>
    </header>
  )
}

export default Header
