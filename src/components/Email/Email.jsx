import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import { submitEmail, clearNetworkError } from '../../store/slices/emailSlice'
import styles from './Email.module.css'

const Email = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailValue, setEmailValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const { networkError } = useSelector((state) => state.email)

  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const inputHandler = (e) => {
    const value = e.target.value
    setEmailValue(value)

    if (value.length > 1) {
      setDisabled(false)
      clearErrors()
      dispatch(clearNetworkError())
    }
    if (!value) {
      setDisabled(true)
    }
  }

  const eraseInputHandler = () => {
    setEmailValue('')
    setDisabled(true)
    dispatch(clearNetworkError())
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
            {...register('email')}
            onChange={inputHandler}
            value={emailValue}
            placeholder="Email"
            className={`${styles.input} ${styles.inputEmail}`}
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
