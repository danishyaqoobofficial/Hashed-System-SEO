


function IssuesTable(props) {

  

    return (
      <>
            <div className='flex items-center py-[13px] px-[22px] border-b border-[#E5E6EE] '>
                <div className='flex-[3] text-[#000000] text-[13px] font-[300] flex items-center gap-[10px]  '>
                    <p className="line-clamp-1">{props.typeOfIssue}</p>
                    <span className={` ${props.orange ? 'bg-[#FFF2E5] text-[#F27A23]' : 'bg-[#FFEEEE] text-[#FF4954]'} font-[600] text-[12px] px-[14px] py-[4px] rounded-[30px] `}>
                        errors
                    </span>
                </div>
                <div className='flex-1 text-[#000000] text-[13px] font-[300] '>
                    {props.numberOfIssue}
                </div>
                <div className='flex-1 text-[#0D99FF] text-[13px] font-[300] line-clamp-1 '>
                    {props.aboutTheIssue}
                </div>
            </div>
      </>
    )
  }
  
  export default IssuesTable