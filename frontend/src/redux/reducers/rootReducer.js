import { combineReducers } from 'redux';
import { adminReducer } from "./adminReducer";
import { fetchReducer } from './fetchReducer';
import { tableReducer } from './tableReducer';

export const rootReducer = combineReducers({
  adminReducer,
  fetchReducer,
  tableReducer
})
