import { Link, useParams } from "react-router-dom"
import { useGradient } from "../context/GradientContext"
import { ReactComponent as Home } from "bootstrap-icons/icons/house.svg"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"

const Product = () => {
  const { id } = useParams()
  const { gradients, fav, toggleFav } = useGradient()
  const length = gradients.length

  const chooseGradient = Math.floor(Math.random() * length)

  const pathHome = `/`
  const pathPrev = `/product/${Number(id) === 1 ? length : Number(id) - 1}`
  const pathNext = `/product/${Number(id) === length ? 1 : Number(id) + 1}`
  const pathRandom = `/product/${Number(chooseGradient)}`

  const gradient = gradients.find(el => el.id === Number(id))

  const style = gradient ? {
    backgroundImage : `linear-gradient(to right, ${gradient.start}, ${gradient.end})`
  } : {
    backgroundColor : 'black'
  }
  const code = gradient ? `background-image: linear-gradient(to right, ${gradient.start}, ${gradient.end})` : ''

  return (
      <div className="flex-fill d-flex" style={style}>
        <div className="m-auto text-center">
          {gradient ? 
        <div>
          <h1 className="text-white display-1">{gradient.name}</h1>
          {fav.some(elem => elem === gradient.id) ? 
          <button value={gradient.id} type="button" className="btn text-danger" onClick={toggleFav}>♥</button> : 
          <button value={gradient.id} type="button" className="btn" onClick={toggleFav}>♡</button>}
          <div className="bg-white shadow p-2 rounded">
            <code>{code}</code>
          </div>
          <>
          </>
        </div> :
        <p className="text-white">Oups, ce gradient n'existe pas...</p>}
        <nav className="m-3">
            <Link to={pathHome} className="btn btn-outline-light m-1"><Home /></Link>
            <Link to={pathPrev} className="btn btn-outline-light m-1"><Prev/></Link>
            <Link to={pathRandom} className="btn btn-outline-light m-1"><SvgToggle /></Link>
            <Link to={pathNext} className="btn btn-outline-light m-1"><Next/></Link>
            </nav>
        </div>
      </div> 
  )
}
export default Product