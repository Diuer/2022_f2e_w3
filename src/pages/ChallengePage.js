import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { DndProvider, DragPreviewImage } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import roleIcon from "../assets/PO_head_lookright.png";
import logoJira from "../assets/logo-jira.png";

import "../style/ChallengePage.scss";
import DragItem from "../components/DragItem";
import DropItem from "../components/DropItem";
import CustomDragLayer from "../components/CustomDragLayer";

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
  },
  {
    type: "task-item",
    id: "online-resume-editor",
    title: "應徵者的線上履歷編輯器",
    description: "",
  },
  {
    type: "task-item",
    id: "member-system",
    title: "會員系統",
    description: "登入、註冊、權限管理",
  },
  {
    type: "task-item",
    id: "backend-jobs-management",
    title: "後台職缺管理功能",
    description: "資訊上架、下架、顯示應徵者資料",
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

const ChallengePage = () => {
  const navigate = useNavigate();
  const [dragData, setDragData] = useState(initDragItemData);
  const [dropData, setDropData] = useState(initDropItemData);
  const [dialog, setDialog] = useState({
    open: false,
    isDone: false,
  });

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
  };

  const handleCloseDialog = () => {
    setDialog({
      open: false,
      isDone: false,
    });
  };

  const isDropAllDone = useMemo(() =>
    dropData.every((item) => item.isDone, [dropData])
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="challenge-page">
        <div className="content">
          <img className="role-icon" src={roleIcon} alt="role-icon" />
          <div className="role-speaking-dialog">
            <h4> </h4>
            <img className="logo-jira" src={logoJira} alt="logo-jira" />
          </div>
        </div>
        <div className="challenge-container">
          <CustomDragLayer data={dragData} />
          <div className="challenge-question">
            <div className="title">
              <h3>產品待辦清單</h3>
              <h4>Product Backlog</h4>
            </div>
            {dragData.map((item, index) => (
              <DragItem key={index} columnIndex={index} {...item} />
            ))}
          </div>
          <div className="priority-container"></div>
          <div className="challenge-answer">
            {dropData.map((item, index) => (
              <DropItem
                key={index}
                {...item}
                dropIndex={index}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
        <div className="btn-container">
          <Link to="/product-backlog">
            <button className="btn medium-btn auto-width">{"<"}</button>
          </Link>
          <button
            className="btn medium-btn next-btn"
            onClick={() => {
              let isChallengeSucced = true;
              for (let index = 0; index < answer.length; index++) {
                if (dropData[index].id !== answer[index]) {
                  isChallengeSucced = false;
                  break;
                }
              }

              setDialog({
                open: true,
                isDone: isDropAllDone,
                isChallengeSucced,
              });
            }}
          >
            我完成了
          </button>
        </div>
        {dialog.open && dialog.isDone && (
          <div className="completed-dialog">
            <img className="role-icon" src={roleIcon} alt="role-icon" />
            {dialog.isChallengeSucced ? (
              <h3>
                你做得非常好！
                <br />
                你已經能掌握基礎產品代辦清單的優先度排序
                <br />
                接下來再繼續挑戰吧！
              </h3>
            ) : (
              <h3>順序可以再調整看看唷！</h3>
            )}
            <button
              className="btn medium-btn next-btn auto-width"
              onClick={() => {
                if (dialog.isChallengeSucced) {
                  navigate("/sprint-planning");
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

export default ChallengePage;
