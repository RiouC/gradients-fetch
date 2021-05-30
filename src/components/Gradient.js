import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import { Link } from "react-router-dom"

const Gradient = ({ colorStart, colorEnd, name, tags, id }) => {
  const productURL = `/product/${id}`

  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <Link to={productURL} className="btn btn-outline-secondary mb-4 text-decoration-none">voir ce gradient</Link>
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} />
      </div>
    </li>
  )
}

export default Gradient
