import { XCircleIcon } from "@heroicons/react/24/solid";
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
      className="bg-white rounded-md drop-shadow-md space-y-2 "
      {...draggbleProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex items-center justify-between p-2">
        <p>{todo.title}</p>
        <button className="text-red-400 hover:text-red-600">
          <XCircleIcon className="ml-4 h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
