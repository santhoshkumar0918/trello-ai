// interface Board {
//   columns: Map<TypedColumn, Column>;
// }

// // type TypedColumn = string;

// type TypedColumn = "todo" | "inprogess" | "done";

// interface Column {
//   id: TypeColumn;
//   todos: Todo[];
// }

// interface todo {
//   $id: string;
//   $createdAt: string;
//   title: string;
//   status: TypedColumn;
//   image?: Image;
// }

// interface Image {
//   bucketId: string;
//   fileId: string;
// }

// typings.d.ts

// Declare global interfaces and types
declare global {
  interface Board {
    columns: Map<TypedColumn, Column>;
  }

  type TypedColumn = "todo" | "inprogess" | "done";

  interface Column {
    id: TypedColumn;
    todos: Todo[];
  }

  interface Todo {
    // Ensure 'Todo' is capitalized to match the usage in your code
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image;
  }

  interface Image {
    bucketId: string;
    fileId: string;
  }
}

// This export statement is necessary if you need to treat the file as a module
export {};
