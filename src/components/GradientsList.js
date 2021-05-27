import Gradient from "./Gradient"
import { useGradient } from "../context/GradientContext"

const GradientsList = () => {
  const { gradient, filter } = useGradient()

  const filterGradient = (filter) => {
    gradient.filter(el => {
      if (filter === "tous") {
        return true
      }
      return el.tags.includes(filter)
    }
  )}

  const filteredGradient = filterGradient(filter)

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
