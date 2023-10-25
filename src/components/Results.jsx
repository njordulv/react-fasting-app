import { useLocation, useNavigate } from "react-router-dom"
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri"
import { BMI } from "../data/formulas"
import styles from "./Results.module.css"

const Results = ({ movePercentage }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const inputHeight = queryParams.get("inputHeight")
  const inputWeight = queryParams.get("inputWeight")
  const BMIcurrent = BMI(inputHeight, inputWeight)
  let BMIprogress

  const btnBackHandler = () => {
    return navigate("/quiz/question-1")
  }

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
            Your BMI is{" "}
            {!isNaN(BMIcurrent) ? (
              BMIcurrent
            ) : (
              <span style={{ color: "#f26241" }}>Incorrect</span>
            )}
          </span>
          <span>Normal - 21.4</span>
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
          <span>
            <b className={styles.bmiUnderweight}></b>Underweight
          </span>
          <span>
            <b className={styles.bmiNormal}></b>Normal
          </span>
          <span>
            <b className={styles.bmiOverweight}></b>Overweight
          </span>
          <span>
            <b className={styles.bmiObese}></b>Obese
          </span>
        </div>
      </div>
      {BMIcurrent <= 18.4 ? (
        <div className={styles.bmiText}>
          <p>
            Individuals with a BMI of 18.4 or less fall into the
            <span className={`${styles.bmiUnderweight} ${styles.bmiRes}`}>
              Underweight
            </span>
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
        " "
      )}
      {BMIcurrent >= 18.5 && BMIcurrent <= 24.9 ? (
        <div className={styles.bmiText}>
          <p>
            A BMI falling within the range of 18.5 to 24.9 is considered
            <span className={`${styles.bmiNormal} ${styles.bmiRes}`}>
              Normal
            </span>
            or "Healthy" weight.
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
        " "
      )}
      {BMIcurrent >= 25 && BMIcurrent <= 39.9 ? (
        <div className={styles.bmiText}>
          <p>
            BMI values between 25.0 and 39.9 are classified as
            <span className={`${styles.bmiOverweight} ${styles.bmiRes}`}>
              Overweight
            </span>
          </p>
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
        " "
      )}
      {BMIcurrent >= 40 ? (
        <div className={styles.bmiText}>
          <p>
            A BMI of 40.0 or higher is categorized as
            <span className={`${styles.bmiObese} ${styles.bmiRes}`}>Obese</span>
          </p>
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
        ""
      )}
      {isNaN(BMIcurrent) ? (
        <div className={`${styles.bmiText} ${styles.bmiTextError}`}>
          Try with the correct values
        </div>
      ) : (
        ""
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
        <button type="button" className="button" onClick={btnBackHandler}>
          Calculate again
        </button>
      </div>
    </>
  )
}

export default Results
