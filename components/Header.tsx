// "use client";

// import React from "react";
// import Image from "next/image";
// import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
// import Avatar from "react-avatar";

// function Header() {
//   return (
//     <header>
//       <div className="flex items-center  p-5 bg-gray-500/10 rounded-b-2xl shadow-sm">
//         <Image
//           src="https://links.papareact.com/c2cdd5"
//           alt="Trello logo"
//           width={300}
//           height={100}
//           className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
//         />
//         <div className="flex items-center space-x-5 justify-end w-full">
//           {/* search box */}
//           <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
//             <MagnifyingGlassIcon className="h-6 w-6  text-gray-500"></MagnifyingGlassIcon>
//             <input
//               className="flex-1 outline-none p-2"
//               type="text"
//               placeholder="Search"
//             />

//             <button type="submit" hidden>
//               Search
//             </button>
//           </form>
//           <Avatar name="Santhosh kumar" round color="blue" size="40" />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

"use client";

import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl shadow-sm">
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md w-full md:w-auto ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <input
              className="flex-1 outline-none p-2"
              type="text"
              placeholder="Search"
            />

            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Santhosh kumar" round color="blue" size="40" />
        </div>
      </div>
    </header>
  );
}

export default Header;