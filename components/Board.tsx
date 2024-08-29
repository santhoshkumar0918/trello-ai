"use client";

import useBoardStore from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { start } from "repl";
import { todo } from "node:test";
// import {board} from '@/store/BoardStore'

function Board() {
  const [board, getBoard, setBoardState, todoUpdateInDb] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.todoUpdateInDb,
    ]
  );

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    // check if user dragged card outside of board
    if (!destination) return;

    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    // This step is needed as the indexes are stored as numbers 0,1,2 etc , instead of id's with DND library
    // const columns = Array.from(board.columns.entries());
    // const startColIndex: [TypedColumn, Column] | undefined =
    //   columns[Number(source.index)];
    // const finishColIndex: [TypedColumn, Column] | undefined =
    //   columns[Number(destination.index)];

    // const startCol: Column = {
    //   id: startColIndex[0],
    //   todos: startColIndex[1].todos,
    // };
    // const finishCol: Column = {
    //   id: finishColIndex[0],
    //   todos: finishColIndex[1].todos,
    // };
    // console.log("start col:", startCol, "End col:", finishCol);
    // if (!startCol || !finishCol) return;
    // if (source.index === destination.index && startCol === finishCol) return;

    // const newTodos = startCol.todos;
    // const [todoMoved] = newTodos.splice(source.index, 1);

    // if (startCol.id === finishCol.id) {
    //   // same column task drag
    //   newTodos.splice(destination.index, 0, todoMoved);
    //   const newCol = {
    //     id: startCol.id,
    //     todos: newTodos,
    //   };
    //   const newColumns = new Map(board.columns);
    //   newColumns.set(startCol.id, newCol);

    //   setBoardState({ ...board, columns: newColumns });
    // } else {
    //   const finishTodos = Array.from(finishCol.todos);
    //   finishTodos.splice(destination.index, 0, todoMoved);

    //   const newColumns = new Map(board.columns);

    //   newColumns.set(startCol.id, {
    //     id: startCol.id,
    //     todos: newTodos,
    //   });
    //   newColumns.set(finishCol.id, { id: finishCol.id, todos: finishTodos });

    //   todoUpdateInDb(finishCol.id, todoMoved);

    //   setBoardState({
    //     ...board,
    //     columns: newColumns,
    //   });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
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
