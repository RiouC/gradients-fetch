import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { Link } from "react-router-dom"

const Gradient = ({ el }) => {
  const productURL = `/product/${el.id}`
  
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <Link to={productURL} className="btn btn-outline-secondary mb-4 text-decoration-none">voir ce gradient</Link>
        <GradientPill colorStart={el.start} colorEnd={el.end} />
        <GradientTitle>{el.name}</GradientTitle>
        <GradientCode colorStart={el.start} colorEnd={el.end} />
        <GradientTags tags={el.tags} />
      </div>
    </li>
  )
}

export default Gradient
