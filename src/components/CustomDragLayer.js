import { useMemo } from "react";
import { DragLayerMonitor, useDragLayer } from "react-dnd";

const CustomDragLayer = ({ data }) => {
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => {
    return {
      isDragging: monitor.isDragging(),
      currentOffset: monitor.getSourceClientOffset(),
      item: monitor.getItem(),
    };
  });

  const dragTarget = useMemo(() => {
    if (isDragging && currentOffset) {
      return data.filter((perItem) => perItem.id === item.id)[0] || {};
    }
    return {};
  }, [isDragging, currentOffset]);

  return isDragging && currentOffset ? (
    <div
      className="challenge-item-container isDragging"
      style={{
        // functional
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px) rotate(-10deg)`,
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <p className="challenge-item-title">{dragTarget.title}</p>
      <p className="challenge-item-description">{dragTarget.description}</p>
      {dragTarget.point && (
        <p className="challenge-item-point">
          <span className="point">{dragTarget.point}點</span>
          {Array(dragTarget.point)
            .fill("")
            .map((item, index) => (
              <span key={index} className="square"></span>
            ))}
        </p>
      )}
    </div>
  ) : null;
};

export default CustomDragLayer;
