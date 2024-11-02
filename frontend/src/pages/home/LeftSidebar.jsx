import React from "react";
import { SiNamecheap } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const LeftSidebar = () => {
  return (
    <div className="fixed h-screen top-0 left-0 w-1/4 flex flex-col bg-[url('/images/image-2.png')] shadow-2xl border-r border-gray-700 p-20 ">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="z-10 ">
        <NavLink to="/user/:userId" className="flex items-center px-5">
          <SiNamecheap className="text-4xl text-white " />
        </NavLink>

        <div className="space-y-3 my-12">
          <SidebarIcon
            icon={<GoHomeFill size="24" />}
            text="Home"
            to="/user/:userId"
          />
          <SidebarIcon
            icon={<IoNotifications size="24" />}
            text="Notifications"
            to="#"
          />
          <SidebarIcon icon={<BsSearch size="24" />} text="Explore" to="#" />
          <SidebarIcon
            icon={<FiMessageCircle size="24" />}
            text="Messages"
            to="#"
          />
          <SidebarIcon
            icon={<FaPeopleGroup size="24" />}
            text="Community"
            to="/user/:userId/communities"
          />
          <SidebarIcon
            icon={<MdAccountCircle size="24" />}
            text="Profile"
            to="/user/:userId/:profileId"
          />
        </div>

        <NavLink to="#" >
          <button className="bg-[#3DC2EC] w-full py-2 rounded-3xl hover:scale-105 text-black font-SourceCodePro text-lg font-bold hover:">
            Post
          </button>
        </NavLink>
      </div>
    </div>

    
  );
};

export default LeftSidebar;

const SidebarIcon = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className=" group flex space-x-1 rounded-3xl px-5 items-center hover:bg-black hover:scale-105 hover:transition hover:ease-in-out duration-500 "
    >
      <div className="text-gray-300 py-3 group-hover:text-white">{icon}</div>
      <div className=" items-center text-gray-300 font-semibold font-SpaceGrotesk text-lg px-3 group-hover:text-white">
        {text}
      </div>
    </NavLink>
  );
};
