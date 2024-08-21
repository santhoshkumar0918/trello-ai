"use client";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board: React.FC = () => {
  const onDragEnd = (result: any) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board-1" direction="horizontal" type="column">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex"
          >
            {/* Your draggable items will go here */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div>Drag and drop items here</div>
    </DragDropContext>
  );
};

export default Board;
