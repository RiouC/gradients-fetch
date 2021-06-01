import { useGradient } from "../hook/useGradient";
import { useGlobalSettings } from "../hook/useGlobalSettings";

const GradientTagButton = ({ tag }) => {
  const { filter, changeFilter } = useGradient();
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "border border-white" : "";
  const className = filter === tag ? "bg-light" : "bg-dark text-white";
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 mb-2 ${className} ${darkModeClass}`}
      disabled={filter === tag}
      onClick={changeFilter}
    >
      {tag}
    </button>
  );
};

export default GradientTagButton;
