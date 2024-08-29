import { databases } from "@/appwrite";
import Board from "@/components/Board";
import { getTodosGroupedByColumns } from "@/lib/getTodosGroupedByColumn";
import { title } from "process";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  todoUpdateInDb: (todo: todo, columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => any;
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
  getBoard: async () => {
    const board = await getTodosGroupedByColumns();
    set({ board });
  },

  setBoardState: (board) => set({ board }),
  todoUpdateInDb: async (todo, columnId) => {
    if (!todo.$id) {
      throw new Error("Todo item is missing a valid ID.");
    }
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
}));

export default useBoardStore;
