import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBegin } from "../../redux/News/actions";
import PostItem from "../../Components/PostItem";
import { getBookmarks } from "../../redux/Bookmarks/selectors";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(getBookmarks);

  useEffect(() => {
    dispatch(fetchNewsBegin());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-8">
          <div className="row">
            {bookmarks.slice(0, 9).map((data, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-6 col-md-10 col-sm-6 pb-4"
              >
                <PostItem postData={data} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="page-navigation">
            <div className="pages">1-6 out of 24</div>
            <div className="pages-btn">
              <button className="previous">Previous</button>
              <button className="next">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
