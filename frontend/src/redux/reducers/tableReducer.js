const initState = {
  tableId : false
}

export const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FIRST_TABLE':
      return {...state, tableId: action.payload}
    case 'CLICK_BTN':
      return {...state, tableId: action.payload}
    default:
      return state
  }
}
