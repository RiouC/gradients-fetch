import { Fragment } from "react";
import { useGradient } from "../hook/useGradient";
import { useGlobalSettings } from "../hook/useGlobalSettings";
import { allTags } from "../gradients";

const GradientsSelect = () => {
  const { gradients, filter, changeFilter} = useGradient();
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "bg-dark text-light" : "";

  const uniqueTag = allTags(gradients);

  return (
    <Fragment>
    <div className="input-group mb-3">
      <label className={`input-group-text ${darkModeClass}`} htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className={`form-select ${darkModeClass}`}
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
