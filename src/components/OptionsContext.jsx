import { createContext, useContext, useState } from "react"

const OptionsContext = createContext()

export function useSelectedOptions() {
  return useContext(OptionsContext)
}

export function OptionsProvider({ children }) {
  const [optionsHistory, setOptionsHistory] = useState({})

  return (
    <OptionsContext.Provider value={{ optionsHistory, setOptionsHistory }}>
      {children}
    </OptionsContext.Provider>
  )
}
