import { IoIosBody } from 'react-icons/io'
import { PiPulseThin } from 'react-icons/pi'
import styles from './Offer.module.css'

const Offer = () => {
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
    </>
  )
}

export default Offer
