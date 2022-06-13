import PostItem from "../../Components/PostItem/PostItem";
import LatestItem from "../../Components/LatestItem/LatestItem";
import {useEffect, useState} from "react";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg')
      .then(response => response.json())
      .then(responseData => setNews(responseData))
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 pb-4 latest">
          {<LatestItem latestPostData={news}/>}
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
  );
};
export default Home;