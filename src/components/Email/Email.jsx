import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import {
  submitEmail,
  clearNetworkError,
  clearSuccess,
  selectLoading,
} from '../../store/slices/emailSlice'
import styles from './Email.module.css'

const Email = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [emailValue, setEmailValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const loading = useSelector(selectLoading)
  const { networkError, success } = useSelector((state) => state.email)

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
      dispatch(clearSuccess())
    }
    if (!value) {
      setDisabled(true)
      dispatch(clearSuccess())
    }
  }

  const eraseInputHandler = () => {
    setEmailValue('')
    setDisabled(true)
    dispatch(clearNetworkError())
    dispatch(clearSuccess())
    clearErrors()
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess())
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [success, dispatch])

  const onSubmitHandler = async (data) => {
    const dataWithTime = { ...data, time: `${hours}:${minutes}` }
    dispatch(submitEmail('http://localhost:4000/submit-email', dataWithTime))
    setTimeout(() => {
      navigate('/offer')
    }, 2500)
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
          {success && <div className={styles.emailSuccess}>{success}</div>}
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
        <button type="submit" className={`${styles.button} button`}>
          {loading ? <BiLoaderAlt className={styles.loaderEmail} /> : 'Submit'}
        </button>
      </form>
    </>
  )
}

export default Email
