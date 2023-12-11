import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BiLoaderAlt } from 'react-icons/bi'
import { setPlans, selectPlans } from '../../store/slices/paymentSlice'
import { setCheckbox, selectCheckbox } from '../../store/slices/checkboxSlice'
import { paymentData } from '../../data/payments'
import styles from './Payment.module.css'

const Payment = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const plans = useSelector(selectPlans)
  const checkbox = useSelector(selectCheckbox)
  const pricePlan1 = paymentData.plan1.discountFullPrice
  const pricePlan2 = paymentData.plan2.discountFullPrice
  const pricePlan3 = paymentData.plan3.discountFullPrice
  const [defaultPrice, setDefaultPrice] = useState(
    paymentData.plan2.discountFullPrice
  )
  const [fullPrice, setFullPrice] = useState(paymentData.plan2.monthPrice)
  const [errorDisplayed, setErrorDisplayed] = useState(false)
  const [popular, setPopular] = useState('')
  const [loading, setLoading] = useState(false)

  // unique IDs for payment plan inputs
  const [planIds] = useState({
    plan1Id: 'plan1_' + uuidv4(),
    plan2Id: 'plan2_' + uuidv4(),
    plan3Id: 'plan3_' + uuidv4(),
  })

  // plan selection
  const handlePlanChange = (event, name) => {
    const updatedPlans = {
      plan1: false,
      plan2: false,
      plan3: false,
      [name]: event.target.checked,
    }

    dispatch(setPlans(updatedPlans))

    const { plan1, plan2 } = updatedPlans

    if (plan1) {
      setDefaultPrice(pricePlan1)
      setFullPrice(paymentData.plan1.monthPrice)
      setPopular('')
    } else if (plan2) {
      setDefaultPrice(pricePlan2)
      setFullPrice(paymentData.plan2.monthPrice)
      setPopular('')
    } else {
      setDefaultPrice(pricePlan3)
      setFullPrice(paymentData.plan3.monthPrice)
      setPopular('Most Popular')
    }
  }

  // checkbox selection
  const handleCheckboxChange = (event, name) => {
    dispatch(setCheckbox({ ...checkbox, [name]: event.target.checked }))
  }

  // form submiting
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
      setLoading(true)
      setTimeout(() => {
        navigate('/checkout')
      }, 4000)
    }
  }

  return (
    <>
      <form className={styles.payment} onSubmit={submitPaymentHandler}>
        <div className={styles.paymentPlans}>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={planIds.plan1Id}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans.plan1}
              onChange={(e) => handlePlanChange(e, 'plan1')}
            />
            <label htmlFor={planIds.plan1Id}>
              <div className={styles.paymentName}>1-month plan</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {paymentData.currency.dollar}
                    {paymentData.plan1.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {paymentData.currency.dollar}
                  {paymentData.plan1.oldPrice}
                </span>
              </div>
            </label>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={planIds.plan2Id}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans.plan2}
              onChange={(e) => handlePlanChange(e, 'plan2')}
            />
            <label htmlFor={planIds.plan2Id}>
              <div className={styles.paymentName}>3-month plan</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {paymentData.currency.dollar}
                    {paymentData.plan2.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {paymentData.currency.dollar}
                  {paymentData.plan2.oldPrice}
                </span>
              </div>
            </label>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={planIds.plan3Id}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans.plan3}
              onChange={(e) => handlePlanChange(e, 'plan3')}
            />
            <label htmlFor={planIds.plan3Id}>
              <div className={styles.paymentName}>6-month plan</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {paymentData.currency.dollar}
                    {paymentData.plan3.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {paymentData.currency.dollar}
                  {paymentData.plan3.oldPrice}
                </span>
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
              that today I will be charged&nbsp;
              <b>
                {paymentData.currency.dollar}
                {defaultPrice}
              </b>
              &nbsp;and&nbsp;
              <b>
                {paymentData.currency.dollar}
                {fullPrice}
              </b>
              &nbsp; for each subsequent quarterly renewal until I opt to
              cancel. To avoid any charges, it's necessary to cancel your
              subscription at least one day before its expiration. This can be
              done by contacting support@fasting.app or calling our US number:
              555-01-39. The transaction details might appear on your bank
              statement
            </small>
          </div>
        </div>
        <div className="text-center">
          {loading ? (
            <button type="submit" className="button loading">
              <BiLoaderAlt className="spinner" />
            </button>
          ) : (
            <button type="submit" className="button">
              Get My Plan
            </button>
          )}
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  )
}

export default Payment
