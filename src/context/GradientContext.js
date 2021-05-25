import { createContext, useContext, useReducer } from "react"
import { gradientReducer } from "../reducer/gradientReducer"

const GradientContext = createContext()

export const useGradient = () => {
  const context = useContext(GradientContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}

export const GradientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gradientReducer, { gradient: [], filter: "all", uniqueTag: [], filteredGradient: [], loading: false, error: "" })
  const { gradient, filter, uniqueTag, filteredGradient, loading, error } = state
  return (
    <GradientContext.Provider value={{ gradient, filter, uniqueTag, filteredGradient, loading, error, dispatch }}>
      {children}
    </GradientContext.Provider>
  )
}