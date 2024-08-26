// "use client";

// import useBoardStore from "@/store/BoardStore";
// import { INTERNAL_HEADERS } from "next/dist/shared/lib/constants";
// import React, { useEffect } from "react";
// import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
// import Column from "./Column";

// // const Board: React.FC = () => {
// //   const onDragEnd = (result: any) => {
// //     console.log(result);
// //   };

// function Board() {
//   const [board, getboard] = useBoardStore((state) => [
//     state.board,
//     state.getBoard,
//   ]);

//   useEffect(() => {
//     getboard();
//   }, [getboard]);

//   const handleOnDragEnd = (result: DropResult) => {};

//   console.log(Board);

//   return (
//     <DragDropContext onDragEnd={(e) => handleOnDragEnd}>
//       <Droppable droppableId="board1" direction="horizontal" type="column">
//         {(provided) => (
//           <div
//             className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {Array.from(board.columns.entries()).map(([id, column], index) => {
//               <Column key={id} id={id} todos={column.todos} index={index} />;
//             })}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default Board;

"use client";

import useBoardStore from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

function Board() {
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  // const handleOnDragEnd = (result: DropResult) => {
  //   const { destination, source, type } = result;
  //   // to check if user drag the card outsied of the board
  //   if (!destination) return;
  //   // handle the column
  //   if (type === "column") {
  //     const entries = Array.from(board.columns.entries());
  //     const [removed] = entries.splice(source.index, 1);
  //     entries.splice(destination.index, 0, removed);
  //     const reArrangedColumns = new Map(entries);
  //   setBoardState({
  //     ...board,
  //     columns: reArrangedColumns,
  //   });
  // }
  // };
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    // Return early if the user drags the item outside of any droppable area
    if (!destination) return;

    // Handle column dragging
    if (type === "column") {
      // Get the current columns as an array
      const entries = Array.from(board.columns.entries());

      // Remove the dragged column from its source position
      const [removed] = entries.splice(source.index, 1);

      // Insert the dragged column into its new destination position
      entries.splice(destination.index, 0, removed);

      // Convert the array back to a Map and set the new board state
      const reArrangedColumns = new Map(entries);

      // Use a functional update to avoid creating unnecessary re-renders
      setBoardState({
        ...board,
        columns: reArrangedColumns,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="id-1" direction="horizontal" type="column">
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
