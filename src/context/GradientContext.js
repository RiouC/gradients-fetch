import { createContext, useContext, useReducer, useEffect, Fragment, useState } from "react"
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
  // FETCH
  const init = { gradient: [], loading: false, error: "" }
  const [state, dispatch] = useReducer(gradientReducer, init)
  const { gradient, loading, error } = state
  // FILTER
  const [filter, setFilter] = useState("tous")
  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    fetch("https://gradients-api.herokuapp.com/gradients")
      .then((response) => {
        dispatch({ type: "FETCH_INIT" })
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
      })
      .catch((error) => {
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
      })
  }, [])


  return (
    <Fragment>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      <GradientContext.Provider value={{ gradient, filter, changeFilter }}>
        {children}
      </GradientContext.Provider>
    </Fragment >
  )
}