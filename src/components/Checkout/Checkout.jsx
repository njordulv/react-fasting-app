import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  LiaCreditCard,
  LiaCcVisa,
  LiaCcMastercard,
  LiaCcAmex,
  LiaCcDiscover,
} from 'react-icons/lia'
import { BiLoaderAlt } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setEmailValue, selectEmailValue } from '../../store/slices/emailSlice'
import {
  selectPlans,
  selectPlanOne,
  selectPlanTwo,
  selectPlanThree,
} from '../../store/slices/paymentSlice'
import Plans from './Plans'
import PaymentCards from './PaymentCards'
import Final from './Final'
import styles from './Form.module.css'

const Checkout = () => {
  const dispatch = useDispatch()
  const currentYear = new Date().getFullYear()
  const [cardValue, setCardValue] = useState('')
  const [expDateValue, setExpDateValue] = useState('')
  const [cvvValue, setCvvValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const emailValue = useSelector(selectEmailValue)
  const [paymentCard, setPaymentCard] = useState(<LiaCreditCard />)
  const [popup, setPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  const plans = useSelector(selectPlans)
  const planOne = useSelector(selectPlanOne)
  const planTwo = useSelector(selectPlanTwo)
  const planThree = useSelector(selectPlanThree)

  let totalPrice = ''
  let totalDiscountPrice = ''

  if (plans.plan1 === true) {
    totalPrice = planOne.totalPrice
    totalDiscountPrice = planOne.totalDiscountPrice
  }

  if (plans.plan2 === true) {
    totalPrice = planTwo.totalPrice
    totalDiscountPrice = planTwo.totalDiscountPrice
  }

  if (plans.plan3 === true) {
    totalPrice = planThree.totalPrice
    totalDiscountPrice = planThree.totalDiscountPrice
  }

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm()

  const cardValidation = {
    required: 'Credit card number is required',
    pattern: {
      value: /^\d{4} \d{4} \d{4} \d{4}$/,
      message: 'Invalid credit card number',
    },
  }

  const expDateValidation = {
    required: 'Expiration date is required',
    pattern: {
      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
      message: 'Invalid expiration date',
    },
    validate: (value) => {
      const enteredYear = Number(value.split('/')[1])
      const currentYearLastTwoDigits = Number(String(currentYear).slice(-2))
      const maxAllowedYear = currentYearLastTwoDigits + 10

      if (
        enteredYear < currentYearLastTwoDigits ||
        enteredYear > maxAllowedYear
      ) {
        return 'Invalid expiration date'
      }

      return true
    },
  }

  const cvvValidation = {
    required: 'CVV/CVC is required',
    pattern: {
      value: /^[0-9]{3,4}$/,
      message: 'Invalid CVV/CVC',
    },
  }

  const firstNameValidation = {
    required: 'First Name is required',
    pattern: {
      value: /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]+$/,
      message: 'Invalid name format',
    },
  }

  const lastNameValidation = {
    required: 'Last Name is required',
    pattern: {
      value: /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]+$/,
      message: 'Invalid name format',
    },
  }

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email address format',
    },
  }

  const cardHandler = (e) => {
    const val = e.target.value
    const cleanedValue = val.replace(/\D/g, '')
    const groups = cleanedValue.match(/.{1,4}/g)
    const value = groups ? groups.join(' ') : ''
    setCardValue(value)

    if (!value || value.length === 19) {
      clearErrors('cardNumber')
      setPaymentCard(<LiaCreditCard />)
      return
    } else {
      setError('cardNumber', {
        type: 'manual',
        message: 'Invalid card number',
      })
    }

    const cardType = checkCardType(value)

    switch (cardType) {
      case 'Visa':
        setPaymentCard(<LiaCcVisa />)
        break
      case 'Mastercard':
        setPaymentCard(<LiaCcMastercard />)
        break
      case 'American Express':
        setPaymentCard(<LiaCcAmex />)
        break
      case 'Discover':
        setPaymentCard(<LiaCcDiscover />)
        break
      default:
        setPaymentCard(<LiaCreditCard />)
        break
    }
  }

  const checkCardType = (cardNumber) => {
    const visaPattern = /^4/
    const mastercardPattern = /^5[1-5]/
    const amexPattern = /^3[47]/
    const discoverPattern = /^6(?:011|5[0-9]{2})/

    if (visaPattern.test(cardNumber)) {
      return 'Visa'
    } else if (mastercardPattern.test(cardNumber)) {
      return 'Mastercard'
    } else if (amexPattern.test(cardNumber)) {
      return 'American Express'
    } else if (discoverPattern.test(cardNumber)) {
      return 'Discover'
    } else {
      return 'Unknown'
    }
  }

  const expDateHandler = (e) => {
    let value = e.target.value
    const lastChar = value.charAt(value.length - 1)

    value = value.replace(/[^\d/]/g, '')

    if (value.length === 3 && lastChar === '/') {
      value = value.substring(0, 2)
    }

    if (value.length === 2 && lastChar !== '/') {
      value += '/'
    }

    if (!value || value.length > 4) {
      clearErrors('expDate')
    } else {
      setError('expDate', {
        type: 'manual',
        message: 'Invalid expiration date',
      })
    }

    setExpDateValue(value)
  }

  const cvvHandler = (e) => {
    const val = e.target.value
    const value = val.replace(/\D/g, '')
    setCvvValue(value)

    if (!value || value.length > 2) {
      clearErrors('cvv')
    } else {
      setError('cvv', {
        type: 'manual',
        message: 'Invalid CVV/CVC number',
      })
    }
  }

  const firstNameHandler = (e) => {
    const value = e.target.value
    setFirstNameValue(value)

    if (!value || value.length >= 1) {
      clearErrors('firstName')
    }
  }

  const lastNameHandler = (e) => {
    const value = e.target.value
    setLastNameValue(value)

    if (!value || value.length >= 1) {
      clearErrors('lastName')
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const emailHandler = (e) => {
    const value = e.target.value
    dispatch(setEmailValue(value))

    if (!value || isValidEmail(value)) {
      clearErrors('email')
    } else if (value.length > 3) {
      setError('email', {
        type: 'manual',
        message: 'Invalid email address format',
      })
    } else {
      clearErrors('email')
    }
  }

  const onSubmit = async (checkoutData) => {
    const updatedCheckoutData = {
      ...checkoutData,
      total: totalPrice ? totalPrice : '0',
      totalDiscount: totalDiscountPrice ? totalDiscountPrice : '0',
    }
    try {
      await axios.post('http://localhost:4000/submit-checkout', {
        checkoutData: updatedCheckoutData,
      })
      setLoading(true)
      setTimeout(() => {
        setPopup(true)
        setLoading(false)
      }, 3000)
    } catch (error) {
      toast.error('Error sending data: ' + error)
    }
  }

  return (
    <>
      <div
        className={
          popup
            ? `${styles.checkoutPage} ${styles.popup}`
            : `${styles.checkoutPage}`
        }
      >
        <h2>Include the details of your payment information.</h2>
        <section className={styles.checkoutForm}>
          <form>
            <div className={`${styles.formWrapper}`}>
              <div className={`${styles.inputRow}`}>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${styles.withIcon} ${
                      errors.cardNumber && `${styles.isError}`
                    }`}
                  >
                    {paymentCard}
                    <input
                      {...register('cardNumber', cardValidation)}
                      className={`${styles.input}`}
                      type="text"
                      maxLength="19"
                      placeholder="Card Number"
                      value={cardValue}
                      onChange={cardHandler}
                    />
                  </div>
                  {errors.cardNumber && (
                    <div className={styles.inputError}>
                      {errors.cardNumber.message}
                    </div>
                  )}
                </label>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${
                      errors.expDate && `${styles.isError}`
                    }`}
                  >
                    <input
                      {...register('expDate', expDateValidation)}
                      className={`${styles.input}`}
                      type="text"
                      maxLength="5"
                      placeholder="MM/YY"
                      value={expDateValue}
                      onChange={expDateHandler}
                    />
                    {errors.expDate && (
                      <div className={styles.inputError}>
                        {errors.expDate.message}
                      </div>
                    )}
                  </div>
                </label>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${
                      errors.cvv && `${styles.isError}`
                    }`}
                  >
                    <input
                      {...register('cvv', cvvValidation)}
                      className={`${styles.input}`}
                      type="password"
                      maxLength="4"
                      placeholder="CVV/CVC"
                      value={cvvValue}
                      onChange={cvvHandler}
                    />
                  </div>
                  {errors.cvv && (
                    <div className={styles.inputError}>
                      {errors.cvv.message}
                    </div>
                  )}
                </label>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${
                      errors.firstName && `${styles.isError}`
                    }`}
                  >
                    <input
                      {...register('firstName', firstNameValidation)}
                      type="text"
                      className={`${styles.input}`}
                      placeholder="First name"
                      value={firstNameValue}
                      onChange={firstNameHandler}
                    />
                  </div>
                  {errors.firstName && (
                    <div className={styles.inputError}>
                      {errors.firstName.message}
                    </div>
                  )}
                </label>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${
                      errors.lastName && `${styles.isError}`
                    }`}
                  >
                    <input
                      {...register('lastName', lastNameValidation)}
                      type="text"
                      className={`${styles.input}`}
                      placeholder="Last name"
                      value={lastNameValue}
                      onChange={lastNameHandler}
                    />
                  </div>
                  {errors.lastName && (
                    <div className={styles.inputError}>
                      {errors.lastName.message}
                    </div>
                  )}
                </label>
                <label className={`${styles.inputField}`}>
                  <div
                    className={`${styles.inputHolder} ${
                      errors.email && `${styles.isError}`
                    }`}
                  >
                    <input
                      {...register('email', emailValidation)}
                      type="text"
                      className={`${styles.input}`}
                      placeholder="Email"
                      value={emailValue}
                      onChange={emailHandler}
                    />
                  </div>
                  {errors.email && (
                    <div className={styles.inputError}>
                      {errors.email.message}
                    </div>
                  )}
                </label>
              </div>
            </div>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="colored"
          />
        </section>
        <Plans />
        <div className="text-center">
          {loading ? (
            <button type="submit" className="button loading">
              <BiLoaderAlt className="spinner" />
            </button>
          ) : (
            <button
              type="submit"
              className="button"
              onClick={handleSubmit(onSubmit)}
            >
              Submit Order
            </button>
          )}
        </div>
        <PaymentCards
          LiaCcVisa={LiaCcVisa}
          LiaCcMastercard={LiaCcMastercard}
          LiaCcAmex={LiaCcAmex}
          LiaCcDiscover={LiaCcDiscover}
        />
        <div className="text-left">
          <small>
            By placing this order, you acknowledge that you've reviewed and
            accepted our <Link to="/privacy-policy">Privacy Policy</Link>.
            Please note, in certain instances, physical access to the device may
            be necessary.
          </small>
        </div>
      </div>
      {popup && <Final setPopup={setPopup} emailValue={emailValue} />}
    </>
  )
}

export default Checkout
