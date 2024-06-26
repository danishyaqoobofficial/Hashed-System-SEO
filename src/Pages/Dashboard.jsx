import { Link } from 'react-router-dom'
import React, { useState , useRef } from 'react';
import LogoImage from '../assets/Images/Logo.png'
import DashboardImage from '../assets/Images/DashboardImage.png'
import IssuesTable from '../Components/IssuesTable'

import Chart from '../Components/Chart'
import DoughuntChart from '../Components/DoughuntChart'

import GaugeChart from '../Components/GaugeChart';

import { Tooltip as ReactTooltip } from "react-tooltip";
import AddTask from '../Components/AddTask';



function Dashboard() {

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
        <main className=" flex bg-[#f7f7f9] z-0 w-fit">
            <aside className=" bg-white border-r fixed left-0 bottom-0 h-full border-[#E5E6EE] px-[11px] py-[9px] z-50 transition-all ">
                <div className='flex items-center gap-[26px] custom_transition '>
                    <Link to={'/'} className='flex items-center gap-[12px] cursor-pointer max-w-max ' >
                        <span className='h-[50px] w-[50px] flex items-center justify-center '>
                            <img className=' h-full w-full ' src = {LogoImage} alt="" />
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
                <div className='flex items-center gap-[12px] mt-[24px] transition-all cursor-pointer max-w-max '>
                    <span className='flex items-center justify-center h-[50px] w-[50px] p-[9px] rounded-[12px] bg-[#0D99FF]'>
                        <svg className='h-full w-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6876 2.78444H18.9066C19.6833 2.78444 20.3128 3.41401 20.3128 4.19068V21.6563C20.3128 22.4329 19.6833 23.0625 18.9066 23.0625H5.09375C4.31712 23.0625 3.6875 22.4329 3.6875 21.6563V4.19068C3.6875 3.41401 4.31712 2.78444 5.09375 2.78444H8.3125" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6875 4.6313H8.31226V0.937563H15.6875V4.6313Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.3125 12.7079L10.7608 15.1562L15.6875 10.2297" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <p className={`${hide} text-[#1E4470] text-[17px] font-[500] transition-all `}>Tasks</p>
                </div>
                <div className='flex items-center gap-[12px] mt-[24px] transition-all cursor-pointer max-w-max '>
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
            <section className='flex-1 min-h-[100vh] '>
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
                                    <div className=' bg-cover bg-no-repeat bg-center h-[34px] w-[34px] rounded-[100px] ' style={{backgroundImage : `url(${DashboardImage})` }} ></div>
                                    <p className='text-[#1E2549] text-[14px] font-[500] select-none '>John Smith</p>
                                </div>
                                <span>
                                    <i class={`fa-solid fa-angle-up text-[14px] text-[#9e9ca8] transition-all ${rotate} `}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <main className='pl-[70px] pt-[70px] w-[100vw]'>
                    <section className='' >
                        <div className="overflow-x-auto max-w-[90vw]">
                            <header className=' px-[12px] md:px-[20px] py-[11px] flex items-center gap-[5px] '>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-[#0D99FF] rounded-[6px] text-white text-[14px] font-[400] transition-all cursor-default '>Overview</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>Issues</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>Crawled Pages</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>Statics</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>Compare Crawls</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>Progress</div>
                                <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default whitespace-nowrap '>JS Impact</div>
                            </header>
                        </div>
                        <div className='flex gap-[32px] px-[12px] md:px-[20px] py-[32px] xl:flex-row flex-col '>
                            <div className='flex-1 '>
                                <div className='flex gap-[26px] md:flex-row flex-col '>
                                    <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] !pb-[0px] flex-1 '>
                                        <p className='text-[13px] text-[#000000] font-[300] '>Errors</p>
                                        <div className='flex items-center gap-[5px] '>
                                            <h3 className='text-[22px] text-[#FF4954] font-[500] '>110</h3>
                                            <span className='flex items-center gap-[4px] rounded-[30px] bg-[#FFEEEE] px-[8px] py-[2px] text-[#FF4954] text-[12px] font-[500] '>
                                                -2
                                                <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.75 8.5C8.75 8.91421 8.41421 9.25 8 9.25H1.25C0.835787 9.25 0.5 8.91421 0.5 8.5C0.5 8.08579 0.835787 7.75 1.25 7.75H7.25V1.75C7.25 1.33579 7.58579 1 8 1C8.41421 1 8.75 1.33579 8.75 1.75V8.5ZM1.53033 0.96967L8.53033 7.96967L7.46967 9.03033L0.46967 2.03033L1.53033 0.96967Z" fill="#FF4954"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-[14px] '>
                                            <div className='flex-1 w-full '>
                                                <Chart/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] !pb-[0px] flex-1 '>
                                        <p className='text-[13px] text-[#000000] font-[300] '>Warnings</p>
                                        <div className='flex items-center gap-[5px] '>
                                            <h3 className='text-[22px] text-[#FF4954] font-[500] '>2,765</h3>
                                            <span className='flex items-center gap-[4px] rounded-[30px] bg-[#FFEEEE] px-[8px] py-[2px] text-[#FF4954] text-[12px] font-[500] '>
                                                -2
                                                <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.75 8.5C8.75 8.91421 8.41421 9.25 8 9.25H1.25C0.835787 9.25 0.5 8.91421 0.5 8.5C0.5 8.08579 0.835787 7.75 1.25 7.75H7.25V1.75C7.25 1.33579 7.58579 1 8 1C8.41421 1 8.75 1.33579 8.75 1.75V8.5ZM1.53033 0.96967L8.53033 7.96967L7.46967 9.03033L0.46967 2.03033L1.53033 0.96967Z" fill="#FF4954"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-[14px] '>
                                            <div className='flex-1 w-full '>
                                                <Chart/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] !pb-[0px] flex-1 '>
                                        <p className='text-[13px] text-[#000000] font-[300] '>Critical</p>
                                        <div className='flex items-center gap-[5px] '>
                                            <h3 className='text-[22px] text-[#FF4954] font-[500] '>2,765</h3>
                                            <span className='flex items-center gap-[4px] rounded-[30px] bg-[#FFEEEE] px-[8px] py-[2px] text-[#FF4954] text-[12px] font-[500] '>
                                                -2
                                                <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.75 8.5C8.75 8.91421 8.41421 9.25 8 9.25H1.25C0.835787 9.25 0.5 8.91421 0.5 8.5C0.5 8.08579 0.835787 7.75 1.25 7.75H7.25V1.75C7.25 1.33579 7.58579 1 8 1C8.41421 1 8.75 1.33579 8.75 1.75V8.5ZM1.53033 0.96967L8.53033 7.96967L7.46967 9.03033L0.46967 2.03033L1.53033 0.96967Z" fill="#FF4954"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-[14px] '>
                                            <div className='flex-1 w-full '>
                                                <Chart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h2 className='text-[22px] text-[#000000] font-[500] mt-[16px] '>Thematic Reports</h2>

                                <div className=' mt-[16px] '>
                                    <div className='flex items-center gap-[26px] md:flex-row flex-col '>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full '>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>Crawlability</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div className='h-[70px] w-[70px] '>
                                                    <DoughuntChart/>
                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full'>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>HTTPS</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div className='h-[70px] w-[70px] '>
                                                    <DoughuntChart/>
                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full'>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>Site Performace</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div className='h-[70px] w-[70px] '>
                                                    <DoughuntChart/>
                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[26px] mt-[22px] md:flex-row flex-col  '>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full '>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>International SEO</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full'>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>Core Web Vitals</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                        <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full'>
                                            <div className='flex items-center justify-between '>
                                                <div>
                                                    <p className='text-[13px] text-[#000000] font-[300] '>Markup</p>
                                                    <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                            <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                                View Details  
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className='text-[22px] text-[#000000] font-[500] mt-[16px] '>Top Issues</h2>

                                <div className='overflow-x-auto max-w-[90vw] '>
                                    <div className='mt-[16px] w-[900px] md:flex-1 md:w-full rounded-[9px] border border-[#E5E6EE] pb-[20px] bg-white'>
                                        <div className='flex items-center py-[9px] px-[22px] bg-[#E5E6EE] border-b border-[#E5E6EE] gap-[8px]'>
                                            <div className='flex-[3] text-[#000000] text-[13px] font-[300]'>
                                                Type of issues
                                            </div>
                                            <div className='flex-1 text-[#000000] text-[13px] font-[300] text-center'>
                                                Number of issues
                                            </div>
                                            <div className='flex-1 text-[#000000] text-[13px] font-[300]'>
                                                
                                            </div>
                                            <div className='flex-1 flex items-center justify-center text-[#000000] text-[13px] font-[300] '>
                                                About the issue
                                            </div>
                                        </div>
                                        <IssuesTable typeOfIssue='Neither canonical URL or 301 redirect from HTTP homepage' numberOfIssue='1' aboutTheIssue='Why and how to fix it' />
                                        <IssuesTable typeOfIssue='slow page ( HTML) load speed' numberOfIssue='7' aboutTheIssue='Why and how to fix it' />
                                        <IssuesTable typeOfIssue='Missing h1' numberOfIssue='91' aboutTheIssue='Why and how to fix it' orange />
                                        <IssuesTable typeOfIssue='Incorrect pages found in sitemap' numberOfIssue='91' aboutTheIssue='Why and how to fix it' />
                                        <IssuesTable typeOfIssue='4xx errors' numberOfIssue='91' aboutTheIssue='Why and how to fix it' />
                                        <IssuesTable typeOfIssue='4xx errors' numberOfIssue='91' aboutTheIssue='Why and how to fix it' />
                                    </div>
                                </div>
                            </div>
                            <div className=' gap-[22px] flex-wrap media_Q '>
                                <div className='flex-1 xl:w-[270px] border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] '>
                                    <div className='flex items-center gap-[6px] '>
                                        <h2 className='text-[16px] text-[#000000] font-[500]'>Site Health</h2>
                                        <svg data-tooltip-id="my-tooltip-1" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_60_2926)">
                                            <path d="M9.99958 0C4.47746 0 0 4.47746 0 9.99958C0 15.5217 4.47746 20 9.99958 20C15.5217 20 20 15.5217 20 9.99958C20 4.47746 15.5217 0 9.99958 0ZM12.0813 15.498C11.5666 15.7012 11.1568 15.8552 10.8495 15.9619C10.5048 16.0745 10.1437 16.1286 9.78116 16.1219C9.15809 16.1219 8.67301 15.9695 8.32762 15.6656C7.98222 15.3617 7.81037 14.9765 7.81037 14.5084C7.81037 14.3263 7.82307 14.1401 7.84846 13.9505C7.87986 13.7345 7.92139 13.52 7.97291 13.3079L8.61714 11.0324C8.67386 10.814 8.72296 10.6066 8.7619 10.4135C8.80085 10.2188 8.81947 10.0402 8.81947 9.87767C8.81947 9.58815 8.75937 9.38497 8.64 9.27069C8.51894 9.1564 8.29122 9.10053 7.95175 9.10053C7.78582 9.10053 7.61481 9.12508 7.43958 9.17672C7.26603 9.23005 7.11534 9.27831 6.99175 9.32571L7.1619 8.62476C7.58349 8.45291 7.9873 8.30561 8.37249 8.1837C8.72472 8.06586 9.09315 8.00359 9.46455 7.99915C10.0834 7.99915 10.5608 8.14984 10.8969 8.44783C11.2313 8.74667 11.3998 9.13524 11.3998 9.6127C11.3998 9.71175 11.3879 9.88614 11.3651 10.135C11.3452 10.3676 11.3021 10.5976 11.2364 10.8216L10.5956 13.0904C10.5381 13.2956 10.4909 13.5035 10.4542 13.7134C10.4193 13.8881 10.3986 14.0654 10.3924 14.2434C10.3924 14.5448 10.4593 14.7505 10.5947 14.8597C10.7285 14.9689 10.963 15.0239 11.2948 15.0239C11.4514 15.0239 11.6267 14.996 11.8248 14.9418C12.0212 14.8876 12.1634 14.8394 12.2531 14.7979L12.0813 15.498ZM11.9678 6.2891C11.6764 6.56388 11.2889 6.71343 10.8885 6.70561C10.4686 6.70561 10.1062 6.56677 9.80487 6.2891C9.66155 6.16303 9.54706 6.00757 9.4692 5.8333C9.39134 5.65902 9.35193 5.47002 9.35365 5.27915C9.35365 4.8855 9.50603 4.54688 9.80487 4.26667C10.0969 3.9897 10.4861 3.83859 10.8885 3.84593C11.3092 3.84593 11.6698 3.98561 11.9678 4.26667C12.2667 4.54688 12.4165 4.8855 12.4165 5.27915C12.4165 5.6745 12.2667 6.01143 11.9678 6.2891Z" fill="#B4BED6"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_60_2926">
                                            <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <ReactTooltip
                                        id="my-tooltip-1"
                                        place="bottom"
                                        content="Site weekness"
                                    />
                                    <div className='h-[200px] w-full flex items-center justify-center '>
                                        <GaugeChart />
                                    </div>
                                    <div className='flex items-center justify-between '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Your site</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>77%</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-[5px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className=' h-[10px] w-[10px] '>
                                                <svg className=' h-full w-full ' viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.5 9L10.2631 0.75H0.73686L5.5 9Z" fill="#FF4954"/>
                                                </svg>
                                            </span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Top - 10% website</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>92%</p>
                                    </div>
                                    <div className='flex items-center justify-center '>
                                        <div className='mt-[18px] max-w-max cursor-default bg-[#DCF0FF] rounded-[6px] flex items-center justify-center px-[42px] py-[8px] text-[#0D99FF] text-[13px] font-[500] '>
                                            Details  
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full sm:flex-1 xl:w-[270px] border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] xl:mt-[22px] '>
                                    <h2 className='text-[16px] text-[#000000] font-[500]'>Crawled Pages</h2>
                                    <div className='h-[36px] flex items-center mt-[12px] '>
                                        <span className='h-full w-[5%] bg-[#00C58F] '></span>
                                        <span className='h-full w-[5%] bg-[#F94E50] '></span>
                                        <span className='h-full w-[85%] bg-[#FFB26D] '></span>
                                        <span className='h-full w-[5%] bg-[#0D99FF] '></span>
                                    </div>
                                    <div className='flex items-center justify-between mt-[12px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Health</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>1</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-[9px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Broken</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>3 +1</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-[9px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Broken</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>93 -1</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-[9px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Redirects</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>3</p>
                                    </div>
                                    <div className='flex items-center justify-between mt-[9px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Blocked</p>
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] '>0</p>
                                    </div>
                                </div>
                                <div className='w-full lg:flex-1 xl:w-[270px] border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] xl:mt-[22px] '>
                                    <div className='border-b border-[#E4E4E4] pb-[14px] '>
                                        <div className='flex items-center gap-[6px] '>
                                            <h2 className='text-[16px] text-[#000000] font-[500]'>Robots.txt Updates</h2>
                                            <svg data-tooltip-id="Robots-txt-Updates" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_60_2926)">
                                                <path d="M9.99958 0C4.47746 0 0 4.47746 0 9.99958C0 15.5217 4.47746 20 9.99958 20C15.5217 20 20 15.5217 20 9.99958C20 4.47746 15.5217 0 9.99958 0ZM12.0813 15.498C11.5666 15.7012 11.1568 15.8552 10.8495 15.9619C10.5048 16.0745 10.1437 16.1286 9.78116 16.1219C9.15809 16.1219 8.67301 15.9695 8.32762 15.6656C7.98222 15.3617 7.81037 14.9765 7.81037 14.5084C7.81037 14.3263 7.82307 14.1401 7.84846 13.9505C7.87986 13.7345 7.92139 13.52 7.97291 13.3079L8.61714 11.0324C8.67386 10.814 8.72296 10.6066 8.7619 10.4135C8.80085 10.2188 8.81947 10.0402 8.81947 9.87767C8.81947 9.58815 8.75937 9.38497 8.64 9.27069C8.51894 9.1564 8.29122 9.10053 7.95175 9.10053C7.78582 9.10053 7.61481 9.12508 7.43958 9.17672C7.26603 9.23005 7.11534 9.27831 6.99175 9.32571L7.1619 8.62476C7.58349 8.45291 7.9873 8.30561 8.37249 8.1837C8.72472 8.06586 9.09315 8.00359 9.46455 7.99915C10.0834 7.99915 10.5608 8.14984 10.8969 8.44783C11.2313 8.74667 11.3998 9.13524 11.3998 9.6127C11.3998 9.71175 11.3879 9.88614 11.3651 10.135C11.3452 10.3676 11.3021 10.5976 11.2364 10.8216L10.5956 13.0904C10.5381 13.2956 10.4909 13.5035 10.4542 13.7134C10.4193 13.8881 10.3986 14.0654 10.3924 14.2434C10.3924 14.5448 10.4593 14.7505 10.5947 14.8597C10.7285 14.9689 10.963 15.0239 11.2948 15.0239C11.4514 15.0239 11.6267 14.996 11.8248 14.9418C12.0212 14.8876 12.1634 14.8394 12.2531 14.7979L12.0813 15.498ZM11.9678 6.2891C11.6764 6.56388 11.2889 6.71343 10.8885 6.70561C10.4686 6.70561 10.1062 6.56677 9.80487 6.2891C9.66155 6.16303 9.54706 6.00757 9.4692 5.8333C9.39134 5.65902 9.35193 5.47002 9.35365 5.27915C9.35365 4.8855 9.50603 4.54688 9.80487 4.26667C10.0969 3.9897 10.4861 3.83859 10.8885 3.84593C11.3092 3.84593 11.6698 3.98561 11.9678 4.26667C12.2667 4.54688 12.4165 4.8855 12.4165 5.27915C12.4165 5.6745 12.2667 6.01143 11.9678 6.2891Z" fill="#B4BED6"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_60_2926">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                            <ReactTooltip
                                                id="Robots-txt-Updates"
                                                place="bottom"
                                                content="Robots.txt Updatesp"
                                            />
                                        </div>
                                        <p className='text-[13px] text-[#000000] font-[300] mt-[11px] '>since the last crawl</p>
                                    </div>
                                    <div className='border-b border-[#E4E4E4] py-[14px] '>
                                        <h2 className='text-[16px] text-[#000000] font-[500]'>File status</h2>
                                        <p className='text-[13px] text-[#000000] font-[300] mt-[11px] '>Available</p>
                                    </div>
                                    <p className='text-[12px] text-[#999999] font-[300] mt-[11px] '>No changes detected</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main> */}
                <main className='pl-[80px] pt-[70px] w-[100vw] h-[100%] '>
                    <section className='h-[100%] px-[15px] md:px-[20px] '>
                        <div className='flex items-center justify-between py-[32px] gap-[22px] sm:flex-row flex-col '>
                            <h2 className='text-[000000] text-[24px] font-[500] '>Tasks</h2>
                            <div className='flex gap-[8px] sm:w-[400px] md:w-[440px] lg:w-[480px] w-full SearchAndButton '>
                                <div className='border border-[#D8DBE6] flex items-center gap-[3px] pl-[19px] bg-white rounded-[8px] flex-1 SearchAndButton1 '>
                                    <span className='h-[20px] w-[20px] flex items-center justify-center '>
                                        <svg className='h-full w-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.7664" cy="11.7664" r="8.98856" stroke="#8E929E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M18.0181 18.4849L21.5421 21.9997" stroke="#8E929E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <input className='bg-transparent h-[41px] outline-none px-[6px] text-[#8E929E] text-[13px] w-full ' type="search" placeholder='Search  tasks ...' name="" id="" />
                                </div>
                                <div className='rounded-[7px] bg-[#0D99FF] flex items-center justify-center px-[22px] py-[9px] cursor-pointer select-none text-[14px] text-white SearchAndButton2 '>
                                    <p>+ Add Task</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[40px] '>
                            <div className='flex items-center gap-[25px] sm:gap-[32px] flex-wrap '>
                                <h2 className='text-[000000] text-[17px] sm:text-[18px] font-[500] '>In Progress</h2>
                                <p className='text-[000000] text-[13px] font-[300] '>4</p>
                                <p className='text-[13px] text-[#0D99FF] select-none cursor-pointer font-[300] '>+ Add Taks</p>
                            </div>
                        </div>
                        <div className='overflow-x-auto max-w-[90vw] mt-[30px] '>
                            <div className='mt-[16px] w-[900px] md:flex-1 md:w-full  pb-[20px]'>
                                <div className='flex items-center py-[9px] px-[22px] gap-[8px]'>
                                    <div className='flex-1 text-[#A6ABB9] text-[13px] font-[400]'>
                                        Name
                                    </div>
                                    <div className='flex-1 text-[#A6ABB9] text-[13px] font-[400] text-center '>
                                        Assignee
                                    </div>
                                    <div className='flex-1 text-[#A6ABB9] text-[13px] font-[400] text-center '>
                                        Due Date
                                    </div>
                                    <div className='flex-1 text-[#A6ABB9] text-[13px] font-[400] text-center'>
                                        Priority
                                    </div>
                                    <div className='flex-1 text-[#A6ABB9] text-[13px] font-[400]'>
                                        
                                    </div>
                                </div>
                                <AddTask  Name = 'Meta descriptions are added or not' Assignee = 'MA' Due_Date = 'Tomorrow' Priority = 'High' />
                                <AddTask  Name = 'Meta descriptions are added or not' Assignee = 'MA' Due_Date = 'Tomorrow' Priority = 'High' />
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        </main>
        <div className={` fixed bg-transparent !h-[100vh] inset-0 !z-50 ${profilePopup} `} onClick={CloseProfilePopup} >
            
        </div>
        <div className={` max-w-[140px] max-h-[220px] overflow-auto bg-[#fff] rounded-[11px] Shadow p-[5px] transition-all fixed top-[60px] right-[22px] !z-[100] ${profilePopup} `}>
            <div className='flex items-center justify-center gap-[13px] rounded-[9px] bg-transparent text-[#F10A0A] hover:bg-red-100 cursor-pointer px-[14px] py-[12px]  '>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.3555L14 17.3555C14.7956 17.3555 15.5587 17.0394 16.1213 16.4768C16.6839 15.9142 17 15.1511 17 14.3555L17 4.35547C17 3.55982 16.6839 2.79676 16.1213 2.23415C15.5587 1.67154 14.7956 1.35547 14 1.35547L13 1.35547M5 5.35547L1 9.35547M1 9.35547L5 13.3555M1 9.35547L13 9.35547" stroke="#F10A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                Log Out
            </div>
        </div>

        {/*  */}
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
  
  export default Dashboard