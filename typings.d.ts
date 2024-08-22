interface Board {
    columns: Map<TypeColumn, Column>;
}

Type TypeColumn = "todo" | "inprogess" | "done";

interface Column {
    id: TypedColumn;
    todos:todo
}