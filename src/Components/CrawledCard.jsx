import React from 'react'

const CrawledSingleCard = (props) => {
  return (
    <div className='flex items-center justify-between mt-[9px] '>
        <div className='flex items-center gap-[6px] '>
            <span className='rounded-[100px] h-[10px] w-[10px] bg-[#0D99FF] '></span>
            <p className='text-[13px] text-[#000000] font-[300] '>{props.heading}</p>
        </div>
        <p className='text-[13px] text-[#000000] font-[300] '>{props.value}</p>
    </div>
  )
}

export default CrawledSingleCard