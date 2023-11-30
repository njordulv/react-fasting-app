import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import {
  setActive,
  selectActive,
  selectInputHeight,
  selectInputWeight,
  selectWeightImperial,
  selectTotalCm,
} from '../store/slices/formSlice'
import { BMI } from '../data/formulas'
import styles from './Results.module.css'

const Results = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const active = useSelector(selectActive)
  const weightImperial = useSelector(selectWeightImperial)
  const [disabled, setDisabled] = useState(true)
  let inputHeight = useSelector(selectInputHeight)
  let inputWeight = useSelector(selectInputWeight)
  let totalCm = useSelector(selectTotalCm)
  let totalKg = (weightImperial * 0.45359237).toFixed()

  const BMIcurrent = BMI(inputHeight, inputWeight, totalCm, totalKg)
  const delay = 1700

  const btnContinueHandler = () => {
    return navigate('/testimonials')
  }

  useEffect(() => {
    const timeoutDelayHandler = () => {
      let activeIndex = null

      if (BMIcurrent <= 18.4) {
        activeIndex = 0
      } else if (BMIcurrent >= 18.5 && BMIcurrent <= 24.9) {
        activeIndex = 1
      } else if (BMIcurrent >= 25 && BMIcurrent <= 39.9) {
        activeIndex = 2
      } else if (BMIcurrent > 40) {
        activeIndex = 3
      }

      if (activeIndex !== null) {
        setTimeout(() => {
          dispatch(setActive(activeIndex))
        }, delay)
      }

      if (isNaN(BMIcurrent)) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }

    timeoutDelayHandler()
  }, [BMIcurrent, dispatch])

  let BMIprogress

  if (BMIcurrent <= 18.4) {
    BMIprogress = 10
  } else if (BMIcurrent >= 18.5 && BMIcurrent <= 24.9) {
    BMIprogress = 35
  } else if (BMIcurrent >= 25 && BMIcurrent <= 39.9) {
    BMIprogress = 60
  } else if (BMIcurrent > 40) {
    BMIprogress = 85
  } else {
    BMIprogress = 0
  }

  return (
    <>
      <h2>A recap of your general well-being</h2>
      <div className={styles.bmiContainer}>
        <div className={styles.bmiTop}>
          <span>
            Your BMI is&nbsp;
            {!isNaN(BMIcurrent) ? (
              <b>{BMIcurrent}</b>
            ) : (
              <span style={{ color: '#f26241' }}>Incorrect</span>
            )}
          </span>
          <span>Normal 21.4</span>
        </div>
        <div className={styles.bmiProgressBar}>
          <span
            className={styles.bmiProgress}
            style={{ left: `${BMIprogress}%` }}
          >
            <RiArrowDownSFill className={styles.bmiIconDown} />
            <RiArrowUpSFill className={styles.bmiIconUp} />
          </span>
        </div>
        <div className={styles.bmiBottom}>
          <span
            className={
              active === 0 ? `${styles.bmiUnderweight}` : `${styles.bmiVariant}`
            }
          >
            <b className={styles.bmiUnderweight}></b>
            <strong>Underweight</strong>
          </span>
          <span
            className={
              active === 1 ? `${styles.bmiNormal}` : `${styles.bmiVariant}`
            }
          >
            <b className={styles.bmiNormal}></b>
            <strong>Normal</strong>
          </span>
          <span
            className={
              active === 2 ? `${styles.bmiOverweight}` : `${styles.bmiVariant}`
            }
          >
            <b className={styles.bmiOverweight}></b>
            <strong>Overweight</strong>
          </span>
          <span
            className={
              active === 3 ? `${styles.bmiObese}` : `${styles.bmiVariant}`
            }
          >
            <b className={styles.bmiObese}></b>
            <strong>Obese</strong>
          </span>
        </div>
      </div>
      {BMIcurrent <= 18.4 ? (
        <div className={styles.bmiText}>
          <p>
            Individuals with a BMI of 18.4 or less fall into the "Underweight"
            category.
          </p>
          <p>
            Being underweight may be an indicator of insufficient nutrition,
            which can have health consequences, such as weakened immune system,
            nutritional deficiencies, and reduced bone density.
          </p>
          <p>
            It is important for individuals in this category to consult a
            healthcare professional for assessment and guidance on achieving a
            healthier weight.
          </p>
        </div>
      ) : (
        ' '
      )}
      {BMIcurrent >= 18.5 && BMIcurrent <= 24.9 ? (
        <div className={styles.bmiText}>
          <p>
            A BMI falling within the range of 18.5 to 24.9 is considered
            "Normal" or "Healthy" weight.
          </p>
          <p>
            Individuals in this range are generally at a weight that is
            appropriate for their height, and they typically have a lower risk
            of weight-related health issues.
          </p>
          <p>
            Maintaining a normal BMI is associated with better overall health
            and longevity.
          </p>
        </div>
      ) : (
        ' '
      )}
      {BMIcurrent >= 25 && BMIcurrent <= 39.9 ? (
        <div className={styles.bmiText}>
          <p>BMI values between 25.0 and 39.9 are classified as Overweight</p>
          <p>
            Overweight individuals have excess body weight relative to their
            height, and this may increase their risk of various health problems,
            including heart disease, type 2 diabetes, and joint issues.
          </p>
          <p>
            Weight management through a balanced diet and regular physical
            activity is recommended for those in this category.
          </p>
        </div>
      ) : (
        ' '
      )}
      {BMIcurrent >= 40 ? (
        <div className={styles.bmiText}>
          <p>A BMI of 40.0 or higher is categorized as Obese</p>
          <p>
            Obesity is associated with a significantly increased risk of serious
            health conditions, including cardiovascular diseases, hypertension,
            sleep apnea, and some types of cancer.
          </p>
          <p>
            It is crucial for individuals in this category to seek professional
            medical guidance and consider weight management strategies, which
            may include dietary changes, exercise, and, in some cases, medical
            intervention.
          </p>
        </div>
      ) : (
        ''
      )}
      {isNaN(BMIcurrent) ? (
        <div className={`${styles.bmiText} ${styles.bmiTextError}`}>
          Try again with correct values
        </div>
      ) : (
        ''
      )}
      <div className={styles.bmiTextSmall}>
        It's important to note that while BMI is a useful tool for evaluating
        weight status on a population level, it does not take into account
        factors like muscle mass, body composition, or distribution of fat,
        which can influence an individual's overall health. For a more
        comprehensive assessment of health, it is advisable to consult with a
        healthcare provider who can consider other factors in addition to BMI.
      </div>
      <div className={styles.bmiBack}>
        <button
          type="button"
          className="button"
          disabled={disabled}
          onClick={btnContinueHandler}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default Results
