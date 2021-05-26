import React from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { GradientContextProvider } from "./context/GradientContext"

function App() {

  return (
    <GradientContextProvider>
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      <Footer />
    </GradientContextProvider>
  )
}

export default App
