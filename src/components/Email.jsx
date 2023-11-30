import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import styles from '../App.module.css'

const Email = () => {
  const API_URL = 'http://localhost:4000/submit-email'
  const [emailValue, setEmailValue] = useState('')
  const [disabled, setDisabled] = useState(true)

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
    }
    if (!value) {
      setDisabled(true)
    }
  }

  const eraseInputHandler = () => {
    setEmailValue('')
    setDisabled(true)
    clearErrors()
  }

  const onSubmitHandler = (data) => {
    axios
      .post(API_URL, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error))
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
        <div className={`${styles.inputField} ${styles.inputFieldEmail}`}>
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
            Kindly review our Privacy Policy for insights on how we utilize your
            information.
          </span>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  )
}

export default Email
