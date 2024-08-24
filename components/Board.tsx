"use client";

import useBoardStore from "@/store/BoardStore";
import { INTERNAL_HEADERS } from "next/dist/shared/lib/constants";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

// const Board: React.FC = () => {
//   const onDragEnd = (result: any) => {
//     console.log(result);
//   };

function Board() {
  const [board, getboard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getboard();
  }, [getboard]);

  const handleOnDragEnd = (result: DropResult) => {};

  console.log(Board);

  return (
    <DragDropContext onDragEnd={(e) => handleOnDragEnd}>
      <Droppable droppableId="board1" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => {
              <Column key={id} id={id} todos={column.todos} index={index} />;
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
