



function InputField(props) {
  

    return (
      <>
        <label className='text-[#807D8D] text-[14px] font-[300] ' htmlFor={props.for}>{props.lable}
            <span className='text-[#0D99FF] text-[16px] '> *</span>
        </label>
        <div className="flex-1 w-full relative " >
            <input placeholder={props.placeholder} className='flex-1 w-full outline-none border rounded-[6px] text-[14px] text-[#000000] border-[#E3E2E9] px-[13px] py-[11px]  mt-[4px] ' type={props.type} name="" id={props.id} />
            {props.hidePassword ? 
                <span className="flex items-center justify-center px-[14px] h-full absolute cursor-pointer right-0 top-[3px] ">
                    <i class="fa-regular fa-eye-slash text-[#807D8D] "></i>
                </span>
            : 
                ''
            }
        </div>
      </>
    )
  }
  
  export default InputField