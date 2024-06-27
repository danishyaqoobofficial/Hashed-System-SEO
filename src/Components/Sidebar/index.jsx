import React, { useState } from 'react'
import useSidebar from './helper'
import { Link } from 'react-router-dom'

const Sidebar = ({active}) => {
    const {routes} =useSidebar(active)
    console.log(routes,"routes")

    const [popup, setPopup] = useState('hidden');
    const [messageCounter, setMessageCounter] = useState('block');
    const [profilePopup, setProfilePopup] = useState('hidden');
    const [rotate, setRotate] = useState('rotate-180');
    const [border, setBorder] = useState('border-transparent');
    const [hide, setShow] = useState('hidden');

    const notificationPopup = ()=>  {
        if (popup === 'hidden') {
            setPopup('block');
        }else{
            setPopup('hidden');
        }
    }

    const ProfilePopup = () =>{
        if (profilePopup === 'hidden') {
            setProfilePopup('block');
            setRotate('rotate-270');
            setBorder('border-[#b5bfd8]');
        }else{
            setProfilePopup('hidden');
            setRotate('rotate-180');
        }
    }

    const CloseProfilePopup = () =>{
        setProfilePopup('hidden');
        setRotate('rotate-180');
        setBorder('border-transparent');
    }

    const CloseNotificationPopup = () =>{
        setPopup('hidden');
    }

    // 

    const hamburgerIcon = () => {
        setShow('block');
    }

    const closeHamburger = () => {
        setShow('hidden');
    }

    const mark_all_read = () => {
        setMessageCounter('hidden');
    }
  return (
    <div>
        <aside className=" bg-white border-r fixed left-0 bottom-0 h-full border-[#E5E6EE] px-[11px] py-[9px] z-50 transition-all ">
            <div className='flex items-center gap-[26px] custom_transition '>
                <Link to={'/'} className='flex items-center gap-[12px] cursor-pointer max-w-max ' >
                    <span className='h-[50px] w-[50px] flex items-center justify-center '>
                        <img className=' h-full w-full ' src = "/Assets/images/Logo.png" alt="" />
                    </span>
                    <div className={`${hide} transition-all `}>
                        <h2 className="text-[#1E4470] text-[18px] md:text-[21px] font-[600] Familjen Grotesk select-none whitespace-nowrap transition-all " >Hashed System</h2>
                        <p className='text-[#0D99FF] text-[9px] md:text-[10px] font-[500] select-none leading-3 whitespace-nowrap transition-all '>Empowering Digital Transformation</p>
                    </div>
                </Link>
                <span className={`flex items-center justify-center ${hide} transition-all cursor-pointer `} onClick={closeHamburger} >
                    <i class="text-[26px] fa-solid fa-xmark text-[#2B3674] transition-all "></i>
                </span>
            </div>
            {routes?.map((itm, index) => (
                <div 
                key={index} 
                className="flex items-center gap-[12px] mt-[24px] transition-all cursor-pointer">
                <span className="flex items-center justify-center h-[50px] w-[50px] p-[9px] rounded-[12px] bg-[#0D99FF]">
                            <img src={itm?.icon} alt={itm?.name} />
                </span>
                <p className={`${hide} text-[#1E4470] text-[17px] font-[500] transition-all`}>
                    {itm.name}
                </p>
                </div>
            ))}
            <div className='flex items-center gap-[12px] mt-[24px] transition-all cursor-pointer '>
                <span className='flex items-center justify-center h-[50px] w-[50px] p-[9px] rounded-[12px] bg-[#fff]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59102 15.2068C13.28 15.2068 16.433 15.7658 16.433 17.9988C16.433 20.2318 13.301 20.8068 9.59102 20.8068C5.90102 20.8068 2.74902 20.2528 2.74902 18.0188C2.74902 15.7848 5.88002 15.2068 9.59102 15.2068Z" stroke="#1E4470" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59108 12.0198C7.16908 12.0198 5.20508 10.0568 5.20508 7.6348C5.20508 5.2128 7.16908 3.2498 9.59108 3.2498C12.0121 3.2498 13.9761 5.2128 13.9761 7.6348C13.9851 10.0478 12.0351 12.0108 9.62208 12.0198H9.59108Z" stroke="#1E4470" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4824 10.8816C18.0834 10.6566 19.3164 9.2826 19.3194 7.6196C19.3194 5.9806 18.1244 4.6206 16.5574 4.3636" stroke="#1E4470" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5947 14.7322C20.1457 14.9632 21.2287 15.5072 21.2287 16.6272C21.2287 17.3982 20.7187 17.8982 19.8947 18.2112" stroke="#1E4470" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <p className={`${hide} text-[#1E4470] text-[17px] font-[500] transition-all `}>Profile</p>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar