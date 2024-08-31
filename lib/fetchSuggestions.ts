import { Borel } from "next/font/google";
import formattedTodosAi from "./formattedTodosAi";

const fetchSUggestions = async (board: Board) => {
  const todos = formattedTodosAi(board);
  console.log("FORMATTED TODO >>>>", todos);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos: todos }),
  });
  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};

export default fetchSUggestions;
