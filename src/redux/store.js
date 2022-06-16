import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./root-reducer";
import {getNewsMiddleware} from "./News/middleware";


const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(thunk, getNewsMiddleware))
);
export default store;