const initState = {
  table : {}
}

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_TABLE':
      return state
    default:
      return state
  }
}
