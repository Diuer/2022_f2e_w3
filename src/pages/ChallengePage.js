import { Link } from "react-router-dom";

import "../style/ChallengePage.scss";

const ChallengePage = () => {
  return (
    <div className="challenge-page">
      <div className="btn-container">
        <Link to="/product-backlog">
          <button className="btn medium-btn auto-width">{"<"}</button>
        </Link>
        <Link to="/">
          <button className="btn medium-btn">我完成了</button>
        </Link>
      </div>
    </div>
  );
};

export default ChallengePage;
