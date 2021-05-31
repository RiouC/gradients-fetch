import { Fragment } from "react"
import { useGradient } from "../context/GradientContext"
import { allTags } from "../gradients"

const GradientsSelect = () => {
  const { gradients, filter, changeFilter, fav} = useGradient()

  const uniqueTag = allTags(gradients)

  return (
    <Fragment>
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={changeFilter}
      >
        <option value="tous">tous</option>
        {uniqueTag.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
    </Fragment>
  )
}

export default GradientsSelect
