import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BiLoaderAlt } from 'react-icons/bi'
import {
  setPlans,
  setOffer,
  setPopular,
  selectPlans,
  selectCurrency,
  selectPlanOne,
  selectPlanTwo,
  selectPlanThree,
  selectOffer,
  selectPopular,
} from '../../store/slices/paymentSlice'
import { setCheckbox, selectCheckbox } from '../../store/slices/checkboxSlice'
import styles from './Payment.module.css'

const Payment = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const plans = useSelector(selectPlans)
  const checkbox = useSelector(selectCheckbox)
  const currency = useSelector(selectCurrency)
  const planOne = useSelector(selectPlanOne)
  const planTwo = useSelector(selectPlanTwo)
  const planThree = useSelector(selectPlanThree)
  const [defaultPrice, setDefaultPrice] = useState(planTwo.discountFullPrice)
  const [fullPrice, setFullPrice] = useState(planTwo.monthPrice)
  const offer = useSelector(selectOffer)
  const popular = useSelector(selectPopular)
  const [errorDisplayed, setErrorDisplayed] = useState(false)
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
      setDefaultPrice(planOne.discountFullPrice)
      setFullPrice(planOne.monthPrice)
      dispatch(setOffer(''))
      dispatch(setPopular(''))
    } else if (plan2) {
      setDefaultPrice(planTwo.discountFullPrice)
      setFullPrice(planTwo.monthPrice)
      dispatch(setOffer('Best Offer'))
      dispatch(setPopular(''))
    } else {
      setDefaultPrice(planThree.discountFullPrice)
      setFullPrice(planThree.monthPrice)
      dispatch(setOffer(''))
      dispatch(setPopular('Most Popular'))
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
              checked={plans && plans.plan1}
              onChange={(e) => handlePlanChange(e, 'plan1')}
            />
            <label htmlFor={planIds.plan1Id}>
              <div className={styles.paymentName}>{planOne.name}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planOne.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planOne.oldPrice}
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
              checked={plans && plans.plan2}
              onChange={(e) => handlePlanChange(e, 'plan2')}
            />
            <label htmlFor={planIds.plan2Id}>
              <div className={styles.paymentName}>{planTwo.name}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planTwo.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planTwo.oldPrice}
                </span>
              </div>
            </label>
            <div
              className={`${styles.paymentPopular} ${styles.paymentBestOffer}`}
            >
              {offer}
            </div>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={planIds.plan3Id}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans && plans.plan3}
              onChange={(e) => handlePlanChange(e, 'plan3')}
            />
            <label htmlFor={planIds.plan3Id}>
              <div className={styles.paymentName}>{planThree.name}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planThree.discountPrice}
                  </b>
                  &nbsp;
                  <i>per day</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planThree.oldPrice}
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
                {defaultPrice}
                &nbsp;{currency.abbr}
              </b>
              &nbsp;and&nbsp;
              <b>
                {fullPrice}
                &nbsp;{currency.abbr}
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
