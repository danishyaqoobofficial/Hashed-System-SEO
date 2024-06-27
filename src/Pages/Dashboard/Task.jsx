import DashboardLayout from '../../Components/DashboardLayout';
import AddTask from '../../Components/AddTask';



function Task() {


    return (
      <>
        <DashboardLayout active ={'task'}>
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
                                <p>+ Invite</p>
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
                </section>
            </main>
        </DashboardLayout>
      </>
    )
  }
  
  export default Task