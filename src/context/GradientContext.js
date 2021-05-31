import { createContext, useContext, useReducer, useEffect, useState, Fragment } from "react"
import { gradientReducer } from "../reducer/gradientReducer"
import { useIsMounted } from "../hook/useIsMounted"

export const GradientContext = createContext()

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
  const init = { gradients: [], loading: true, error: "" }
  const [state, dispatch] = useReducer(gradientReducer, init)
  const { gradients, loading, error } = state
  
  const isMounted = useIsMounted()

  const URL = 'https://gradients-api.herokuapp.com/gradients'
  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(URL)
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

    // FILTER
    const [filter, setFilter] = useState("tous")
    const changeFilter = (e) => {
      setFilter(e.target.value)
    }

    // FAVORITE
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favoriteGradients')) || [])
    useEffect(() => {
      localStorage.setItem("favoriteGradients", JSON.stringify(fav), [fav])
    }
    )
  
  return (
    <Fragment>
    {error ? <p>error...</p> : 
    <GradientContext.Provider value={{ gradients, filter, changeFilter, fav, setFav }}>
      {loading ? <p>loading...</p> : children}
    </GradientContext.Provider>}
    </Fragment>
  )
}