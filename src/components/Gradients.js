import React, { Fragment } from "react"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  return (
    <Fragment>
      <GradientsSelect />
      <GradientsList />
    </Fragment>
  )
}

export default Gradients
