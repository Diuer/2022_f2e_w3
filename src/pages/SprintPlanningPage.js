import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import roleIcon1 from "../assets/SM_head_lookrightx0.5.png";
import roleIcon2 from "../assets/PO_head_lookrightx0.5.png";
import roleIcon3 from "../assets/RD_head_lookrightx0.5.png";

import "../style/SprintPlanningPage.scss";

gsap.registerPlugin(TextPlugin);

const SprintPlanningPage = () => {
  return (
    <div className="sprint-planning-page">
      <div className="role-container">
        <div className="role-item">
          <div className="role-info">
            <img className="role-avatar" src={roleIcon1} alt="role-avatar" />
            <h4>產品負責人</h4>
          </div>
          <div className="role-description">
            <h4 className="bg-PO">
              產品待辦清單好了之後，我們來召集 Scrum Master
              和開發團隊共同召開短衝規劃會議（Sprint
              Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
              Backlog），並由開發團隊在接下來的產品開發週期裡執行。
            </h4>
          </div>
        </div>
        <div className="role-item mt-15">
          <div className="role-info">
            <img className="role-avatar" src={roleIcon2} alt="role-avatar" />
            <h4>敏捷教練</h4>
          </div>
          <div className="role-description">
            <h4 className="bg-SM">
              嗨嗨(ﾟ∀ﾟ)你是新來的前端吧！我是這次的 Scrum Master
              山豬，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
              Scrum 瞭解。這位是黃黃，是我們開發團隊的成員唷～
            </h4>
            <h4 className="bg-SM">
              目前我們團隊一次 Sprint
              週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
              Point) 大約是 20 點左右。
            </h4>
          </div>
        </div>
        <div className="role-item mt-15">
          <div className="role-info">
            <img className="role-avatar" src={roleIcon3} alt="role-avatar" />
            <h4>開發團隊</h4>
          </div>
          <div className="role-description">
            <h4 className="bg-RD">
              嘿！新來的，你應該還不知道點數是什麼意思吧(ゝ∀･)
              <br />
              我來跟你介紹一下吧～ Sprint Point
              目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
            </h4>
            <h4 className="bg-RD">
              我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
              對了，我們平常管理任務是使用 Jira
              這套軟體，你有時間記得先去註冊和熟悉唷～
            </h4>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/challenge">
          <button className="btn medium-btn auto-width">{"<"}</button>
        </Link>
        <Link to="/fighting">
          <button className="btn medium-btn auto-width">
            沒問題，我來挑戰！
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SprintPlanningPage;
