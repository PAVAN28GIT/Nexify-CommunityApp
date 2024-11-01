import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav
      className="w-full flex justify-between items-center px-5 md:px-20 text-white z-[50] bg-transparent py-5"
    >
      <h1 className="text-5xl items-center font-SpaceGrotesk text-transparent bg-clip-text text-zinc-200 font-semibold">
        Nexify
      </h1>
     

      <Link to="/sign-in">
        <button className="transition group flex items-center justify-center bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] rounded-sm hover:shadow-2xl hover:shadow-purple-500">
          <div className="px-6 py-[0.2rem] items-center justify-center rounded-sm text-lg font-SpaceGrotesk bg-zinc-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-b group-hover:from-gray-700 group-hover:to-gray-900">
            Sign in
          </div>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
