import { Link } from 'react-router-dom'
import logoImage from '../assets/Images/Logo.png'
import DashboardImage from '../assets/Images/DashboardImage.png'
import IssuesTable from '../Components/IssuesTable'
import Chart from '../Components/Chart'
// import Doughnut from 'react-chartjs-2'
import DoughuntChart from '../Components/DoughuntChart'
// import Doughnut from '../Components/Doughnut'



function Dashboard() {
  

    return (
      <>
        <main className=" flex bg-[#f7f7f9] ">
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
                <section className=' max-w-[1440px] mx-auto overflow-auto '>
                    <header className=' px-[15px] md:px-[20px] py-[11px] flex items-center flex-wrap gap-[5px] '>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-[#0D99FF] rounded-[6px] text-white text-[14px] font-[400] transition-all cursor-default '>Overview</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Isues</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Crawled Pages</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Statics</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Compare Crawls</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>Progress</div>
                        <div className='flex items-center justify-center px-[22px] py-[10px] bg-transparent hover:bg-[#0D99FF] rounded-[6px] hover:text-white text-[#000000] text-[14px] font-[400] transition-all cursor-default '>JS Impact</div>
                    </header>
                    <section className='flex gap-[26px] px-[15px] md:px-[20px] py-[32px] flex-wrap '>
                        <div className='flex-1 '>
                            <div className='flex gap-[26px] flex-wrap '>
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] pb-[0px] w-[330px] '>
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
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] pb-[0px] w-[330px] '>
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
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] pb-[0px] w-[330px] '>
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
                            </div>
                            {/*  */}
                            
                            <h2 className='text-[22px] text-[#000000] font-[500] mt-[16px] '>Thematic Reports</h2>

                            {/*  */}
                            <div className=' flex items-center gap-[26px] mt-[16px] flex-wrap '>
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
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
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
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
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
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
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
                                    <div className='flex items-center justify-between '>
                                        <div>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Crawlability</p>
                                            <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                        View Details  
                                    </div>
                                </div>
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
                                    <div className='flex items-center justify-between '>
                                        <div>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Crawlability</p>
                                            <h3 className='text-[22px] text-[#0D99FF] font-[500] '>90%</h3>  
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
                                        View Details  
                                    </div>
                                </div>
                                <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] w-[330px] '>
                                    <div className='flex items-center justify-between '>
                                        <div>
                                            <p className='text-[13px] text-[#000000] font-[300] '>Crawlability</p>
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
                            {/*  */}

                            <h2 className='text-[22px] text-[#000000] font-[500] mt-[16px] '>Top Issues</h2>

                            {/*  */}
                                <div className='mt-[16px] flex-1 w-full rounded-[9px] overflow-auto border border-[#E5E6EE] pb-[20px] bg-white '>
                                    <div className='flex items-center py-[9px] px-[22px] bg-[#E5E6EE] border-b border-[#E5E6EE] '>
                                        <div className='flex-[3] text-[#000000] text-[13px] font-[300] '>
                                            Type of issues
                                        </div>
                                        <div className='flex-1 text-[#000000] text-[13px] font-[300] '>
                                            Number of issues
                                        </div>
                                        <div className='flex-1 text-[#000000] text-[13px] font-[300] '>
                                            About the issue
                                        </div>
                                    </div>
                                    <IssuesTable typeOfIssue = 'Neither canonical URL or 301 redirect from HTTP homepage' numberOfIssue = '1' aboutTheIssue = 'Why and how to fix it' />
                                    <IssuesTable typeOfIssue = 'slow page ( HTML) load speed' numberOfIssue = '7' aboutTheIssue = 'Why and how to fix it' />
                                    <IssuesTable typeOfIssue = 'Missing h1' numberOfIssue = '91' aboutTheIssue = 'Why and how to fix it' orange />
                                    <IssuesTable typeOfIssue = 'Incorrect pages found in sitemap' numberOfIssue = '91' aboutTheIssue = 'Why and how to fix it' />
                                    <IssuesTable typeOfIssue = '4xx errors' numberOfIssue = '91' aboutTheIssue = 'Why and how to fix it' />
                                    <IssuesTable typeOfIssue = '4xx errors' numberOfIssue = '91' aboutTheIssue = 'Why and how to fix it' />
                                </div>
                        </div>
                        <div className=' '>
                            <div className='w-[270px] border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] '>
                                <div className='flex items-center gap-[6px] '>
                                    <h2 className='text-[16px] text-[#000000] font-[500]'>Site Health</h2>
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <div className='h-[90px] '>

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
                            <div className='w-[270px] border border-[#E5E6EE] rounded-[6px] bg-white p-[18px] mt-[22px] '>
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
                        </div>
                    </section>
                </section>
            </main>
        </main>
      </>
    )
  }
  
  export default Dashboard