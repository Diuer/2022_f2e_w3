import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import roleIcon from "../assets/PO_head_lookright.png";
import logoJira from "../assets/logo-jira.png";

import "../style/ChallengePage.scss";

const ChallengePage = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".role-speaking-dialog h4", {
        text: "請試著把需求放到產品待辦清單，並調整待辦的優先度順序。<br />我們公司也推薦使用 Jira 來做任務的管理呢！",
        duration: 15,
      })
      .to(".btn-container", {
        display: "block",
        opacity: 1,
      });
  }, []);

  return (
    <div className="challenge-page">
      <div className="content">
        <img className="role-icon" src={roleIcon} alt="role-icon" />
        <div className="role-speaking-dialog">
          <h4> </h4>
          <img className="logo-jira" src={logoJira} alt="logo-jira" />
        </div>
      </div>
      <div className="challenge-container">
        <div className="challenge-question">
          <div className="title">
            <h3>產品待辦清單</h3>
            <h4>Product Backlog</h4>
          </div>
          <div className="challenge-item-container">
            <p className="challenge-item-title">前台職缺列表</p>
            <p className="challenge-item-description">
              職缺詳細內容、點選可發送應徵意願
            </p>
          </div>
          <div className="challenge-item-container">
            <p className="challenge-item-title">應徵者的線上履歷編輯器</p>
            <p className="challenge-item-description"></p>
          </div>
          <div className="challenge-item-container">
            <p className="challenge-item-title">會員系統</p>
            <p className="challenge-item-description">登入、註冊、權限管理</p>
          </div>
          <div className="challenge-item-container">
            <p className="challenge-item-title">後台職缺管理功能</p>
            <p className="challenge-item-description">
              資訊上架、下架、顯示應徵者資料
            </p>
          </div>
        </div>
        <div className="challenge-answer">
          <div className="challenge-answer-container"></div>
          <div className="challenge-answer-container"></div>
          <div className="challenge-answer-container"></div>
          <div className="challenge-answer-container"></div>
        </div>
      </div>
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
