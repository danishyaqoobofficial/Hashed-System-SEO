import React , {useState} from 'react'
// import PasswordField from '../Components/PasswordField'




function PasswordField() {

    const [type, setType] = useState('password');
    const [hide, setShow] = useState('fa-regular fa-eye-slash');
    // setType('text');

    const changeType = () => {
        if (type === 'password') {
            setType('text');
            setShow('fa-regular fa-eye');
        }else{
            setType('password');
            setShow('fa-regular fa-eye-slash');
        }
    }

    return (
      <>
        <label className='text-[#807D8D] text-[14px] font-[300] ' htmlFor='password'>Password
            <span className='text-[#0D99FF] text-[16px] '> *</span>
        </label>
        <div className="flex-1 w-full relative " >
            <input placeholder='Enter your company password' className='flex-1 w-full outline-none border rounded-[6px] text-[14px] text-[#000000] border-[#E3E2E9] px-[13px] py-[11px]  mt-[4px] ' type={type} required name="" id='password' />
                <span className="flex items-center justify-center px-[14px] h-full absolute cursor-pointer right-0 top-[3px] " onClick={changeType} >
                    <i class={`${hide} text-[#807D8D] eye_icon `} ></i>
                </span>
        </div>
      </>
    )
  }
  
  export default PasswordField