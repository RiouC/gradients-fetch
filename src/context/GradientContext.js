import { createContext, useContext, useReducer, useEffect, Fragment } from "react"
import { gradientReducer } from "../reducer/gradientReducer"
import { useIsMounted } from "../hook/useIsMounted"

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
  const init = { gradient: [], filter: "all", uniqueTag: [], filteredGradient: [], loading: false, error: "" }
  const [state, dispatch] = useReducer(gradientReducer, init)
  const { gradient, filter, uniqueTag, filteredGradient, loading, error } = state
  const isMounted = useIsMounted()

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch("https://gradients-api.herokuapp.com/gradients", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`)
        }
        return response.json()
      })
      .then(data => {
        if (isMounted.current) {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
      })
      .catch(error => {
        if (isMounted.current) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
      })
  }, [isMounted])

  return (
    <Fragment>
    {loading && <p>loading...</p>}
    {error && <p>error...</p>}
    {!loading &&
    console.log(gradient) &&
    <GradientContext.Provider value={{ gradient, filter, uniqueTag, filteredGradient, dispatch }}>
      {children}
    </GradientContext.Provider>}
    </Fragment>
  )
}