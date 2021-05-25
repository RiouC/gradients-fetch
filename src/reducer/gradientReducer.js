export const gradientReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: ""
      }
    case "FETCH_SUCCESS":
      function allTags(list) {
        let listTotal = []
        for (let element of list) {
          if ("tags" in element) {
            listTotal = listTotal.concat(element.tags)
          }
        }
        const listTagsUnique = []
        listTotal.forEach((el) => {
          if (!listTagsUnique.includes(el)) {
            listTagsUnique.push(el)
          }
        })
        return listTagsUnique
      }
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
      const filterList = (list, filter) => {
        list.filter(el => {
          if (filter === "all") {
            return true
          }
          return el.tags.includes(filter)
        }
        )
      }
      return {
        ...state,
        filter: action.payload,
        filteredGradient: filterList(state.gradient, action.payload),
        loading: false,
      }
  }
}