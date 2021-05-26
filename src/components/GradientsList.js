import Gradient from "./Gradient"
import { useGradient } from "../context/GradientContext"

const GradientsList = () => {
  const { filteredGradient } = useGradient()

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
