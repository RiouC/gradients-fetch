import React from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Product from "./components/Product"
import Footer from "./components/Footer"
import { Switch, Route } from "react-router"

function App() {

  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Switch>
      <Route exact path="/">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      </Route>
      <Route exact path="/product/:id">
    <Product />
  </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
