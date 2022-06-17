export const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
});

export const fetchNewsSuccess = (allNews) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { allNews },
});
