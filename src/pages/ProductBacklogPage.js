import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import tableBg from "../assets/table.png";
import roleIcon from "../assets/PO.png";

import "../style/ProductBacklogPage.scss";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

const ProductBacklogPage = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".role-speaking-dialog h4", {
        text: "我是 TT 資訊，開發 A 組的 PO，粉紅豬。<br />PO 也就是產品負責人（Product Owner）。<br />產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product Backlog）唷！<br />剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。 既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！",
        duration: 15,
      })
      .to(".btn-container", {
        display: "block",
        opacity: 1,
      });
  }, []);

  return (
    <div className="product-backlog-page">
      <div className="background"></div>
      <div className="content">
        <img className="role-icon" src={roleIcon} alt="role-icon" />
        <div className="role-speaking-dialog">
          <h4> </h4>
        </div>
      </div>
      <div className="btn-container init-opacity-0">
        <Link to="/roles">
          <button className="btn medium-btn auto-width">{"<"}</button>
        </Link>
        <Link to="/challenge">
          <button className="btn medium-btn">接受挑戰</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductBacklogPage;
