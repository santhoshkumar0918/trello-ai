import Board from "@/components/Board";
import { getTodosGroupedByColumns } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
}

const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },

  getBoard: async () => {
    const board = await getTodosGroupedByColumns();
    set({ board });
  },

  setBoardState: (board) => set({ board }),
}));

export default useBoardStore;
