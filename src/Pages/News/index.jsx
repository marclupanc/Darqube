import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBegin } from "../../redux/News/actions";
import { getNews } from "../../redux/News/selectors";
import LatestItem from "../../Components/LatestItem";
import PostItem from "../../Components/PostItem";
import Pagination from "../../Components/Pagination";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  useEffect(() => {
    dispatch(fetchNewsBegin());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 pb-4">{<LatestItem />}</div>
        <div className="col-xl-8 col-lg-6 col-md-6 ">
          <div className="row  phones">
            {news.slice(1, 7).map((data, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-10 col-sm-6 pb-4"
              >
                <PostItem postData={data} />
              </div>
            ))}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
