import { ADMIN } from "../actionTypes/adminAT"

const initState = {
  admin: false
}

export const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case ADMIN:
      return {...state, admin: true}
    default:
      return state
  }
}

