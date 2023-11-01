import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [optionsHistory, setOptionsHistory] = useState({})
  const [inputHeight, setInputHeight] = useState("")
  const [heightError, setHeightError] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [isMetric, setIsMetric] = useState(true)
  const [inputWeight, setInputWeight] = useState("")
  const [weightImperial, setWeightImperial] = useState("")
  const [weightError, setWeightError] = useState("")
  const [heightImperial, setHeightImperial] = useState({ feet: "", inch: "" })
  const [goal, setGoal] = useState("")
  const [goalImperial, setGoalImperial] = useState("")
  const [verdict, setVerdict] = useState("")
  const [active, setActive] = useState(null)

  return (
    <AppContext.Provider
      value={{
        optionsHistory,
        setOptionsHistory,
        inputHeight,
        setInputHeight,
        heightError,
        setHeightError,
        disabled,
        setDisabled,
        isMetric,
        setIsMetric,
        inputWeight,
        setInputWeight,
        weightImperial,
        setWeightImperial,
        weightError,
        setWeightError,
        heightImperial,
        setHeightImperial,
        goal,
        setGoal,
        goalImperial,
        setGoalImperial,
        verdict,
        setVerdict,
        active,
        setActive,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
