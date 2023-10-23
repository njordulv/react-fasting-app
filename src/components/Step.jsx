import { useNavigate } from "react-router-dom"
import Question from "./Question"
import steps from "../data/steps"

const Step = ({ stepIndex }) => {
  const navigate = useNavigate()
  const step = steps[stepIndex]

  const navTo = () => {
    if (stepIndex < steps.length - 1) {
      navigate(`/steps/step-${stepIndex + 2}`)
    } else {
      navigate("/final-page")
    }
  }

  return (
    <>
      <Question
        step={step.step}
        question={step.question}
        options={step.options}
        navTo={navTo}
      />
    </>
  )
}

export default Step
