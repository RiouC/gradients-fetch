import { useGradient } from "../context/GradientContext"
import { allTags } from "../gradients"

const GradientsSelect = () => {
  const { gradient, filter, changeFilter } = useGradient()

  const uniqueTag = allTags(gradient)

  return (
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
        <option value="all">Tous</option>
        {uniqueTag.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
