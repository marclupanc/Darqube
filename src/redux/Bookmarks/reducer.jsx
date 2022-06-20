import { ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from "./actions";

const initialState = {
  allBookmarks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BOOKMARKS:
      const existingItem = state.allBookmarks.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        allBookmarks: existingItem
          ? state.allBookmarks
          : [...state.allBookmarks, action.payload],
      };

    case REMOVE_FROM_BOOKMARKS:
      return {
        ...state,
        allBookmarks: state.allBookmarks.filter((i) => i.id !== action.id),
      };

    default:
      return state;
  }
}
