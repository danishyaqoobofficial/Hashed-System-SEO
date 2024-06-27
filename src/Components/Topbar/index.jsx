
import React, { useState } from 'react'



const Topbar = () => {

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
    <>
        <nav className='flex items-center justify-between bg-[#fff] fixed top-0 px-[16px] sm:px-[22px] py-[11px] border-b border-[#E5E6EE] w-full ' >
        <span className='flex items-center justify-center cursor-pointer ml-[60px] transition-all ' onClick={hamburgerIcon} >
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="34" fill="white"/>
                <line x1="10" y1="9.5" x2="25" y2="9.5" stroke="#2B3674"/>
                <line x1="10" y1="16.5" x2="25" y2="16.5" stroke="#2B3674"/>
                <line x1="10" y1="23.5" x2="25" y2="23.5" stroke="#2B3674"/>
            </svg>
        </span>
        <div className='flex items-center gap-[16px] sm:gap-[22px] '>
            <div className=' relative '>
                <div className=' relative cursor-default ' onClick={notificationPopup} >
                    <svg width="26" height="26" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_47_8013)">
                        <path d="M25.7193 23.5533L23.9993 21.8333V15.1667C23.9993 11.0733 21.8127 7.64666 17.9993 6.73999V5.83333C17.9993 4.72666 17.106 3.83333 15.9993 3.83333C14.8927 3.83333 13.9993 4.72666 13.9993 5.83333V6.73999C10.1727 7.64666 7.99934 11.06 7.99934 15.1667V21.8333L6.27934 23.5533C5.43934 24.3933 6.026 25.8333 7.21267 25.8333H24.7727C25.9727 25.8333 26.5593 24.3933 25.7193 23.5533ZM21.3327 23.1667H10.666V15.1667C10.666 11.86 12.6793 9.16666 15.9993 9.16666C19.3193 9.16666 21.3327 11.86 21.3327 15.1667V23.1667ZM15.9993 29.8333C17.466 29.8333 18.666 28.6333 18.666 27.1667H13.3327C13.3327 28.6333 14.5193 29.8333 15.9993 29.8333Z" fill="#A3AED0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_47_8013">
                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span className={`bg-white p-[2px] absolute -top-[5px] -right-[5px] ${messageCounter} `}>
                        <span className='bg-[#f93a3a] select-none rounded-[100px] h-[16px] w-[16px] flex items-center justify-center text-[10px] font-[600]  text-[#fff] '>
                            3
                        </span>
                    </span>
                </div>
            </div>
            <div className=' relative '>
                <div className={`flex items-center gap-[10px] cursor-default border border-transparent hover:border-[#b5bfd9] transition-all rounded-[30px] p-[5px] ${border} `} onClick={ProfilePopup} >
                    <div className='flex items-center gap-[7px] '>
                        <div className=' bg-cover bg-no-repeat bg-center h-[34px] w-[34px] rounded-[100px] ' style={{backgroundImage : `url('/Assets/Images/DashboardImage.png')` }} ></div>
                        <p className='text-[#1E2549] text-[14px] font-[500] select-none '>John Smith</p>
                    </div>
                    <span>
                        <i class={`fa-solid fa-angle-up text-[14px] text-[#9e9ca8] transition-all ${rotate} `}></i>
                    </span>
                </div>
            </div>
        </div>
    </nav>
    {/*  */}

    <div className={` fixed bg-transparent !h-[100vh] inset-0 !z-50 ${profilePopup} `} onClick={CloseProfilePopup} >
            
    </div>
    <div className={` max-w-[140px] max-h-[220px] overflow-auto bg-[#fff] rounded-[11px] Shadow p-[5px] transition-all fixed top-[60px] right-[22px] !z-[100] ${profilePopup} `}>
        <div className='flex items-center justify-center gap-[13px] rounded-[9px] bg-transparent text-[#F10A0A] hover:bg-red-100 cursor-pointer px-[14px] py-[12px]  '>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.3555L14 17.3555C14.7956 17.3555 15.5587 17.0394 16.1213 16.4768C16.6839 15.9142 17 15.1511 17 14.3555L17 4.35547C17 3.55982 16.6839 2.79676 16.1213 2.23415C15.5587 1.67154 14.7956 1.35547 14 1.35547L13 1.35547M5 5.35547L1 9.35547M1 9.35547L5 13.3555M1 9.35547L13 9.35547" stroke="#F10A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Log Out
        </div>
    </div>


    <div className={` fixed bg-transparent !h-[100vh] inset-0 !z-50 ${popup} `} onClick={CloseNotificationPopup} >

    </div>
    <div className={`bg-[#fff] w-[280px] sm:w-[330px] rounded-[11px] top-[55px] right-[8px] sm:right-[214px] Shadow overflow-hidden !z-[100] fixed ${popup} `} >
        <div className='flex items-center justify-between px-[18px] sm:px-[22px] py-[11px] border-b border-[#E4E4E4] '>
            <h2 className='text-[16px] font-[500] text-[#000000c4] '>Notifications</h2>
            <p className='text-[12px] text-slate-500 cursor-pointer ' onClick={mark_all_read} >Mark all as read</p>
        </div>
        <div className='max-h-[320px] overflow-auto'>
            <div className='border-b border-[#E4E4E4] px-[18px] sm:px-[22px] py-[11px] flex items-center gap-[9px] '>
                <i class="fa-regular fa-message text-[18px] text-[#0D99FF]"></i>
                <p className='text-[13px] text-[#000000] font-[300] line-clamp-2 '>You a new message notification. Open it and start your working.</p>
            </div>
            <div className='border-b border-[#E4E4E4] px-[18px] sm:px-[22px] py-[11px] flex items-center gap-[9px] '>
                <i class="fa-regular fa-message text-[18px] text-[#0D99FF]"></i>
                <p className='text-[13px] text-[#000000] font-[300] line-clamp-2 '>You a new message notification. Open it and start your working.</p>
            </div>
            <div className='border-b border-[#E4E4E4] px-[18px] sm:px-[22px] py-[11px] flex items-center gap-[9px] '>
                <i class="fa-regular fa-message text-[18px] text-[#0D99FF]"></i>
                <p className='text-[13px] text-[#000000] font-[300] line-clamp-2 '>You a new message notification. Open it and start your working.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topbar