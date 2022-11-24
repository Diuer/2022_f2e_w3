import cn from "clsx";
import { useState } from "react";
import { useDrop, DragPreviewImage } from "react-dnd";

// import "../style/DropItem.scss";

function DraggableHouse({ connectDragSource, connectDragPreview }) {
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  );
}

const DropItem = ({
  accept,
  onDrop,
  onHover,
  dropIndex,
  isDone,
  title,
  description,
}) => {
  const [{ handlerId, isOver }, drop] = useDrop({
    accept: "point-item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        hover: monitor.isOver({ shallow: false }),
      };
    },
    drop: (item) => onDrop({ from: item, to: dropIndex }),
    hover: (item) => onHover(item),
  });

  if (isDone) {
    return (
      <div className="challenge-item-container">
        <p className="challenge-item-title">{title}</p>
        <p className="challenge-item-description">{description}</p>
      </div>
    );
  }
  return (
    <div
      className={cn("challenge-answer-container", { isOver })}
      ref={drop}
      data-handler-id={handlerId}
    >
      {isOver && <h4>放在這裡</h4>}
    </div>
  );
};

export default DropItem;
