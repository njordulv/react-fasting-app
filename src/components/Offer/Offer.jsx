import { useSelector } from 'react-redux'
import { PiPulseThin } from 'react-icons/pi'
import { GiWeightScale, GiCheckMark, GiRoundStar } from 'react-icons/gi'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'
import { selectGoal } from '../../store/slices/formSlice'
import TestimonialsSlider from '../slider/TestimonialsSlider'
import image from '../../images/mac-stuff.jpg'
import styles from './Offer.module.css'

const Offer = () => {
  const goal = useSelector(selectGoal)

  const handleScroll = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.offerPage}>
      <div className={styles.offerTarget}>
        <div className={styles.offerTargetTop}>
          <div>
            <BsGraphDownArrow />
          </div>
          <div>
            <BsGraphUpArrow />
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
            <span className={styles.rateEnd}>Metabolic rate</span>
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
      <div className="text-left">
        <small>
          Keep in mind that this doesn't guarantee the expected outcomes.
        </small>
      </div>
      <br />
      <br />
      <h2>Your custom plan awaits!</h2>
      <div className={styles.offerTargetWeight}>
        <h4>Target Weight</h4>
        <span>
          <GiWeightScale className={styles.offerScaleIcon} />
          {goal ? `${goal} lbs` : 'Please complete all the previous steps'}
        </span>
      </div>
      <div id="getMyPlan"></div>
      <div className={styles.offerCheckboxes}>
        <label htmlFor="conditions" className={styles.offerLabel}>
          <input type="checkbox" name="conditions" />
          <small>
            By ticking this box, I acknowledge and accept the Terms and
            Conditions as well as the Refund Policy
          </small>
        </label>
        <label htmlFor="terms" className={styles.offerLabel}>
          <input type="checkbox" name="terms" />
          <small>
            By selecting this option, I provide consent for the automatic
            renewal of my subscription using the specified card. I am aware that
            today I will be charged 36.73 USD and 78.15 USD for each subsequent
            quarterly renewal until I opt to cancel. To avoid any charges, it's
            necessary to cancel your subscription at least one day before its
            expiration. This can be done by contacting support@fasting.app or
            calling our US number: 555-01-39. The transaction details might
            appear on your bank statement as: lasta, lasta.app, lasta.online, or
            lasta.health.
          </small>
        </label>
      </div>
      <br />
      <div className="text-center">
        <h2>
          <GiRoundStar className={styles.offerIconStar} />
          &nbsp;10 000+&nbsp;
          <GiRoundStar className={styles.offerIconStar} />
        </h2>
        <p>
          Newcomers achieved their enduring weight loss goals with our program!
        </p>
      </div>
      <br />
      <div className={styles.offerWhatYouGet}>
        <h2>What you'll get:</h2>
        <p>
          We customize our plan to fit your unique needs and objectives using
          the information you provide alongside our special algorithms.
        </p>
        <p>To reach your goal, you'll receive:</p>
        <ul>
          <li>
            <GiCheckMark /> A step-by-step lifestyle guide
          </li>
          <li>
            <GiCheckMark /> Over 100 weight-loss insights
          </li>
          <li>
            <GiCheckMark /> Trackers for hydration and weight
          </li>
          <li>
            <GiCheckMark />
            Exclusive guides to deepen your understanding of nutrition and
            training for achieving your goal.
          </li>
        </ul>
        <p>
          All these features are integrated into a single mobile app available
          on IOS 14.0+ or Android 8.0+ devices.
        </p>
        <img
          src={image}
          alt=""
          className={styles.offerImage}
          title="sample image"
        />
      </div>
      <br />
      <h2>Hear the inspiring success stories from our users</h2>
      <TestimonialsSlider />
      <br />
      <br />
      <h2>Witness noticeable transformations within a mere 3 weeks</h2>
      <div className={styles.offerTargetWeight}>
        <h4>Target Weight</h4>
        <span>
          <GiWeightScale className={styles.offerScaleIcon} />
          {goal ? `${goal} lbs` : 'Please complete all the previous steps'}
        </span>
      </div>
      <div className="text-center">
        <button className="button" onClick={handleScroll}>
          Grab My plan
        </button>
      </div>
    </div>
  )
}

export default Offer
