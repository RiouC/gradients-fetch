import { useGradient } from "../context/GradientContext"
import { allTags } from "../gradients"

const GradientsSelect = () => {
  const { gradients, filter, changeFilter } = useGradient()

  const uniqueTag = allTags(gradients)

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
        <option value="tous">tous</option>
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
