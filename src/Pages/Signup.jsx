import { Link } from 'react-router-dom'
import banner1 from '../assets/Images/banner1.png'
import banner2 from '../assets/Images/banner2.png'
import signupCenter from '../assets/Images/signupbannercenter.png'
import InputField from '../Components/InputField'
import Logo from '../Components/Logo'





function Signup() {
  

    return (
      <>
        <main className=" w-full bg-[#fff] relative ">
            <section className="md:h-[100vh] max-w-[1220px] w-full mx-auto px-[15px] md:px-[20px] flex gap-[40px] xl:gap-[90px] py-[32px] md:py-[60px] items-start md:flex-row flex-col-reverse">
                <div className="flex-1 relative h-[500px] w-full md:mt-[0px] mt-[32px] ">
                    <div className='h-full w-full z-0 '>
                        <img className=' absolute inset-0 !z-10 w-full h-[700px] ' src={banner1} alt="" />
                        <img className=' absolute inset-0 !z-0 w-full h-[700px]' src={banner2} alt="" />
                        <div className='!z-50 absolute w-full pt-[330px] px-[18px] sm:px-[22px] md:px-[32px] lg:px-[50px] '>
                            <img className='' src={signupCenter} alt="" />
                            <h2 className='mt-[22px] text-white text-[24px] md:text-[28px] lg:text-[34px] font-[300] leading-[39px] '>Achieve Clear Results with Online Marketing</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full ">
                    <div className='pt-[16px] '>
                        <Logo/>
                        <div className='w-full mt-[60px] '>
                            <h2 className='text-[#000000] font-[600] text-[28px] '>Create your account</h2>
                            <p className='text-[15px] text-[#000000] font-[300] '>Please enter your account details</p>
                            <div className='mt-[12px] '>
                                <div className='mt-[12px] '>
                                    <InputField placeholder = 'Enter your Email' type = 'email' lable = 'Email' for = 'Email' id = 'Email'/>
                                </div>
                                <div className='mt-[12px] '>
                                    <InputField placeholder = 'Enter your company name' type = 'text' lable = 'Company Name' for = 'Company Name' id = 'Company Name'/>
                                </div>
                                <div className='mt-[12px] '>
                                    <InputField hidePassword placeholder = 'Enter your company password' type = 'password' lable = 'Password' for = 'Password' id = 'Password'/>
                                </div>
                                <div className='flex items-center gap-[22px] mt-[11px] '>
                                    <div className='flex items-center gap-[5px] '>
                                        <input type="checkbox" name="" id="checkbox" />
                                        <label className='text-[13px] text-[#000000] select-none ' htmlFor="checkbox">Remember me</label>
                                    </div>
                                    <p className='text-[#0D99FF] text-[13px] select-none cursor-pointer '>Forgot Passwod?</p>
                                </div>
                                <Link to={'/enterotp'} className='w-full flex items-center justify-center py-[11px] bg-[#0D99FF] text-white rounded-[6px] mt-[22px] text-[14px] font-[600] cursor-pointer '>
                                    Signup
                                </Link>
                            </div>
                            <div className='mt-[35px] '>
                                <div className='flex items-center gap-[11px] '>
                                    <div className='flex-1 w-full border-[0.9px] border-[#E3E3E3] '></div>
                                    <p className='text-[12px] text-[#828798] font-[400] '>or signup with</p>
                                    <div className='flex-1 w-full border-[0.9px] border-[#E3E3E3] '></div>
                                </div>
                                <div className='mt-[22px] flex items-center gap-[16px] '>
                                    <div className='flex flex-1 cursor-pointer items-center text-[#000000] font-[300] text-[14px] gap-[9px] justify-center px-[22px] py-[10px] rounded-[6px] border border-[#E3E2E9] '>
                                        <svg width="23" height="23" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_28_3588)">
                                            <path d="M24.2917 12C24.2917 5.37258 18.9192 0 12.2917 0C5.66433 0 0.291748 5.37258 0.291748 12C0.291748 17.9895 4.67995 22.954 10.4167 23.8542V15.4688H7.36987V12H10.4167V9.35625C10.4167 6.34875 12.2083 4.6875 14.9493 4.6875C16.2618 4.6875 17.6355 4.92188 17.6355 4.92188V7.875H16.1224C14.6317 7.875 14.1667 8.80008 14.1667 9.75V12H17.4949L16.9628 15.4688H14.1667V23.8542C19.9035 22.954 24.2917 17.9895 24.2917 12Z" fill="#1877F2"/>
                                            <path d="M16.9628 15.4688L17.4949 12H14.1667V9.75C14.1667 8.80102 14.6317 7.875 16.1224 7.875H17.6355V4.92188C17.6355 4.92188 16.2623 4.6875 14.9493 4.6875C12.2083 4.6875 10.4167 6.34875 10.4167 9.35625V12H7.36987V15.4688H10.4167V23.8542C11.6592 24.0486 12.9243 24.0486 14.1667 23.8542V15.4688H16.9628Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_28_3588">
                                            <rect width="24" height="24" fill="white" transform="translate(0.291748)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        Facebook
                                    </div>
                                    <div className='flex flex-1 cursor-pointer items-center text-[#000000] font-[300] text-[14px] gap-[9px] justify-center px-[22px] py-[10px] rounded-[6px] border border-[#E3E2E9] '>
                                        <svg width="23" height="23" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_28_3397)">
                                            <path d="M23.9745 12.2764C23.9745 11.4607 23.9084 10.6405 23.7673 9.83804H12.4485V14.459H18.9302C18.6612 15.9494 17.797 17.2678 16.5315 18.1055V21.1039H20.3985C22.6693 19.0139 23.9745 15.9273 23.9745 12.2764Z" fill="#4285F4"/>
                                            <path d="M12.4486 24.0008C15.685 24.0008 18.4144 22.9382 20.403 21.1039L16.536 18.1055C15.4602 18.8375 14.0712 19.252 12.453 19.252C9.32238 19.252 6.66796 17.1399 5.71554 14.3003H1.7251V17.3912C3.76221 21.4434 7.91139 24.0008 12.4486 24.0008Z" fill="#2FAF91"/>
                                            <path d="M5.71102 14.3003C5.20836 12.8099 5.20836 11.1961 5.71102 9.70575V6.61481H1.72499C0.0229858 10.0056 0.0229858 14.0004 1.72499 17.3912L5.71102 14.3003Z" fill="#FBBC04"/>
                                            <path d="M12.4486 4.74966C14.1594 4.72321 15.8129 5.36697 17.0519 6.54867L20.478 3.12262C18.3086 1.08551 15.4293 -0.034466 12.4486 0.000808666C7.91139 0.000808666 3.76221 2.55822 1.7251 6.61481L5.71113 9.70575C6.65914 6.86173 9.31797 4.74966 12.4486 4.74966Z" fill="#EA4335"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_28_3397">
                                            <rect width="24" height="24" fill="white" transform="translate(0.208496)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        Google
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default Signup