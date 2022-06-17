import "./styles.css";

const Pagination = () => {
  return (
    <div className="row pagination">
      <div className="page-navigation pb-4">
        <div className="pages">1-6 out of 24</div>
        <div className="pages-btn">
          <button className="previous">Previous</button>
          <button className="next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
