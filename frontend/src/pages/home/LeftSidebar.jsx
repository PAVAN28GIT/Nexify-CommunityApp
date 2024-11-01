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
    <div className="fixed h-screen top-0 left-0 w-24 flex flex-col bg-black shadow-2xl  shadow-[rgb(255,255,255,0.8)] py-10 space-y-10">
      <SiNamecheap className="text-white text-4xl ml-5" />

      <Divider />
      <SidebarIcon icon={<GoHomeFill size="24" />} text="Home" to="#" />
      <SidebarIcon icon={<IoNotifications size="24" />} text="Notifications" to="#" />
      <SidebarIcon icon={<BsSearch size="24"/>} text="Explore" to="#" />
      <SidebarIcon icon={<FiMessageCircle  size="24"/>} text="Messages" to="#" />
      <SidebarIcon icon={<FaPeopleGroup  size="24"/>} text="Community" to="#" />
  
      <Divider />
      <SidebarIcon icon={<MdAccountCircle  size="24"/>} text="Profile" to="#" />
    

    </div>
  );
};

const SidebarIcon = ({ icon, text, to }) => {
  return (
    <NavLink to={to} className="relative group flex items-center space-x-1 px-3">
      <div className="text-white p-3 rounded-full hover:scale-105 hover:bg-white hover:text-black transition duration-200">
        {icon}
      </div>
     
      {text && (
        // Tooltip for additional information
        <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
          {text}
        </span>
      )}
    </NavLink>
  );
};


const Divider = () => <hr className="w-full bg-gradient-to-r from-red-600 via-yellow-500 to-purple-600 my-4 " />;

export default LeftSidebar;
