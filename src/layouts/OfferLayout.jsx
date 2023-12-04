import { Outlet } from 'react-router-dom'
import HeaderOffer from '../components/HeaderOffer'
import Footer from '../components/Footer'
import styles from '../App.module.css'

const OfferLayout = () => {
  return (
    <>
      <HeaderOffer />
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

export default OfferLayout
