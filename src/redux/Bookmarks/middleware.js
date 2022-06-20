export const getBookmarkedNews = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log(result);
  console.log("now state", store.getState());
  return result;
};
