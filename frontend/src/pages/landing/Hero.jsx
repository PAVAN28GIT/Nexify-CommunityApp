import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Hero() {
  return (
      <div className="p-20 mx-20 py-32 space-y-10">
        <h1 className="text-7xl text-zinc-50 text-center font-bold -mb-8 ">
          Amplify Your Passion and
        </h1>
        <div className="flex justify-center items-center space-x-2 font-extrabold">
          <h1 className="text-5xl font-normal text-zinc-200">Knowledge with</h1>
          <div className="relative inline-block">
            <span className="block">
              <h1 className="text-6xl text-white font-bold">Nexify</h1>
              <img
                src="/images/curve.png"
                alt="underline image"
                className="absolute top-full left-0 w-full h-auto"
              />
            </span>
          </div>
        </div>

        <h2 className="text-xl font-SpaceGrotesk text-zinc-200 text-center">
          Connect with others through interest-based communities to give and
          receive support!
        </h2>

        <div className="flex text-white items-center justify-center">
          <Link to="/sign-in">
            <button className="transition group flex items-center justify-center bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] rounded-sm hover:shadow-2xl hover:shadow-purple-500">
              <div className="px-10 py-2 items-center justify-center rounded-sm text-lg font-SpaceGrotesk bg-zinc-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-b group-hover:from-gray-700 group-hover:to-gray-900">
                Get Started
              </div>
            </button>
          </Link>
        </div>
      </div>
  );
}

export default Hero;
