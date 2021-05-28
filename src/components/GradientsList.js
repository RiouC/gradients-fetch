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
        const { name, start, end, tags = [], id } = el
        return (
          <Gradient
            key={id}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
