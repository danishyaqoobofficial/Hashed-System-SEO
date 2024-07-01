import Chart from '../../../Components/Chart';
import React from 'react'
import DoughuntChart from '../../DoughuntChart';

const DonaldsChart = (props) => {
  return (
    <div className='border border-[#E5E6EE] rounded-[6px] bg-white p-[11px] sm:p-[18px] flex-1 w-full '>
        <div className='flex items-center justify-between '>
            <div>
                <p className='text-[13px] text-[#000000] font-[300] line-clamp-1'>{props.heading}</p>
                <h3 className='text-[22px] text-[#0D99FF] font-[500] line-clamp-1 '>{props.percentage}</h3>  
            </div>
            {props.DoughuntChart? <div className='h-[70px] w-[70px] '><DoughuntChart/></div> : ''}
        </div>
        <div className='mt-[8px] max-w-max cursor-default bg-[#EBEEF3] rounded-[6px] flex items-center justify-center px-[16px] py-[8px] text-[#484955] text-[13px] font-[500] '>
            View Details  
        </div>
    </div>
  )
}

export default DonaldsChart