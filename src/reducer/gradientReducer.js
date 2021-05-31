export const gradientReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading:true,
message: false
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        gradients: action.payload,
        loading: false,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      case "ADD_SUCCESS":
      return {
        ...state,
        loading: false,
        message: true
      }
    default:
      throw new Error(`Unsupported action type ${action.type} in gradientReducer`)
  }
}
