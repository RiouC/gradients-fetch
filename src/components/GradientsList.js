import Gradient from "./Gradient"
import { useGradient } from "../context/GradientContext"

const GradientsList = () => {
  const { gradients, filter } = useGradient()

  const filterGradients = (filter) => {
    if (filter === "tous") {
      return gradients
    }
    else {
      return gradients.filter((gradient) => gradient.tags.includes(filter))
    }
  }
  const filteredGradient = filterGradients(filter)

  return (
    <ul className="row list-unstyled">
      {filteredGradient.map(el => {
        return (
          <Gradient
            key={el.id}
            colorStart={el.start}
            colorEnd={el.end}
            name={el.name}
            tags={el.tags}
            id={el.id}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
