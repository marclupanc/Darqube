import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./actions";

const initialState = {
  allNews: [],
  paginatedNews: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        allNews: action.payload.allNews,
        paginatedNews: action.payload.allNews.slice(1, 7),
      };

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        allNews: [],
        paginatedNews: [],
      };

    default:
      return state;
  }
}
