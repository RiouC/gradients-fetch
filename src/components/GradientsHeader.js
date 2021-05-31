import { useState } from "react"
import { ReactComponent as Home } from "bootstrap-icons/icons/house.svg"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"
import { useGradient } from "../hook/useGradient"
import { Link } from "react-router-dom"

const GradientsHeader = (props) => {
  const { children } = props
  const { gradients } = useGradient()
  const length = gradients.length
  const pathHome = `/`

  const chooseGradient = () => Math.floor(Math.random() * length)

  const [randomGradient, setRandomGradient] = useState(chooseGradient)
  const handleReloadClick = () => {
    setRandomGradient(chooseGradient)
  }
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
  }
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
  }

  const style = {
    backgroundImage: `linear-gradient(to right, ${gradients[randomGradient].start}, ${gradients[randomGradient].end})`
  }
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
      {children}
      <Link to={pathHome} className="btn btn-outline-light m-1 key" data-key="54">
        <Home />
      </Link>
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1 key"
        onClick={handlePrevClick}
        data-key="37"
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1 key" data-key="48"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1 key"
        onClick={handleNextClick}
        data-key="39"
      >
        <Next />
      </button>
    </header>
  )
}

export default GradientsHeader
