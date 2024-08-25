import React from "react";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

type props = {
  todo: todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggbleProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  dragHandleProps,
  draggbleProps,
}: props) {
  return (
    <div
      className="bg-white rounded-md drop-shadow-md space-y-2"
      {...draggbleProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      Hello
    </div>
  );
}

export default TodoCard;
