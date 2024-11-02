import React from 'react'
import { Outlet } from 'react-router-dom'

import LeftSideBar from './LeftSidebar'
import RightSideBar from './RightSidebar'


function HomePage() {
  return (
      <div className="flex w-full">

        <div className="fixed left-0 top-0">
          <LeftSideBar />
        </div>
        <div className="flex-grow ml-[22rem] mr-[22rem]">
          <Outlet />
        </div>

        <div className="fixed right-0 top-0">
          <RightSideBar />
        </div>
   
    </div>
  )
}

export default HomePage