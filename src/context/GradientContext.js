import { createContext, useReducer, useEffect, useState, Fragment } from "react"
import { gradientReducer } from "../reducer/gradientReducer"
import { useIsMounted } from "../hook/useIsMounted"

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  // FETCH
  const init = { gradients: [], loading: true, error: "" }
  const [state, dispatch] = useReducer(gradientReducer, init)
  const { gradients, loading, error, message } = state
  
  const isMounted = useIsMounted()

  const URL = 'https://api-gradients.herokuapp.com/gradients'
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
    const toggleFav = (event) => {
      if (fav.some(elem => elem === Number(event.target.value))) {
        setFav(fav.filter(elem => elem !== Number(event.target.value)))
      } else {
        setFav([...fav, Number(event.target.value)])
      }
    }
    useEffect(() => {
      localStorage.setItem("favoriteGradients", JSON.stringify(fav))
    }, [fav])

    // ADDING
  
  return (
    <Fragment>
    {error ? <p>error...</p> : 
    <GradientContext.Provider value={{ gradients, message, dispatch, filter, changeFilter, fav, toggleFav }}>
      {loading ? <p>loading...</p> : children}
    </GradientContext.Provider>}
    </Fragment>
  )
}
