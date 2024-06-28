import React, { useState } from 'react'
import useSidebar from './helper.jsx'
import { Link } from 'react-router-dom'

const Sidebar = ({active, expandSidebar, setExpandSidebar}) => {

    const {routes} =useSidebar(active)

  return (
    <div>
        <aside className=" bg-white border-r fixed left-0 bottom-0 h-full border-[#E5E6EE] px-[11px] py-[9px] z-50 transition-all ">
            <div className='flex items-center gap-[26px] custom_transition mb-[20px] '>
                <Link to={'/dashboard'} className='flex items-center gap-[12px] cursor-pointer max-w-max ' >
                    <span className='h-[50px] w-[50px] flex items-center justify-center '>
                        <img className=' h-full w-full ' src = "/Assets/Images/Logo.png" alt="" />
                    </span>
                    <div className={`transition-all ${expandSidebar ? "block" : "hidden"}`}>
                        <h2 className="text-[#1E4470] text-[18px] md:text-[21px] font-[600] Familjen Grotesk select-none whitespace-nowrap transition-all " >Hashed System</h2>
                        <p className='text-[#0D99FF] text-[9px] md:text-[10px] font-[500] select-none leading-3 whitespace-nowrap transition-all '>Empowering Digital Transformation</p>
                    </div>
                </Link>
                <span className={`flex items-center justify-center transition-all cursor-pointer ${expandSidebar ? "block" : "hidden"}`} onClick={()=> setExpandSidebar(!expandSidebar)}>
                    <i class="text-[26px] fa-solid fa-xmark text-[#2B3674] transition-all "></i>
                </span>
            </div>
            {routes?.map((itm, index) => (
                <Link to={itm?.link}
                    key={index} 
                    className="flex items-center gap-[12px] mt-[12px] transition-all cursor-pointer">
                    <span className={`flex items-center justify-center h-[48px] w-[50px] p-[12px] rounded-[9px] transition-all hover:bg-[#0D99FF] group ${itm.isActive? 'bg-[#0D99FF]' : ''} `}>
                        {itm?.icon}
                    </span>
                    <p className={`text-[#1E4470] text-[17px] font-[500] transition-all`}>
                        {itm.name}
                    </p>
                </Link>
            ))}
        </aside>
    </div>
  )
}

export default Sidebar