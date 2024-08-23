interface Board {
  columns: Map<TypeColumn, Column>;
}

type TypeColumn = "todo" | "inprogess" | "done";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}

interface todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypeColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
