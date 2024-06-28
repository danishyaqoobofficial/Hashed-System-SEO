import Chart from '../../../Components/Chart';
import React from 'react'

const LineChartWidget = () => {
  return (
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
  )
}

export default LineChartWidget