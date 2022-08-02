import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import note from './modules/note'
import noteDetail from './modules/noteDetail'

const middlewares = [thunk];
const rootReducer = combineReducers({note, noteDetail});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;