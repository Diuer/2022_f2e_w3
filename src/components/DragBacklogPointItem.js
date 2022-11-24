import cn from "clsx";
import { useEffect } from "react";
import { useDrag, useDrop, DragSource, DragPreviewImage } from "react-dnd";

// import "../style/DragItem.scss";

const DragItem = ({ type, id, columnIndex, title, description, point }) => {
  // 拖曳
  // TODO: 拖曳樣式
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "point-item",
    item: { id, columnIndex, point },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div className={cn("challenge-item-container")} ref={drag}>
        <p className="challenge-item-title">{title}</p>
        <p className="challenge-item-description">{description}</p>
        <p className="challenge-item-point">
          <span className="point">{point}點</span>
          {Array(point)
            .fill("")
            .map((item, index) => (
              <span key={index} className="square"></span>
            ))}
        </p>
      </div>
    </>
  );
};

export default DragItem;
