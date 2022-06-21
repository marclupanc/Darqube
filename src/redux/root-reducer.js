import { combineReducers } from "redux";
import news from "./News/reducer";
import bookmarks from "./Bookmarks/reducer";

export default combineReducers({
  news,
  bookmarks,
});
