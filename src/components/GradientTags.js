import { useGradient } from "../hook/useGradient";
import { useGlobalSettings } from "../hook/useGlobalSettings";

const GradientTags = ({ tags }) => {
  const { filter, changeFilter } = useGradient();
  const { darkMode } = useGlobalSettings();
  const darkModeClass = darkMode ? "border border-white" : "";

  return (
    <div className="mt-3">
      {tags.sort().map((tag) => {
        return (
          <button key={tag}
          value={tag}
      type="button"
      className={`btn btn-sm me-2 mb-2 ${filter === tag ? "bg-light" : "bg-dark text-white"} ${darkModeClass}`}
      disabled={filter === tag}
      onClick={changeFilter}
    >
      {tag}
    </button>
        );
      })}
    </div>
  );
};

export default GradientTags;
