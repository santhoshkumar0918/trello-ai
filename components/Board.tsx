"use client";

import useBoardStore from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// const Board: React.FC = () => {
//   const onDragEnd = (result: any) => {
//     console.log(result);
//   };

function Board() {
  const getboard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getboard();
  }, [getboard]);

  return <h1>Hello</h1>;
}

export default Board;
