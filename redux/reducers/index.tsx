import SwitchReducer from "./switchReducer";
import { combineReducers } from 'redux';

// to combine multiple reducers
const AllReducers = combineReducers({ SwitchReducer })

export default AllReducers;