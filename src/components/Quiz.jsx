import { useLocation, useNavigate } from "react-router-dom"

const Quiz = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const startQuizHandling = () => {
    console.log(location)
    return navigate("step-1")
  }

  return (
    <>
      <h1>Achieve Your Ideal Weight</h1>
      <p>
        Welcome to Achieve Your Ideal Weight App - your trusted companion on the
        journey to a healthier lifestyle and reaching your desired weight. Our
        questions will help create a personalized plan for you, considering your
        goals, habits, and needs. Start your unique path to becoming the best
        version of yourself right now!
      </p>
      <div>
        <button type="button" onClick={startQuizHandling}>
          Start Now
        </button>
      </div>
    </>
  )
}

export default Quiz
