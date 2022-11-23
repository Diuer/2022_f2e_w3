import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import roleIcon1 from "../assets/PO_head_lookleft.png";
import roleIcon2 from "../assets/RD_head_lookleft.png";
import roleIcon3 from "../assets/SM_head_lookleft.png";

import "../style/RolesPage.scss";

gsap.registerPlugin(TextPlugin);

const RolesPage = () => {
  return (
    <div className="roles-page">
      <h2 className="title">角色介紹</h2>
      <div className="role-container">
        <div className="role-item">
          <img className="role-avatar" src={roleIcon1} alt="role-avatar" />
          <h3>產品負責人</h3>
          <h4>產品方向及願景，定義產品細節，優先級別，交付時間。</h4>
        </div>
        <div className="role-item">
          <img className="role-avatar" src={roleIcon2} alt="role-avatar" />
          <h3>敏捷教練</h3>
          <h4>
            負責團隊 scrum
            能合理運作，理解需求及安排產品技術製作時程，確保工程品質。
          </h4>
        </div>
        <div className="role-item">
          <img className="role-avatar" src={roleIcon3} alt="role-avatar" />
          <h3>開發團隊</h3>
          <h4>
            負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。
          </h4>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/">
          <button className="btn medium-btn auto-width">{"<"}</button>
        </Link>
        <Link to="/product-backlog">
          <button className="btn medium-btn">我瞭解了！</button>
        </Link>
      </div>
    </div>
  );
};

export default RolesPage;
