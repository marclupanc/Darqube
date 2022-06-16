import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsBegin} from "../../redux/News/actions";
import {getNews} from "../../redux/News/selectors";
import LatestItem from "../../Components/LatestItem/LatestItem";
import PostItem from "../../Components/PostItem/PostItem";

const Home = () => {

  const dispatch = useDispatch();
  const news = useSelector(getNews);

     useEffect(() =>{
       dispatch(fetchNewsBegin())
     },[])

  const postItems = news.splice(1, 7);
  console.log(postItems);

  return (
    <div className='container'>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 pb-4 latest">
          {<LatestItem/>}
        </div>
        <div className="col-xl-8 col-lg-6 col-md-6 ">
          <div className="row phones">
            {news.slice(1, 7).map((data) => <PostItem postData={data}/>)}
            <div className="row pagination">
              <div className="page-navigation pb-4">
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
    )
}

export default Home;