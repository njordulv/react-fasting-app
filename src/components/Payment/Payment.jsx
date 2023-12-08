import { useDispatch, useSelector } from 'react-redux'
import {
  setPlan1,
  setPlan2,
  setPlan3,
  selectPlan1,
  selectPlan2,
  selectPlan3,
} from '../../store/slices/paymentSlice'
import styles from './Payment.module.css'

const Payment = () => {
  const dispatch = useDispatch()
  const plan1 = useSelector(selectPlan1)
  const plan2 = useSelector(selectPlan2)
  const plan3 = useSelector(selectPlan3)

  const updatePlan1 = (value) => {
    dispatch(setPlan1(value))
  }

  const updatePlan2 = (value) => {
    dispatch(setPlan2(value))
  }

  const updatePlan3 = (value) => {
    dispatch(setPlan3(value))
  }

  const submitPaymentHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.payment} onSubmit={submitPaymentHandler}>
      <div className={styles.paymentPlans}>
        <div className={styles.paymentPlan}>
          <input
            type="radio"
            id="plan1"
            name="plansGroup"
            value={plan1}
            className={styles.paymentInput}
            onChange={(e) => updatePlan1(e.target.value)}
          />
          <label htmlFor="plan1">1-month plan</label>
        </div>
        <div className={styles.paymentPlan}>
          <input
            type="radio"
            id="plan2"
            name="plansGroup"
            value={plan2}
            className={styles.paymentInput}
            onChange={(e) => updatePlan2(e.target.value)}
          />
          <label htmlFor="plan2">3-month plan</label>
        </div>
        <div className={styles.paymentPlan}>
          <input
            type="radio"
            id="plan3"
            name="plansGroup"
            value={plan3}
            className={styles.paymentInput}
            onChange={(e) => updatePlan3(e.target.value)}
          />
          <label htmlFor="plan3">6-month plan</label>
        </div>
      </div>
      <div className={styles.paymentCheckboxes}>
        <label htmlFor="conditions" className={styles.paymentCheckboxLabel}>
          <input type="checkbox" name="conditions" />
          <small>
            By ticking this box, I acknowledge and accept the Terms and
            Conditions as well as the Refund Policy
          </small>
        </label>
        <label htmlFor="terms" className={styles.paymentCheckboxLabel}>
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
      <div className="text-center">
        <button type="submit" className="button">
          Get My Plan
        </button>
      </div>
    </form>
  )
}

export default Payment
