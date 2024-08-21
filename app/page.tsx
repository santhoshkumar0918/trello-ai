import Board from "@/components/Board";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      {/* {Header} */}
      {/* {Board} */}
      <Board />
      <h1>Trello Ai clone 2.0</h1>
    </main>
  );
}
