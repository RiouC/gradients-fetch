import React, { Fragment, useEffect } from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { useGradient } from "./context/GradientContext"
import { useIsMounted } from "./hook/useIsMounted"

function App() {
  const { dispatch } = useGradient()
  const isMounted = useIsMounted()

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(`https://gradients-api.herokuapp.com/gradients`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`)
        }
        return response.json()
      })
      .then(result => {
        if (isMounted.current) {
          console.log(result)
          dispatch({ type: "FETCH_SUCCESS", payload: result })
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
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
