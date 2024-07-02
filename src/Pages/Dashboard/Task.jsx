import DashboardLayout from '../../Components/DashboardLayout';
import AddTask from '../../Components/AddTask';




function Task() {



    return (
      <>
        <DashboardLayout active ={'task'}>
            <section className='pl-[80px] pt-[70px] w-[100vw] h-[100%] '>
                <div className='h-[100%] px-[15px] md:px-[20px] '>
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
                </div>
            </section>
        </DashboardLayout>

        {/* Add task popup */}

        {/* <div className=' absolute inset-0 h-[100vh] bg-[#000]/40 flex items-center justify-center z-50 '>
            <div className='bg-white rounded-[12px] max-w-[580px] w-full mx-auto py-[11px]'>
                <div className='flex items-center justify-between px-[18px] border-b border-[#E6E6E6] py-[3px] '>
                    <h3 className='text-[000000] text-[21px] font-[500] '>Create Task</h3>
                    <span className='flex items-center justify-center p-[8px] cursor-pointer rounded-[100px] h-[28px] w-[28px] bg-[#ECF5FB] '>
                        <svg className='h-full w-full ' viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5776 1L1 11M1.42239 1L12 11" stroke="black" stroke-width="2"/>
                        </svg>
                    </span>
                </div>
                <div className='px-[18px] w-full '>
                    <div className='w-full mt-[15px]  '>
                        <label className='text-[#807D8D] text-[13px] font-[400] ' htmlFor="Task Name">Task Name</label>
                        <input className='flex-1 w-full outline-none border border-[#E3E2E9] mt-[2px] text-[14px] px-[13px] py-[11px] rounded-[6px] text-[#1E2549] ' type="text" id='Task Name' placeholder='Enter your Task Name' />
                    </div>
                    <div className='w-full mt-[15px]  '>
                        <label className='text-[#807D8D] text-[13px] font-[400] ' htmlFor="message">Description</label>
                        <textarea className='flex-1 w-full outline-none border border-[#E3E2E9] resize-none h-[220px] mt-[2px] text-[14px] px-[13px] py-[11px] rounded-[6px] text-[#1E2549] ' type="text" id='message' placeholder='Enter your Description' />
                    </div>
                    <h4 className='text-[000000] text-[17px] font-[500] mt-[6px] '>Assign </h4>
                    <div className='w-full mt-[15px]  '>
                        <label className='text-[#807D8D] text-[13px] font-[400] ' htmlFor="search email">Search Team Members</label>
                        <div className='relative w-full group '>
                            <input className='flex-1 w-full outline-none border border-[#E3E2E9] mt-[2px] text-[14px] px-[13px] py-[11px] rounded-[6px] text-[#1E2549] ' type="text" id='search email' placeholder='Search or enter email...' />
                            <span className='flex items-center justify-center h-full right-[9px] absolute top-0 bottom-0 '>
                                <svg className='group-hover:rotate-180 transition-all ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3902 14.8371L16.8402 10.2922C16.9433 10.1871 17 10.0468 17 9.89715C17 9.74753 16.9433 9.60721 16.8402 9.50209L16.5126 9.16739C16.2991 8.9496 15.9521 8.9496 15.739 9.16739L12.0021 12.9838L8.26105 9.16316C8.15804 9.05804 8.02072 9 7.8743 9C7.72772 9 7.5904 9.05804 7.48731 9.16316L7.15975 9.49785C7.05675 9.60305 7 9.74329 7 9.89292C7 10.0425 7.05675 10.1829 7.15975 10.288L11.6139 14.8371C11.7172 14.9425 11.8552 15.0003 12.0018 15C12.1491 15.0003 12.2869 14.9425 12.3902 14.8371Z" fill="#807D8D"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-[12px] mt-[9px] '>
                        <div className='px-[8px] py-[4px] bg-[#ECF5FB] flex items-center gap-[5px] rounded-[5px] '>
                            <span className='flex items-center justify-center p-[9px] bg-[#0D99FF] rounded-[100px] h-[30px] w-[30px] text-[11px] font-[200] text-[#fff] uppercase '>
                                DA
                            </span>
                            <p className='text-[#000000] font-[300] text-[12px] '>Danish Ali</p>
                            <span className='flex items-center justify-center rounded-[100px] bg-[#AEC1D8] h-[17px] w-[17px] cursor-pointer '>
                                <svg width="8" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.05174 0.666504L1 7.33317M1.28159 0.666504L8.33333 7.33317" stroke="white" stroke-width="1.33333"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center w-full gap-[22px] mt-[15px] '>
                        <div className='w-full flex-1'>
                            <label className='text-[#807D8D] text-[13px] font-[400] ' htmlFor="Due Date">Due Date</label>
                            <div className='relative w-full group '>
                                <input className='flex-1 w-full outline-none border border-[#E3E2E9] mt-[2px] text-[14px] px-[13px] py-[11px] rounded-[6px] text-[#1E2549] ' type="text" id='Due Date' placeholder='Select Date' />
                                <span className='flex items-center justify-center h-full right-[9px] absolute top-0 bottom-0 '>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.6665 1.6665V4.1665" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.3335 1.6665V4.1665" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.9165 7.5752H17.0832" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.5 7.08317V14.1665C17.5 16.6665 16.25 18.3332 13.3333 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.0791 11.4167H13.0866" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.0791 13.9167H13.0866" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.99607 11.4167H10.0036" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.99607 13.9167H10.0036" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.91209 11.4167H6.91957" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.91209 13.9167H6.91957" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='w-full flex-1'>
                            <label className='text-[#807D8D] text-[13px] font-[400] ' htmlFor="Priority">Priority</label>
                            <div className='relative w-full group '>
                                <input className='flex-1 w-full outline-none border border-[#E3E2E9] mt-[2px] text-[14px] px-[13px] py-[11px] rounded-[6px] text-[#1E2549] ' type="text" id='Priority' placeholder='Select Priority' />
                                <span className='flex items-center justify-center h-full right-[12px] absolute top-0 bottom-0 '>
                                    <svg width="14" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="11.9087" width="4.36359" height="5.81817" rx="2.1818" fill="#EE726A"/>
                                        <rect x="5.81836" y="6.09082" width="4.36359" height="11.6363" rx="2.1818" fill="#EE726A"/>
                                        <rect x="11.6367" y="0.272949" width="4.36359" height="17.4545" rx="2.1818" fill="#EE726A"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-[22px] '>
                        <div className='flex items-center gap-[4px] cursor-pointer '>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3302 12.1499L9.86018 14.6199C8.49018 15.9899 8.49018 18.1999 9.86018 19.5699C11.2302 20.9399 13.4402 20.9399 14.8102 19.5699L18.7002 15.6799C21.4302 12.9499 21.4302 8.50992 18.7002 5.77992C15.9702 3.04992 11.5302 3.04992 8.80018 5.77992L4.56018 10.0199C2.22018 12.3599 2.22018 16.1599 4.56018 18.5099" stroke="#0D99FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='text-[#0D99FF] font-[300] text-[13px] '>Attach File</p>
                        </div>
                        <div className='bg-[#0D99FF] rounded-[9px] flex items-center justify-center text-white px-[22px] py-[10px] text-[15px] cursor-pointer font-[400] '>
                            Create Task
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </>
    )
  }
  
  export default Task