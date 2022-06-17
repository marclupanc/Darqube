import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/News/selectors";
import React, { useEffect } from "react";
import { fetchNewsBegin } from "../../redux/News/actions";

const LatestItem = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);

  useEffect(() => {
    dispatch(fetchNewsBegin());
  }, []);

  return (
    <div className="section-main">
      <div className="main-post">
        <div className="latest-research">
          <div>Latest Research</div>
        </div>

        <div className="brief">
          <a className="brief-text" href={news[0]?.url} target="_blank">
            {news[0]?.source}
          </a>
        </div>
        <div className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M262.62 336L342 256l-79.38-80M330.97 256H170"
            />
            <path
              d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
          </svg>
        </div>
        <a href={news[0]?.url} target="_blank" className="main-post-title">
          {news[0]?.headline.substring(0, 28)}
        </a>
        <div className="mainPostSummary">
          {news[0]?.summary.substring(0, 100)}...
        </div>
        <div className="line"></div>
        <div className="read">
          <a
            className="readText "
            href={news[0]?.url}
            rel="noreferrer"
            target="_blank"
          >
            Read the research
          </a>
        </div>
        <div className="date">17 Feb</div>
        <div className="bookmark">
          <button className="bookmark-button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.76398 2.47487V9.79632L5.71358 8.56012L6.48257 8.23783L7.25277 8.55722L10.2703 9.80856V2.47487H2.76398ZM0.763977 0.474869H12.2703V12.8031L6.48665 10.4047L0.763977 12.8031V0.474869Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="overlay">
          <div
            className="latestBackground"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${news[0]?.image})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LatestItem;
