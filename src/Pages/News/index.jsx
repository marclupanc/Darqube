import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBegin } from "../../redux/News/actions";
import { getAllNews, getPaginatedNews } from "../../redux/News/selectors";
import LatestItem from "../../Components/LatestItem";
import PostItem from "../../Components/PostItem";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(getPaginatedNews);

  useEffect(() => {
    dispatch(fetchNewsBegin());
  }, []);

  // PAGINATION

  // function Items({ currentItems }) {
  //   return (
  //     <>
  //       {currentItems &&
  //         currentItems.map((item) => (
  //           <div>
  //             <h3>Item #{item}</h3>
  //           </div>
  //         ))}
  //     </>
  //   );
  // }

  // function PaginatedItems({ itemsPerPage }) {
  //   // We start with an empty list of items.
  //   const [currentItems, setCurrentItems] = useState(null);
  //   const [pageCount, setPageCount] = useState(0);
  //   // Here we use item offsets; we could also use page offsets
  //   // following the API or data you're working with.
  //   const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  // PAGINATION-END
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 pb-4">{<LatestItem />}</div>
        <div className="col-xl-8 col-lg-6 col-md-6 ">
          <div className="row  phones">
            {news.map((data, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-10 col-sm-6 pb-4"
              >
                <PostItem postData={data} />
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default News;
