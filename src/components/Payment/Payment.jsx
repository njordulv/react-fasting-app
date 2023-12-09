import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  setPlan1,
  setPlan2,
  setPlan3,
  selectPlan1,
  selectPlan2,
  selectPlan3,
} from '../../store/slices/paymentSlice'
import { setCheckbox, selectCheckbox } from '../../store/slices/checkboxSlice'
import styles from './Payment.module.css'

const Payment = () => {
  const dispatch = useDispatch()
  const plan1 = useSelector(selectPlan1)
  const plan2 = useSelector(selectPlan2)
  const plan3 = useSelector(selectPlan3)
  const checkbox = useSelector(selectCheckbox)
  const [errorDisplayed, setErrorDisplayed] = useState(false)
  const [popular, setPopular] = useState('')

  useEffect(() => {
    dispatch(setPlan2('3 months'))
  }, [dispatch])

  const updatePlan1 = (value) => {
    dispatch(setPlan1(value))
    setPopular('')
  }

  const updatePlan2 = (value) => {
    dispatch(setPlan2(value))
    setPopular('')
  }

  const updatePlan3 = (value) => {
    dispatch(setPlan3(value))
    setPopular('Most Popular')
  }

  const handleCheckboxChange = (event, name) => {
    dispatch(setCheckbox({ ...checkbox, [name]: event.target.checked }))
    setPopular('')
  }

  const submitPaymentHandler = (e) => {
    e.preventDefault()
    setErrorDisplayed(false)

    if (!(checkbox.conditions && checkbox.terms)) {
      if (!errorDisplayed) {
        toast.error('Please check all the checkboxes')
        setErrorDisplayed(true)
      }
    } else {
      toast.success('Well Done!')
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
      <form className={styles.payment} onSubmit={submitPaymentHandler}>
        <div className={styles.paymentPlans}>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id="plan1"
              name="planOptions"
              value={plan1}
              className={styles.paymentInput}
              onChange={(e) => updatePlan1(e.target.value)}
            />
            <label htmlFor="plan1">
              <div className={styles.paymentName}>1-month plan</div>
              <div className={styles.paymentPrice}>
                <span>$ 0.63</span> per day
              </div>
            </label>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id="plan2"
              name="planOptions"
              value={plan2}
              className={styles.paymentInput}
              onChange={(e) => updatePlan2(e.target.value)}
              defaultChecked
            />
            <label htmlFor="plan2">
              <div className={styles.paymentName}>3-month plan</div>
              <div className={styles.paymentPrice}>
                <span>$ 0.48</span> per day
              </div>
            </label>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id="plan3"
              name="planOptions"
              value={plan3}
              className={styles.paymentInput}
              onChange={(e) => updatePlan3(e.target.value)}
            />
            <label htmlFor="plan3">
              <div className={styles.paymentName}>6-month plan</div>
              <div className={styles.paymentPrice}>
                <span>$ 0.31</span> per day
              </div>
            </label>
            <div className={styles.paymentPopular}>{popular}</div>
          </div>
        </div>
        <div className={styles.checkboxes}>
          <div className={styles.checkbox}>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={checkbox.conditions}
                onChange={(e) => handleCheckboxChange(e, 'conditions')}
              />
              <div className={styles.checkboxSlider}>
                <div className={styles.checkboxKnob}></div>
              </div>
            </label>
            <small>
              By ticking this box, I acknowledge and accept the Terms and
              Conditions as well as the Refund Policy
            </small>
          </div>
          <div className={styles.checkbox}>
            <label className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={checkbox.terms}
                onChange={(e) => handleCheckboxChange(e, 'terms')}
              />
              <div className={styles.checkboxSlider}>
                <div className={styles.checkboxKnob}></div>
              </div>
            </label>
            <small>
              By selecting this option, I provide consent for the automatic
              renewal of my subscription using the specified card. I am aware
              that today I will be charged 36.73 USD and 78.15 USD for each
              subsequent quarterly renewal until I opt to cancel. To avoid any
              charges, it's necessary to cancel your subscription at least one
              day before its expiration. This can be done by contacting
              support@fasting.app or calling our US number: 555-01-39. The
              transaction details might appear on your bank statement
            </small>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="button">
            Get My Plan
          </button>
        </div>
      </form>
    </>
  )
}

export default Payment
