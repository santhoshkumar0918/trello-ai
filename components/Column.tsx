import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

type Props = {
  id: TypedColumn;
  todos: todo[];
  index: number;
};

const todoColumnsText: { [key in TypedColumn]: string } = {
  todo: "Todo",
  inprogess: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* Render droppable todos in the columns */}
          <Droppable droppableId="id-1" type="card">
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
                    {todos.length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(provided) => (
                        // <div
                        //   ref={provided.innerRef}
                        //   {...provided.draggableProps}
                        //   {...provided.dragHandleProps}
                        //   className="p-2 mb-2 bg-white rounded shadow"
                        // >
                        <TodoCard
                          todo={todo}
                          id={id}
                          index={index}
                          innerRef={provided.innerRef}
                          draggbleProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                        // </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <div className="flex items-end justify-end p-2 ">
                  <button className="text-green-400 hover:text-green-600">
                    <PlusCircleIcon className="h-10 w-10" />
                  </button>
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
