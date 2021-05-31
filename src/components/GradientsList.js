import Gradient from "./Gradient"
import { useGradient } from "../hook/useGradient"

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
    <ul className="row list-unstyled mb-0">
      {filteredGradient.map(el => {
        return (
          <Gradient
            key={el.id}
            el={el}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
