



function AddTask(props) {

  

    return (
      <>
            <div className='flex items-center py-[13px] px-[22px] gap-[8px] '>
                <div className='flex-1 text-[#000000] text-[13px] font-[400] flex items-center gap-[10px]  '>
                    <p className="line-clamp-1">
                        {props.Name}
                    </p>
                </div>
                <div className='flex-1 text-[#000000] text-[13px] font-[300] flex items-center justify-center'>
                    <span className="rounded-[100px] bg-[#0D99FF] flex items-center justify-center h-[37px] w-[37px] p-[8px] ">
                        <p className="text-white text-[14px] ">{props.Assignee}</p>
                    </span>
                </div>
                <div className='flex-1 text-[#000000] text-[13px] font-[400] flex items-center justify-center gap-[10px]  '>
                    <p className=" text-center ">
                        {props.Due_Date}
                    </p>
                </div>
                <div className='flex-1 text-[#000000] text-[13px] font-[400] flex items-center justify-center gap-[10px]  '>
                    <p className=" text-center ">
                        {props.Priority}
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-end ">
                    <span className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center ">
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="4" r="2" fill="#BDC1CD"/>
                            <circle cx="12" cy="12" r="2" fill="#BDC1CD"/>
                            <circle cx="12" cy="20" r="2" fill="#BDC1CD"/>
                        </svg>
                    </span>
                </div>
            </div>
      </>
    )
  }
  
  export default AddTask