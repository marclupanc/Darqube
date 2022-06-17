import { combineReducers } from "redux";
import news from "./News/reducer";
import allBookmarks from "./Bookmarks/reducer";

export default combineReducers({
  news,
  allBookmarks,
});
