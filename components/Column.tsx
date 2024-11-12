import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./todoCard";
import { todo } from "node:test";
import useBoardStore from "@/store/BoardStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const todoColumnsText: { [key in TypedColumn]: string } = {
  todo: "Todo",
  inprogess: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  const [searchString] = useBoardStore((state) => [state.searchString]);
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* Render droppable todos in the columns */}
          <Droppable droppableId="id" type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {todoColumnsText[id]}
                  <span className="text-gray-700 rounded-full px-2 py-1 text-sm font-normal bg-gray-300">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo?.title
                            ?.toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    )
                      return (
                        <Draggable
                          key={todo.$id} // Ensure each Draggable has a unique key
                          draggableId={todo.$id}
                          index={index} // Ensure index is unique and consecutive
                        >
                          {(provided) => (
                            <TodoCard
                              todo={todo}
                              id={id}
                              index={index}
                              innerRef={provided.innerRef}
                              draggbleProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                            />
                          )}
                        </Draggable>
                      );
                  })}

                  {provided.placeholder}
                  <div className="flex items-end justify-end p-2 ">
                    <button className="text-green-400 hover:text-green-600">
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
                </div>

                {/* {add image url later} */}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
