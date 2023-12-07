import { IoIosBody } from 'react-icons/io'
import { PiPulseThin } from 'react-icons/pi'
import styles from './Offer.module.css'

const Offer = () => {
  const handleScrollToPlan = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <h1>Offer</h1>
      <div className={styles.offerTarget}>
        <div className={styles.offerTargetTop}>
          <div>
            <IoIosBody />
          </div>
          <div>
            <IoIosBody />
          </div>
        </div>
        <div className={styles.offerTargetMid}>
          <b>Before</b>
          <b>After</b>
        </div>
        <div className={styles.offerTargetBot}>
          <div>
            <span>Metabolic rate</span>
            <div className={styles.rate}>
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.ratePale} />
              <PiPulseThin className={styles.ratePale} />
            </div>
          </div>
          <div>
            <span>Metabolic rate</span>
            <div className={`${styles.rate} ${styles.rateEnd}`}>
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
              <PiPulseThin className={styles.rateVivid} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="getMyPlan"></div>
      <div>
        <button className="button" onClick={handleScrollToPlan}>
          Grab My plan
        </button>
      </div>
    </>
  )
}

export default Offer
