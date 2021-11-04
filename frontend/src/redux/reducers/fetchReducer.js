const initState = {
  doctorTable : {}
}

export const fetchReducer= (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_STATE':
      return {...state, doctorTable: action.payload};
    default:
      return state
  }
}
