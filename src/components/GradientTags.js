import { useGradient } from "../context/GradientContext"

const GradientTags = ({ tags }) => {
  const { filter, changeFilter } = useGradient()

  return (
    <div className="mt-3">
      {tags.sort().map((tag) => {
        return (
          <button key={tag}
          value={tag}
      type="button"
      className={`btn btn-sm me-2 mb-2 ${filter === tag ? "bg-light" : "bg-dark text-white"}`}
      disabled={filter === tag}
      onClick={changeFilter}
    >
      {tag}
    </button>
        )
      })}
    </div>
  )
}

export default GradientTags
