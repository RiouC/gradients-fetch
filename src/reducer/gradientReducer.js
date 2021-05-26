import { allTags } from "../gradients"

export const gradientReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: ""
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        gradient: action.payload,
        uniqueTag: allTags(action.payload),
        filteredGradient: action.payload,
        loading: false,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case "FILTER":
      return {
        ...state,
        filter: action.payload,
        filteredGradient: state.gradient.filter(el => {
          if (action.payload === "all") {
            return true
          }
          return el.tags.includes(action.payload)
        }),
        loading: false,
      }
    default:
      throw new Error(`Unsupported action type ${action.type} in gradientReducer`)
  }
}