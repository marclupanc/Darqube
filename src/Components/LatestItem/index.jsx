import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../redux/News/selectors";
import React, { useEffect } from "react";
import { fetchNewsBegin } from "../../redux/News/actions";

import {
  addToBookmarks,
  removeFromBookmarks,
} from "../../redux/Bookmarks/actions";

import { BookmarkedSvg, BookmarkSvg } from "../../svgees";
import { getBookmarks } from "../../redux/Bookmarks/selectors";

const LatestItem = () => {
  const dispatch = useDispatch();
  const news = useSelector(getAllNews);
  const bookmarks = useSelector(getBookmarks);
  const isBookmarked = bookmarks.map((i) => i.id).includes(news[0]?.id);

  const toggleBookmark = (post) => {
    dispatch(
      isBookmarked ? removeFromBookmarks(post.id) : addToBookmarks(post)
    );
  };

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
          <button
            className="bookmark-button"
            onClick={() => {
              toggleBookmark(news[0]);
            }}
          >
            {isBookmarked ? <BookmarkedSvg /> : <BookmarkSvg />}
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
