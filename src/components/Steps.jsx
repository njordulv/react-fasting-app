import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const Steps = {
  1: true,
  2: false,
  3: false,
}

function StepPage() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const stepNumber = parseInt(path.split("-")[1], 10) // Извлекаем номер шага из URL.

    if (!Steps[stepNumber]) {
      // Если шаг недоступен, выполняем редирект на первый доступный шаг.
      for (let i = 1; i <= 20; i++) {
        if (Steps[i]) {
          navigate(`/quiz/step-${i}`)
          break
        }
      }
    }
  }, [location.pathname, navigate])

  return (
    <>
      <div>Steps</div>
    </>
  )
}

export default StepPage
