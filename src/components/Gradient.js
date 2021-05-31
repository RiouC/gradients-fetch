import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { Link } from "react-router-dom"
import { useGradient } from "../context/GradientContext"

const Gradient = ({ el }) => {
  const productURL = `/product/${el.id}`
  const {fav, setFav } = useGradient()

  const handleButtonClick = (event) => {
    if (fav.some(elem => elem === Number(event.target.value))) {
      setFav(fav.filter(elem => elem !== Number(event.target.value)))
    } else {
      setFav([...fav, Number(event.target.value)])
    }
  }
  
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <div className="d-flex flex-row justify-content-between">
        <Link to={productURL} className="btn btn-outline-secondary mb-4 text-decoration-none">plein écran</Link>
        
          {fav.some(elem => elem === el.id) ? 
          <button value={el.id} type="button" className="btn mb-4 text-danger" onClick={handleButtonClick}>♥</button> : 
          <button value={el.id} type="button" className="btn mb-4" onClick={handleButtonClick}>♡</button>}

        </div>
        
        <GradientPill colorStart={el.start} colorEnd={el.end} />
        <GradientTitle>{el.name}</GradientTitle>
        <GradientCode colorStart={el.start} colorEnd={el.end} />
        <GradientTags tags={el.tags} />
      </div>
    </li>
  )
}

export default Gradient
