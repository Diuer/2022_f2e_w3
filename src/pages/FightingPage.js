import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DndProvider, DragPreviewImage } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import cn from "clsx";

import roleIcon from "../assets/PO_head_lookright.png";
import logoJira from "../assets/logo-jira.png";

import "../style/FightingPage.scss";
import DragItem from "../components/DragBacklogPointItem";
import DropItem from "../components/DropBacklogPointItem";

function DraggableHouse({ connectDragSource, connectDragPreview }) {
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  );
}

const initDragItemData = [
  {
    type: "task-item",
    id: "front-end-jobs",
    title: "前台職缺列表",
    description: "職缺詳細內容、點選可發送應徵意願",
    point: 5,
  },
  {
    type: "task-item",
    id: "online-resume-editor",
    title: "應徵者的線上履歷編輯器",
    description: "",
    point: 13,
  },
  {
    type: "task-item",
    id: "member-system",
    title: "會員系統",
    description: "登入、註冊、權限管理",
    point: 8,
  },
  {
    type: "task-item",
    id: "backend-jobs-management",
    title: "後台職缺管理功能",
    description: "資訊上架、下架、顯示應徵者資料",
    point: 8,
  },
];

const initDropItemData = [
  {
    accept: "task-item",
  },
  {
    accept: "task-item",
  },
  {
    accept: "task-item",
  },
  {
    accept: "task-item",
  },
];

const answer = [
  "member-system",
  "backend-jobs-management",
  "online-resume-editor",
  "front-end-jobs",
];

const FightingPage = () => {
  const navigate = useNavigate();
  const [dragData, setDragData] = useState(initDragItemData);
  const [dropData, setDropData] = useState(initDropItemData);
  const [dialog, setDialog] = useState({
    open: false,
    isDone: false,
  });
  const [points, setPoints] = useState({
    max: 20,
    now: 0,
  });

  const handleDrop = ({ from, to }) => {
    const dragTargetIndex = from.columnIndex;

    const newDragData = [...dragData];
    const dragTarget = newDragData[dragTargetIndex];
    newDragData.splice(dragTargetIndex, 1);

    const newDropData = [...dropData];
    newDropData.splice(to, 1, {
      ...dragTarget,
      isDone: true,
    });

    setDragData(newDragData);
    setDropData(newDropData);
    setPoints({
      max: points.max,
      now: points.now + dragTarget.point,
    });
  };

  const handleHover = ({ point }) => {
    setPoints({
      max: points.max,
      now: points.now,
    });
  };

  const handleCloseDialog = () => {
    setDialog({
      open: false,
      isDone: false,
    });
  };

  const isDropAtLeastOne = useMemo(() =>
    dropData.some((item) => item.isDone, [dropData])
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="fighting-page">
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
            {dragData.map((item, index) => (
              <DragItem key={index} columnIndex={index} {...item} />
            ))}
          </div>
          <div className="challenge-answer">
            <div className="title">
              <h3>開發 A 組的短衝待辦清單</h3>
            </div>
            <div className="used-point-container">
              {Array(points.max)
                .fill("")
                .map((item, index) => (
                  <span
                    key={index}
                    className={cn("square", {
                      isUsed: index + 1 <= points.now,
                    })}
                  ></span>
                ))}
            </div>
            <div className="used-sprint-backlog"></div>
            {dropData.map((item, index) => (
              <DropItem
                key={index}
                {...item}
                dropIndex={index}
                onDrop={handleDrop}
                onHover={handleHover}
              />
            ))}
          </div>
        </div>
        <div className="btn-container">
          <Link to="/sprint-planning">
            <button className="btn medium-btn auto-width">{"<"}</button>
          </Link>
          <button
            className="btn medium-btn next-btn auto-width"
            onClick={() => {
              // TODO: 超過點數等互動
              const isChallengeSucced = points.now <= points.max;

              setDialog({
                open: true,
                isDone: isDropAtLeastOne,
                isChallengeSucced,
              });
            }}
          >
            準備好了！開始 Sprint
          </button>
        </div>
        {dialog.open && dialog.isDone && (
          <div className="completed-dialog">
            <img className="role-icon" src={roleIcon} alt="role-icon" />
            {dialog.isChallengeSucced ? (
              <h3>你做得非常好！</h3>
            ) : (
              <h3>超過點數了！</h3>
            )}
            <button
              className="btn medium-btn next-btn auto-width"
              onClick={() => {
                if (dialog.isChallengeSucced) {
                  navigate("/sprint-short");
                } else {
                  setDragData(initDragItemData);
                  setDropData(initDropItemData);
                  handleCloseDialog();
                }
              }}
            >
              {dialog.isChallengeSucced ? "前往下個挑戰" : "再試試看"}
            </button>
          </div>
        )}
        {dialog.open && !dialog.isDone && (
          <div className="completed-dialog">
            <img className="role-icon" src={roleIcon} alt="role-icon" />
            <h3>咦～你好像還沒完成唷！</h3>
            <button
              className="btn medium-btn next-btn auto-width"
              onClick={() => {
                handleCloseDialog();
              }}
            >
              返回挑戰
            </button>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default FightingPage;
