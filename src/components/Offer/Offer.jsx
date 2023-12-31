import { useSelector } from 'react-redux'
import { GiWeightScale, GiCheckMark } from 'react-icons/gi'
import {
  TbStretching2,
  TbTargetOff,
  TbStarFilled,
  TbActivity,
} from 'react-icons/tb'
import {
  selectIsMetric,
  selectGoal,
  selectGoalImperial,
} from '../../store/slices/formSlice'
import TestimonialsSlider from '../slider/TestimonialsSlider'
import image from '../../images/mac-stuff.jpg'
import styles from './Offer.module.css'
import Payment from '../Payment/Payment'

const Offer = () => {
  const isMetric = useSelector(selectIsMetric)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)

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
            <TbTargetOff />
          </div>
          <div>
            <TbStretching2 />
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
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.ratePale} />
              <TbActivity className={styles.ratePale} />
            </div>
          </div>
          <div>
            <span className={styles.rateEnd}>Metabolic rate</span>
            <div className={`${styles.rate} ${styles.rateEnd}`}>
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
              <TbActivity className={styles.rateVivid} />
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
          {isMetric
            ? goal
              ? `${goal} kg`
              : 'Please complete all the previous steps'
            : goalImperial
            ? `${goalImperial} lbs`
            : 'Please complete all the previous steps'}
        </span>
      </div>
      <div id="getMyPlan">
        <Payment />
      </div>
      <br />
      <div className="text-center">
        <h2>
          <TbStarFilled className={styles.offerIconStar} />
          &nbsp;10000+&nbsp;
          <TbStarFilled className={styles.offerIconStar} />
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
      <h2>Read the inspiring success stories from our users</h2>
      <TestimonialsSlider />
      <br />
      <br />
      <br />
      <div className="text-center">
        <button className="button" onClick={handleScroll}>
          Grab My Plan
        </button>
      </div>
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
      <Payment />
    </div>
  )
}

export default Offer
