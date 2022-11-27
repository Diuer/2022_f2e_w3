import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import welcomeText from "../assets/welcome.png";

import "../style/HomePage.scss";

gsap.registerPlugin(TextPlugin);

const HomePage = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".welcome-dialog h3", {
        text: "哈囉，歡迎加入 TT 資訊！ <br />在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br />請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～",
        duration: 10,
      })
      .to(".large-btn", {
        display: "block",
        opacity: 1,
      });
  }, []);

  return (
    <div className="home-page">
      <img className="welcome-text" src={welcomeText} alt="welcome-text" />
      <div className="welcome-dialog">
        <h3> </h3>
      </div>
      <Link to="/roles">
        <button className="btn large-btn init-opacity-0">接受挑戰</button>
      </Link>
    </div>
  );
};

export default HomePage;
