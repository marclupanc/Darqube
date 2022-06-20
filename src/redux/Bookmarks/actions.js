export const ADD_TO_BOOKMARKS = "ADD_TO_BOOKMARKS";
export const REMOVE_FROM_BOOKMARKS = "REMOVE_FROM_BOOKMARKS";

export const addToBookmarks = (bookmark) => ({
  type: ADD_TO_BOOKMARKS,
  payload: bookmark,
});

export const removeFromBookmarks = (id) => ({
  type: REMOVE_FROM_BOOKMARKS,
  id,
});
