"use client";

import useBoardStore from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { start } from "repl";
import { todo } from "node:test";

function Board() {
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    // to check if user drag the card outs of the board
    if (!destination) return;
    // handle the column
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const reArrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: reArrangedColumns,
      });
    }
    const columns = Array.from(board.columns);
    const startColumn = columns[Number(source.droppableId)];
    const endColumn = columns[Number(destination.droppableId)];

    // const startCol: Column = {
    //   id: startColumn[0],
    //   todos: startColumn[1].todos,
    // };

    // console.log("columns : ", columns);
    console.log(source.droppableId);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="hello-1" direction="horizontal" type="group">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto p-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
