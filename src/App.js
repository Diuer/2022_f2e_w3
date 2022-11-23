import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import ProductBacklogPage from "./pages/ProductBacklogPage";
import ChallengePage from "./pages/ChallengePage";

import loadingIcon from "./assets/Rocket-ver.png";
import progressIcon from "./assets/Rocket-hor.png";

import { deviceInfo } from "./utils/device";

import "./App.scss";

const App = () => {
  const { isPC } = deviceInfo();

  const Loading = () => (
    <img className="loading-icon" src={loadingIcon} alt="loading-icon" />
  );
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {!isPC && (
          <h4 className="device-suggestion">
            請使用桌機版瀏覽以獲得更好的使用者體驗
          </h4>
        )}
        <div className="progress-bar">
          <div className="progress-bg"></div>
          <img
            className="progress-icon"
            src={progressIcon}
            alt="progress-icon"
          />
        </div>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/product-backlog" element={<ProductBacklogPage />} />
            <Route path="/challenge" element={<ChallengePage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
