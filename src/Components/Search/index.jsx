import "./styles.css";
import { useSelector } from "react-redux";
import { getAllNews } from "../../redux/News/selectors";

const Search = () => {
  const news = useSelector(getAllNews);

  const handleChange = (e) => {
    console.log(
      news.filter((i) =>
        i.headline.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="search-div">
      <div className="search-1">
        <button className="btn-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          ;
        </button>
        <input
          className="input-field"
          type="text"
          name="search "
          placeholder="Search"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Search;
