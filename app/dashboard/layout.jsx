import React from 'react'
import Sidebar from "./_components/Sidebar"
import Header from './_components/Header'

const DashboardLayout = ({ children }) => {
  return (
    <div className=' relative flex flex-col md:flex-row  md:h-screen  '>
       <div className="md:hidden w-full bg-white fixed z-20 ">
          <Header />
        </div>
      <div className='md:w-[20%]  p-2 shadow-md md:my-2 my-4'><Sidebar/></div>
      <div className='flex-1 w-full '>
         {/* ✅ Wrap Header inside a div with `hidden md:block` */}
         <div className="hidden md:block">
          <Header />
        </div>
        <div>
          {children}
        </div>
        </div>
    </div>
  )
}

export default DashboardLayout