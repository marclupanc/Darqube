import { fetchNewsSuccess } from "./actions";

export const getNewsMiddleware = (store) => (dispatch) => (action) => {
  switch (action.type) {
    case "FETCH_NEWS_BEGIN":
      const fetchedNews = fetchNewsData();
      fetchedNews
        .then((res) => res.json())
        .then((news) => {
          dispatch(fetchNewsSuccess(news));
        });
      break;
  }

  return dispatch(action);
};

async function fetchNewsData() {
  return await fetch(
    "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg"
  );
}
