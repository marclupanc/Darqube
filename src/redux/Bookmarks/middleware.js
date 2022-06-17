export const getBookmarkedNews = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);

  console.log(result);
  console.log("next state", store.getState());
  return result;
};
