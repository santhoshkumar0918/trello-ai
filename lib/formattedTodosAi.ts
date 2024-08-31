// const formattedTodosAi = async (board: Board) => {
//   const todos = Array.from(board.columns.entries());

//  const flatArray = todos.reduce((Map, [key, value]) => {
//    Map[key] = value.todos;
//    return Map;
//  }, {} as { [key in TypedColumn]: Todo[] });

//  // Count the number of todos for each typed column
//  const flatArrayCounted = Object.entries(
//    flatArray.reduce((Map, [key, value]) => {
//      Map[key] = value.length;
//      return Map;
//    }, {} as { [key in TypedColumn]: number })
//  );

//   return flatArrayCounted;
// };

// export default formattedTodosAi;

// formattedTodosAi.ts

// No import statement needed
const formattedTodosAi = async (board: Board) => {
  const todos = Array.from(board.columns.entries());

  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = value.todos;
    return map;
  }, {} as { [key in TypedColumn]: Todo[] });

  const flatArrayCounted = Object.entries(flatArray).reduce(
    (map, [key, value]) => {
      map[key as TypedColumn] = value.length;
      return map;
    },
    {} as { [key in TypedColumn]: number }
  );

  return flatArrayCounted;
};

export default formattedTodosAi;
