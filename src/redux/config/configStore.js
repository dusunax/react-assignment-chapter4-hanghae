import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import note from './modules/note'

const middlewares = [thunk];
const rootReducer = combineReducers({note});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;