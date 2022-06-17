export const ADD_TO_BOOKMARKS = "ADD_TO_BOOKMARKS";

export const addToBookmarks = (bookmark) => ({
  type: ADD_TO_BOOKMARKS,
  payload: bookmark,
});
