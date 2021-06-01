import React from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Product from "./components/Product"
import Footer from "./components/Footer"
import { Switch, Route, Link } from "react-router-dom"
import AddForm from "./components/AddForm"
import { useGlobalSettings } from "./hook/useGlobalSettings";

function App() {
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "bg-dark text-light" : "";
  return (
    <div className={`App min-vh-100 d-flex flex-column ${darkModeClass}`}>
      <Switch>

      <Route exact path="/">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container mb-4" style={{ position: 'relative' }}>
        <Link to="/add" className={`btn btn-outline-secondary mb-4 text-decoration-none text-end ${darkModeClass}`} style={{ position: 'absolute', right: `15px`, top: `25px` }}>Ajouter</Link>
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      </Route>

  <Route exact path="/add">
  <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container mb-4">
        <h1 className="text-center my-4">Ajouter un gradient</h1>
      <AddForm/>
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
