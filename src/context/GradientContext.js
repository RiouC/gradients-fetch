import { createContext, useContext, useReducer, useEffect, Fragment, useRef } from "react"
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
  const init = { gradient: [], filter: "all", uniqueTag: [], filteredGradient: [], loading: false, error: "" }
  const [state, dispatch] = useReducer(gradientReducer, init)
  const { gradient, filter, uniqueTag, filteredGradient, loading, error } = state

  const cancelRef = useRef(null)
  const controllerRef = useRef(null)

  useEffect(() => {
    cancelRef.current = false
    controllerRef.current = new AbortController()
    // mounts
    console.log("I mounted")
    return () => {
      //unmounts
      console.log("I unmount")
      cancelRef.current = true
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    console.log(cancelRef)
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
        if (!cancelRef.current) {
          console.log("I get data")
          console.log(data)
          dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
      })
      .catch((error) => {
        if (!cancelRef.current) {
          console.log(error.message)
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
      })
  }, [])

  return (
    <Fragment>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      {!loading && console.log(gradient) &&
        <GradientContext.Provider value={{ gradient, filter, uniqueTag, filteredGradient, dispatch }}>
          {children}
        </GradientContext.Provider>}
    </Fragment >
  )
}