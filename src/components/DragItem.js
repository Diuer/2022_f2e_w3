import cn from "clsx";
import { useEffect } from "react";
import { useDrag, useDrop, DragSource, DragPreviewImage } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

// import "../style/DragItem.scss";

const DragItem = ({ type, id, columnIndex, title, description }) => {
  // 拖曳
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "task-item",
    item: { id, columnIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  return (
    <>
      <div className={cn("challenge-item-container")} ref={drag}>
        <p className="challenge-item-title">{title}</p>
        <p className="challenge-item-description">{description}</p>
      </div>
    </>
  );
};

export default DragItem;
