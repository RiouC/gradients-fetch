import GradientTitle from "./GradientTitle";
import GradientPill from "./GradientPill";
import GradientCode from "./GradientCode";
import GradientTags from "./GradientTags";
import { Link } from "react-router-dom";
import { useGradient } from "../hook/useGradient";
import { useGlobalSettings } from "../hook/useGlobalSettings";

const Gradient = ({ el }) => {
  const { darkMode, lang, langMessages } = useGlobalSettings();
  const darkModeClass = darkMode ? "bg-dark text-light" : "";
  const langMessage = lang === "fr" ? langMessages.fr.full : langMessages.en.full;
  const productURL = `/product/${el.id}`;
  const {fav, toggleFav } = useGradient();

  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className={`card p-3 mb-4 shadow ${darkModeClass}`}>

        <Link to={productURL}
              className={`btn btn-outline-secondary mb-4 text-decoration-none ${darkModeClass}`}>
          {langMessage}
        </Link>

        <GradientPill colorStart={el.start} colorEnd={el.end} />
        <GradientTitle>{el.name}</GradientTitle>
        {fav.some(elem => elem === el.id) ? 
         <button value={el.id} type="button" aria-label="remove favorite" className="btn text-danger" onClick={toggleFav}>♥</button> : 
         <button value={el.id} type="button" aria-label="add to favorite" className="btn" onClick={toggleFav}>♡</button>}
        <GradientCode colorStart={el.start} colorEnd={el.end} />
        <GradientTags tags={el.tags} />
      </div>
    </li>
  );
};

export default Gradient;
