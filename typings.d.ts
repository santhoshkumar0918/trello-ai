interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = string;

// type TypedColumn = "todo" | "inprogess" | "done";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}

interface todo {
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
