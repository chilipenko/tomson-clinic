const initState = {
  doctorTable : {},
  buttons : [],
}

export const fetchReducer= (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_STATE':
      return {...state, doctorTable: action.payload};
    case 'CREATE_BUTTONS':
      return {...state, buttons: action.payload.map(el => ({id: el, name: el}))}
    default:
      return state
  }
}
