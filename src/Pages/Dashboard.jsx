import { Link } from 'react-router-dom'
import logoImage from '../assets/Images/Logo.png'
import DashboardImage from '../assets/Images/DashboardImage.png'



function Dashboard() {
  

    return (
      <>
        <main className=" flex ">
            <aside className="h-[100vh] bg-[white] border-r sticky inset-0 border-[#E5E6EE] w-[70px] px-[11px] py-[9px] ">
                <Link to={'/'}>
                    <img src={logoImage} alt="" />
                </Link>
            </aside>
            <main className='flex-1 '>
                <nav className='flex items-center justify-between  bg-[#fff] sticky top-0 px-[22px] py-[11px] border-b border-[#E5E6EE] w-full '>
                    <span className='flex items-center justify-center cursor-pointer '>
                        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35" height="34" fill="white"/>
                            <line x1="10" y1="9.5" x2="25" y2="9.5" stroke="#2B3674"/>
                            <line x1="10" y1="16.5" x2="25" y2="16.5" stroke="#2B3674"/>
                            <line x1="10" y1="23.5" x2="25" y2="23.5" stroke="#2B3674"/>
                        </svg>
                    </span>
                    <div className='flex items-center gap-[26px] '>
                            <div className=' relative cursor-pointer '>
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
                                <span className='bg-white p-[2px] absolute -top-[5px] -right-[5px] '>
                                    <span className='bg-[#f93a3a] select-none rounded-[100px] h-[16px] w-[16px] flex items-center justify-center text-[10px] font-[600]  text-[#fff] '>
                                        3
                                    </span>
                                </span>
                            </div>
                            <div className='flex items-center gap-[7px] '>
                                <div className=' bg-cover bg-no-repeat bg-center h-[34px] w-[34px] rounded-[100px] ' style={{backgroundImage : `url(${DashboardImage})` }} ></div>
                                <p className='text-[#1E2549] text-[14px] font-[500] '>John Smith</p>
                            </div>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3902 14.8371L16.8402 10.2922C16.9433 10.1871 17 10.0468 17 9.89715C17 9.74753 16.9433 9.60721 16.8402 9.50209L16.5126 9.16739C16.2991 8.9496 15.9521 8.9496 15.739 9.16739L12.0021 12.9838L8.26105 9.16316C8.15804 9.05804 8.02072 9 7.8743 9C7.72772 9 7.5904 9.05804 7.48731 9.16316L7.15975 9.49785C7.05675 9.60305 7 9.74329 7 9.89292C7 10.0425 7.05675 10.1829 7.15975 10.288L11.6139 14.8371C11.7172 14.9425 11.8552 15.0003 12.0018 15C12.1491 15.0003 12.2869 14.9425 12.3902 14.8371Z" fill="#9C9AA7"/>
                                </svg>
                            </div>
                    </div>
                </nav>
                <section className='h-[1220px] max-w-[1440px] mx-auto overflow-auto'>
                    <header className=' px-[15px] md:px-[20px] py-[11px] flex items-center flex-wrap gap-[5px] '>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-[#0D99FF] rounded-[6px] text-white text-[14px] font-[400] transition-all cursor-default '>Overview</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Isues</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Crawled Pages</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Statics</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Compare Crawls</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Progress</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>JS Impact</div>
                    </header>
                </section>
            </main>
        </main>
      </>
    )
  }
  
  export default Dashboard