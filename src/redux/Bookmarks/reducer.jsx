import { ADD_TO_BOOKMARKS } from "./actions";

const initialState = {
  allBookmarks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BOOKMARKS:
      console.log("Add bookmark");
      return {
        ...state,
        allBookmarks: [...state.allBookmarks, action.payload],
      };

    default:
      return state;
  }
}
