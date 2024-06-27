import React, { useState , useRef } from 'react';

import DashboardLayout from '../../Components/DashboardLayout';
import DoughuntChart from '../../Components/DoughuntChart';
import IssuesTable from '../../Components/IssuesTable';
import GaugeChart from '../../Components/GaugeChart';
import Chart from '../../Components/Chart';


function Home() {
  
    return (
      <>
      <DashboardLayout active ={'home'}>
        <main className=" flex bg-[#f7f7f9] z-0 w-fit">
            <section className='flex-1 min-h-[100vh] '>
                <main className='pl-[70px] pt-[70px] w-[100vw]'>
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
                                    {/* <ReactTooltip
                                        id="my-tooltip-1"
                                        place="bottom"
                                        content="Site weekness"
                                    /> */}
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
                                            {/* <ReactTooltip
                                                id="Robots-txt-Updates"
                                                place="bottom"
                                                content="Robots.txt Updatesp"
                                            /> */}
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
                </main>
            </section>
        </main>
      </DashboardLayout>
      </>
    )
  }
export default Home