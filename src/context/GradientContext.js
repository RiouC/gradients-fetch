import { createContext, useContext, useReducer, useEffect, useState } from "react"
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
  
  // FILTER
  const [filter, setFilter] = useState("tous")
  const changeFilter = (e) => {
    setFilter(e.target.value)
  }
  
  const isMounted = useIsMounted()

  const URL = 'https://gradients-api.herokuapp.com/gradients'
useEffect(()=>{
  dispatch({type:'FETCH_INIT'})
  fetch(URL).then(response =>{
    if(!response.ok){
      throw new Error(`Something went wrong: ${response.statusText}`)
    }
    return response.json()
  }).then((result) =>{
    dispatch({type:'FETCH_SUCCESS', payload:result})
  }).catch(error =>{
    dispatch({type:'FETCH_FAILURE', payload:error.message})
  })
},[isMounted])
  
  return (
    <GradientContext.Provider value={{ gradients, filter, changeFilter }}>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      {!loading && children}
    </GradientContext.Provider>
  )
}