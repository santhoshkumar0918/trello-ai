"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import useBoardStore from "@/store/BoardStore";
import { stat } from "fs";
import fetchSUggestions from "@/lib/fetchSuggestions";

function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionsFunc = async () => {
      const suggestions = await fetchSUggestions(board);
      setSuggestions(suggestions);
      setLoading(false);
    };

    fetchSuggestionsFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl shadow-sm">
        <div
          className="
         absolute
         top-0
         left-0
         w-full
         h-96         
         bg-gradient-to-br
         from-pink-400
         to-[#0055D1]
         rounded-md 
         filter
         blur-3xl
         opacity-50
         -z-50
       "
        />

        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          priority
        />
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0  md:space-x-5 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md w-full md:w-auto ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <input
              className="flex-1 outline-none p-2"
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              placeholder="Search"
            />

            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Santhosh kumar" round color="blue" size="40" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl bg-white italic w-fit max-w-3xl text-[#0055D1] mr-1">
          <UserCircleIcon
            className={`inline-block w-10 h-10 mr-1 text-[#0055D1] ${
              loading && "animate-spin"
            }
            {}`}
          />
          {suggestions && !loading
            ? suggestions
            : "Gpt is Summarsing your task day ......."}
        </p>
      </div>
    </header>
  );
}

export default Header;
