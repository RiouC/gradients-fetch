import { useGradient } from "../context/GradientContext"

const GradientTagButton = ({ tag }) => {
  const { filter, dispatch } = useGradient()
  const className = filter === tag ? "bg-light" : "bg-dark text-white"
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 mb-2 ${className}`}
      disabled={filter === tag}
      onClick={dispatch({ type: "FILTER", payload: tag })}
    >
      {tag}
    </button>
  )
}

export default GradientTagButton