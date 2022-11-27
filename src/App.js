import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import ProductBacklogPage from "./pages/ProductBacklogPage";
import ChallengePage from "./pages/ChallengePage";
import SprintPlanningPage from "./pages/SprintPlanningPage";
import FightingPage from "./pages/FightingPage";

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
            <Route exact path="/2022_f2e_w3/" element={<HomePage />} />
            <Route path="/2022_f2e_w3/home" element={<HomePage />} />
            <Route path="/2022_f2e_w3/roles" element={<RolesPage />} />
            <Route
              path="/2022_f2e_w3/product-backlog"
              element={<ProductBacklogPage />}
            />
            <Route path="/2022_f2e_w3/challenge" element={<ChallengePage />} />
            <Route
              path="/2022_f2e_w3/sprint-planning"
              element={<SprintPlanningPage />}
            />
            <Route path="/2022_f2e_w3/fighting" element={<FightingPage />} />
            <Route path="/2022_f2e_w3/sprint-short" element={<></>} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
