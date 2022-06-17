import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import { getNewsMiddleware } from "./News/middleware";
import { getBookmarkedNews } from "./Bookmarks/middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, getNewsMiddleware, getBookmarkedNews)
  )
);
export default store;
