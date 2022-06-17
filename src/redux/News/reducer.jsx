import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./actions";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_BEGIN:
      console.log("start");

      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_NEWS_SUCCESS:
      console.log("success", action.payload);

      return {
        ...state,
        loading: false,
        news: action.payload.allNews,
      };

    case FETCH_NEWS_FAILURE:
      console.log("fail");

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        news: [],
      };

    default:
      return state;
  }
}
