import { createContext, useContext, useState } from "react"

const SelectedOptionsContext = createContext()

export function useSelectedOptions() {
  return useContext(SelectedOptionsContext)
}

export function SelectedOptionsProvider({ children }) {
  const [selectedOptionsHistory, setSelectedOptionsHistory] = useState({})

  return (
    <SelectedOptionsContext.Provider
      value={{ selectedOptionsHistory, setSelectedOptionsHistory }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  )
}
