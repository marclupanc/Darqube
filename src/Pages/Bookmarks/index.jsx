import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBegin } from "../../redux/News/actions";
import { getNews } from "../../redux/News/selectors";
import PostItem from "../../Components/PostItem";
import Pagination from "../../Components/Pagination";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);

  useEffect(() => {
    dispatch(fetchNewsBegin());
  }, []);

  const postItems = news.splice(1, 7);
  console.log(postItems);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-8">
          <div className="row">
            {news.slice(1, 9).map((data) => (
              <div className="col-xl-3 col-lg-6 col-md-10 col-sm-6 pb-4">
                <PostItem postData={data} />
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Bookmarks;
