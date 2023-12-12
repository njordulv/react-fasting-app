import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Plans from './Plans'
import styles from './Form.module.css'

const Checkout = () => {
  const currentYear = new Date().getFullYear()
  const [cardValue, setCardValue] = useState('')
  const [expDateValue, setExpDateValue] = useState('')
  const [cvvValue, setCvvValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm()

  const cardValidation = {
    required: 'Credit card number is required',
    pattern: {
      value: /^[0-9]{16}$/,
      message: 'Invalid credit card number',
    },
  }

  const expirationDateValidation = {
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
      message: 'Wrong email address',
    },
  }

  const cardHandler = (e) => {
    const value = e.target.value
    setCardValue(value)

    if (!value) {
      clearErrors('cardNumber')
    }
  }

  const expDateHandler = (e) => {
    let value = e.target.value
    const lastChar = value.charAt(value.length - 1)

    if (value.length === 3 && lastChar === '/') {
      value = value.substring(0, 2)
    }

    if (value.length === 2 && lastChar !== '/') {
      value += '/'
    }

    if (!value) {
      clearErrors('expDate')
    }

    setExpDateValue(value)
  }

  const cvvHandler = (e) => {
    const value = e.target.value
    setCvvValue(value)

    if (!value) {
      clearErrors('cvv')
    }
  }

  const firstNameHandler = (e) => {
    const value = e.target.value
    setFirstNameValue(value)

    if (!value) {
      clearErrors('firstName')
    }
  }

  const lastNameHandler = (e) => {
    const value = e.target.value
    setLastNameValue(value)

    if (!value) {
      clearErrors('lastName')
    }
  }

  const emailHandler = (e) => {
    const value = e.target.value
    setEmailValue(value)

    if (!value) {
      clearErrors('email')
    }
  }

  const checkoutFormSubmit = (data) => {
    console.log(data)
    toast.success('Form submitted successfully!')
  }

  return (
    <>
      <h2>Include the details of your payment information.</h2>
      <section className={styles.checkoutForm}>
        <form>
          <div className={`${styles.formWrapper}`}>
            <div className={`${styles.inputRow}`}>
              <label className={`${styles.inputField}`}>
                <div
                  className={`${styles.inputHolder} ${
                    errors.cardNumber && `${styles.isError}`
                  }`}
                >
                  <input
                    {...register('cardNumber', cardValidation)}
                    className={`${styles.input}`}
                    type="text"
                    maxLength="16"
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
                    {...register('expDate', expirationDateValidation)}
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
                  <div className={styles.inputError}>{errors.cvv.message}</div>
                )}
              </label>
            </div>
            <div className={`${styles.inputRow} ${styles.invert}`}>
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
      <br />
      <br />
      <div className="text-center">
        <button
          type="submit"
          className="button"
          onClick={handleSubmit(checkoutFormSubmit)}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Checkout
