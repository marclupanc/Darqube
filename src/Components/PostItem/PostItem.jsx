const PostItem = ({postData}) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-10 col-sm-6 pb-4">
      <div key={postData.id} className="post" style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${postData.image})`,
      }}>
        <div className="brief"><a className="brief-text"
                                  href="#">Weekly Brief</a></div>
        <a className="post-title" href={postData.url} target="_blank" rel="noreferrer">
          {postData.headline.substring(0, 29)}...
        </a>
        <h5 className="postSummary">
          {postData.summary.substring(0, 80)}...
        </h5>
        <div className="bookmark">
          <button className="bookmark-button">
            <svg width="18" height="18" viewBox="0 0 13 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.76398 2.47487V9.79632L5.71358 8.56012L6.48257 8.23783L7.25277 8.55722L10.2703 9.80856V2.47487H2.76398ZM0.763977 0.474869H12.2703V12.8031L6.48665 10.4047L0.763977 12.8031V0.474869Z"
                fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
