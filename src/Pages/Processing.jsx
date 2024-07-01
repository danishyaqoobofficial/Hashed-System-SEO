import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"




function Processing() {
  

    return (
      <>
        <main className=" w-full bg-[#fff] relative ">
            <section className="h-[100vh] max-w-[1440px] w-full mx-auto px-[15px] md:px-[20px] ">
                <Navbar/>
                <div className=" max-w-[460px] mx-auto mt-[100px] sm:mt-[140px] ">
                    <p className="text-center text-[18px] md:text-[20px] font-[400] text-[#000000] relative !z-50 ">We are processing on your website...</p>
                    <div className="mt-[22px] ">
                        <div className="flex items-center justify-center relative !z-50 ">
                            <img className="h-[130px] w-[130px] relative !z-50 " src='/Assets/Images/Group 1000008920.png' alt="" />
                        </div>
                        <h2 className="text-[#0D99FF] relative !z-50 font-[300] text-[18px] md:text-[26px] text-center mt-[22px] ">“Web Analytics is a revolution that enables you to base your decisions on data and not on opinions”</h2>
                        <div className="mt-[18px] flex items-center justify-center ">
                            <Link to={'/dashboard/home'} className="!z-50 cursor-pointer px-[16px] py-[6px] rounded-[30px] bg-[#E0F2FF] flex items-center justify-center text-[#0D99FF] text-[13px] md:text-[14px] font-[300] ">
                                @ Avinash Kaushik
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center absolute bottom-0 w-full left-0 right-0 !z-0">
                    <svg width="1440" height="445" viewBox="0 0 1440 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 384.655C149.284 329.145 335.5 305.166 375.5 384.655C415.5 464.144 351 458 324 392.852C174.367 31.8056 853.5 840 1462.5 2" stroke="#EBEFF5" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default Processing