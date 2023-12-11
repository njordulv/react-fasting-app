import { useSelector } from 'react-redux'
import {
  selectPlans,
  selectPlanOne,
  selectPlanTwo,
  selectPlanThree,
} from '../../store/slices/paymentSlice'
import styles from './Checkout.module.css'

const Checkout = () => {
  const plans = useSelector(selectPlans)
  const planOne = useSelector(selectPlanOne)
  const planTwo = useSelector(selectPlanTwo)
  const planThree = useSelector(selectPlanThree)
  const currency = plans.currency.symbol
  let selectedPlan = ''
  let monthlyPrice = ''
  let discountPrice = ''

  if (plans.plan1 === true) {
    selectedPlan = planOne.name
    monthlyPrice = planOne.monthPrice
    discountPrice = planOne.discountFullPrice
  }
  if (plans.plan2 === true) {
    selectedPlan = planTwo.name
    monthlyPrice = planTwo.monthPrice
    discountPrice = planTwo.discountFullPrice
  }
  if (plans.plan3 === true) {
    selectedPlan = planThree.name
    monthlyPrice = planThree.monthPrice
    discountPrice = planThree.discountFullPrice
  }

  return (
    <>
      <h1>Include the details of your payment information.</h1>
      <div className={styles.orderDetails}>
        <h3>Order Details:</h3>
        <div className={styles.orderDetailsItems}>
          <div className={styles.orderDetailsItem}>
            <div>Your choice:</div>
            <div></div>
            <div>{selectedPlan}</div>
          </div>
          <div className={styles.orderDetailsItem}>
            <div>Monthly price:</div>
            <div></div>
            <div>
              <span className={styles.orderDetailsOldPrice}>
                {currency}
                {monthlyPrice}
              </span>
              <span>
                {currency}
                {discountPrice}
              </span>
            </div>
          </div>
          <div className={styles.orderDetailsItem}>
            <div>Total:</div>
            <div></div>
            <div>
              {currency}
              {discountPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
