import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import {
  submitEmail,
  setEmailValue,
  selectEmailValue,
  clearNetworkError,
  selectNetworkError,
} from '../../store/slices/emailSlice'
import styles from './Email.module.css'

const Email = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailValue = useSelector(selectEmailValue)
  const networkError = useSelector(selectNetworkError)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm()

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email address',
    },
  }

  const inputHandler = (e) => {
    const value = e.target.value
    dispatch(setEmailValue(value))

    if (value.length > 1) {
      dispatch(clearNetworkError())
      setDisabled(false)
      clearErrors()
    }

    if (!value) {
      setDisabled(true)
    }
  }

  const eraseInputHandler = () => {
    dispatch(setEmailValue(''))
    dispatch(clearNetworkError())
    setDisabled(true)
    clearErrors()
  }

  const onSubmitHandler = async (data) => {
    const dataWithTime = { ...data, time: `${hours}:${minutes}` }
    setLoading(true)
    try {
      const result = await dispatch(submitEmail(dataWithTime))

      setTimeout(() => {
        if (submitEmail.fulfilled.match(result)) {
          setLoading(false)
          navigate('/offer')
        }
      }, 3000)
    } catch (error) {
      setLoading(false)
      console.error('Error occurred:', error)
    }
  }

  return (
    <>
      <h2>
        Provide your email address for receiving your personalized fasting plan!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={styles.formEmail}
      >
        <div className={`${styles.inputFieldEmail}`}>
          <HiOutlineMail className={styles.inputIcon} />
          <input
            {...register('email', emailValidation)}
            type="text"
            className={`${styles.input} ${styles.inputEmail}`}
            placeholder="Email"
            value={emailValue}
            onChange={inputHandler}
          />
          {errors.email && (
            <div className={styles.inputError}>{errors.email.message}</div>
          )}
          {networkError && (
            <div className={styles.inputError}>{networkError}</div>
          )}
          <button
            className={styles.inputErase}
            disabled={disabled}
            onClick={eraseInputHandler}
          >
            <IoCloseOutline />
          </button>
        </div>
        <div className={styles.formPrivacy}>
          <GoShieldCheck />
          <span>
            Kindly review our <Link to="/privacy-policy">Privacy Policy</Link>
            &nbsp; for insights on how we utilize your information.
          </span>
        </div>
        {loading ? (
          <button type="submit" className="button loading">
            <BiLoaderAlt className="spinner" />
          </button>
        ) : (
          <button type="submit" className="button">
            Submit
          </button>
        )}
      </form>
    </>
  )
}

export default Email
