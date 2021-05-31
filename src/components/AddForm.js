import {  useState } from "react"
// import { useGradient } from "../hook/useContext"

const AddForm = () => {
  // const {gradients, dispatch} = useGradient()

  const [start, setStart] = useState('rgb(0,0,0)')
  const [end, setEnd] = useState('rgb(0, 0, 0)')
  const linearGradient = `linear-gradient(to right, ${start} , ${end})`
  const tagList = ["gris", "vert", "bleu", "violet", "rose", "jaune", "orange", "fuchsia", "mauve", "rouge", "noir", "blanc"]

  return (

    <form className="mb-4"
    // onSubmit={dispatch}
    >
  <div className="input-group mb-4">
    <label htmlFor="name" className="input-group-text">Nom</label>
    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Saisir le nom" required/>
  </div>

  <div className="row">
    <div className="col-md-9 mb-4">
  <div className="input-group mb-4">
    <label htmlFor="start" className="input-group-text">Couleur 1</label>
    <input onChange={(e) => setStart(e.target.value)} value={start} type="color" className="form-control" id="start" aria-describedby="start" placeholder="Saisir la couleur de gauche" style={{height: "2.5rem", width:"10rem"}}/>
  </div>
  <div className="input-group">
    <label htmlFor="end" className="input-group-text">Couleur 2</label>
    <input onChange={(e) => setEnd(e.target.value)} value={end} type="color" className="form-control" id="end" aria-describedby="end" placeholder="Saisir la couleur de droite" style={{height: "2.5rem", width:"10rem"}}/>
  </div>
  </div>
  <div className="col-md-3 mb-4">
  <div
      className="card-gradient mx-auto rounded-pill"
      style={{ backgroundImage: linearGradient }}
    ></div>
    </div>
  </div>
  
  
    {tagList.map((tag) => {
      return (
        <div className="form-check form-check-inline mb-4" key={tag}>
      <input className="form-check-input" type="checkbox" id="tags" value={tag}/>
      <label className="form-check-label" htmlFor="tags">{tag}</label>
      </div>)
    })}

<div className="text-start">
  <button type="submit" className="btn btn-outline-secondary">Ajouter</button>
  </div>
</form>
  
  )
}

export default AddForm
