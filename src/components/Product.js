import { useParams } from "react-router-dom"

const Product = () => {
  const params = useParams()
  console.log(params)
  const { id } = params
  const style = {
    backgroundImage : 'linear-gradient(to right, rgb(31, 64,45), rgb(120,26,30))'
  }
  return (
      <div className="flex-fill d-flex" style={style}>
        <nav className="fixed-top nav">
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2">tous</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2">précédent</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-dark text-white nav-link me-2">suivant</a>
          </li>
        </nav>
        <div className="m-auto text-center">
          <h1 className="text-white display-1"></h1>
          <div className="bg-white shadow p-2 rounded">
            <code></code>
          </div>
        </div>
      </div>
  )
}
export default Product