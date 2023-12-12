import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import Plans from './Plans'
import styles from './Form.module.css'

const Checkout = () => {
  const [emailValue, setEmailValue] = useState('')
  const [isError, setIsError] = useState('')

  const formValidation = yup.object().shape({
    cardNumber: yup
      .string()
      .label('Card number')
      .required('Card Number is required'),
    cardDate: yup.string().label('Card date').required('Card date is required'),
    cardCode: yup
      .string()
      .label('Card code')
      .required('Security code is required'),
    firstName: yup
      .string()
      .label('First Name')
      .required('First Name is required'),
    lastName: yup.string().label('Last Name').required('Last Name is required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Please enter a valid email'),
  })

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  })

  const emailHandler = (e) => {
    const value = e.target.value
    setEmailValue(value)

    if (value.length > 1) {
      clearErrors()
    }
  }

  const checkoutFormSubmit = (e) => {
    e.preventDefault()
    const value = e.target.value

    if (!value) {
      setIsError('is-error')
    }

    return console.log(e)
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
                    {...register('cardNumber')}
                    className={`${styles.input}`}
                    type="text"
                    maxLength="16"
                    placeholder="Card Number"
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
                    errors.cardDate && `${styles.isError}`
                  }`}
                >
                  <input
                    {...register('cardDate')}
                    className={`${styles.input}`}
                    type="text"
                    maxLength="4"
                    placeholder="MM/YY"
                  />
                  {errors.cardDate && (
                    <div className={styles.inputError}>
                      {errors.cardDate.message}
                    </div>
                  )}
                </div>
              </label>
              <label className={`${styles.inputField}`}>
                <div
                  className={`${styles.inputHolder} ${
                    errors.cardCode && `${styles.isError}`
                  }`}
                >
                  <input
                    {...register('cardCode')}
                    className={`${styles.input}`}
                    type="password"
                    maxLength="4"
                    placeholder="CVV/CVC"
                  />
                </div>
                {errors.cardCode && (
                  <div className={styles.inputError}>
                    {errors.cardCode.message}
                  </div>
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
                    {...register('firstName')}
                    type="text"
                    className={`${styles.input}`}
                    placeholder="First name"
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
                    {...register('lastName')}
                    type="text"
                    className={`${styles.input}`}
                    placeholder="Last name"
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
                    {...register('email')}
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
