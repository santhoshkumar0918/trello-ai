import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

type props = {
    id: TypedColumn;
    todos: Todo[];
    index: number;
}


function Column({id, todos, index} : props) {
  return (
      <Draggable draggableId={id} index={index}>
          {(provided) => {
              <div
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}>
                  {/* {render droppable todos in the columns} */}
                  <Droppable droppableId={index.toString} type="column" >
                      {(provided, snapshot) => {
                          <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className={`p-2 rounded-2xl shadow-sm ${
                                  snapshot.isDraggingOver ? 'bg-green-200' : "bg-white/50"
                              }`}
                          >
                              
                          </div>
                    }}

          </Droppable>
          </div> 
          }} 
      </Draggable>
}

export default Column