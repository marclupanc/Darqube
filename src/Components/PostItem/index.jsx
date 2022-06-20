import "./styles.css";
import {
  addToBookmarks,
  removeFromBookmarks,
} from "../../redux/Bookmarks/actions";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "../../redux/Bookmarks/selectors";
import { BookmarkedSvg, BookmarkSvg } from "../../svgees";

const PostItem = ({ postData }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(getBookmarks);
  const isBookmarked = bookmarks.map((i) => i.id).includes(postData.id);

  const toggleBookmark = (post) => {
    dispatch(
      isBookmarked ? removeFromBookmarks(post.id) : addToBookmarks(post)
    );
  };

  return (
    <div
      key=""
      className="post"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${postData.image})`,
      }}
    >
      <div className="brief">
        <a className="brief-text" href={postData.url} target="_blank">
          {postData.source}
        </a>
      </div>
      <a
        className="post-title"
        href={postData.url}
        target="_blank"
        rel="noreferrer"
      >
        {postData.headline.substring(0, 29)}...
      </a>
      <h5 className="postSummary">{postData.summary.substring(0, 80)}...</h5>
      <div className="bookmark">
        <button
          className="bookmark-button"
          onClick={() => {
            toggleBookmark(postData);
          }}
        >
          {isBookmarked ? <BookmarkedSvg /> : <BookmarkSvg />}
        </button>
      </div>
    </div>
  );
};

export default PostItem;
