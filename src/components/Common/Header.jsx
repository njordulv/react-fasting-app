import { Link } from 'react-router-dom'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitcher from '../ThemeSwitcher'
import styles from '../../App.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ThemeSwitcher />
          <Link to="/" className={styles.logo} title="Fasting App">
            <IoFitnessOutline className={styles.logoIcon} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
