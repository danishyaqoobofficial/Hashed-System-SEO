import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import image from '../assets/Images/Group 1000008924.png'




function HomePage() {
  

    return (
      <>
        <main className=" w-full bg-[#fff] relative ">
            <section className="h-[100vh] max-w-[1440px] w-full mx-auto px-[15px] md:px-[20px] ">
                <Navbar/>
                <div className=" max-w-[730px] mx-auto mt-[90px] sm:mt-[110px] md:mt-[150px] bg-white ">
                    <h2 className="text-[##0A0E19] text-center text-[28px] sm:text-[42px] md:text-[52px] font-[400] leading-[38px] relative !z-30 sm:leading-[52px] md:leading-[60px] ">Achieve Clear Results with Online Marketing</h2>
                    <p className="mt-[15px] text-center text-[14px] sm:text-[16px] md:text-[17px] font-[300] text-[#0A0E19] relative !z-30 ">Optimize your website to rank higher on search engines and attract more organic traffic.</p>
                    <div className="md:w-[94%] mx-auto border-[1.4px] border-[#BEC1CC] relative !z-30 p-[4px] sm:p-[5px] rounded-[9px] flex mt-[42px] h-[52px] sm:h-[59px] shadow-lg bg-white ">
                        <div className="flex relative !z-30 items-center justify-center pl-[12px] sm:pl-[20px] h-full ">
                            <i class="fa-solid relative !z-30 fa-magnifying-glass text-[18px] text-[#8E929E] "></i>
                        </div>
                        <input className="flex-1 w-full outline-none border-[0px] !z-30 px-[10px] sm:px-[12px] text-[#8E929E] text-[14px] sm:text-[15px] md::text-[16px] " type="text" placeholder="Search" />
                        <Link to={'/Processing'} className="rounded-[9px] !z-30 px-[18px] sm:px-[38px] h-full flex items-center justify-center py-[11px] bg-[#0D99FF] cursor-pointer text-[#fff] text-[15px] font-[600] ">
                            Audit
                        </Link>
                    </div>
                    <div className="flex items-center justify-center pt-[35px] flex-wrap relative !z-30 ">
                        <div className="px-[40px] border-r border-[#D6D8DF] mt-[16px] remove_border_second ">
                            <h2 className="text-[#000000] text-center text-[20px] font-[400] ">1480</h2>
                            <p className="text-[#8E929E] text-[12px] text-center font-[300] ">Users Joined</p>
                        </div>
                        <div className="px-[40px] border-r border-[#D6D8DF] mt-[16px] remove_border">
                            <h2 className="text-[#000000] text-center text-[20px] font-[400] ">1480</h2>
                            <p className="text-[#8E929E] text-[12px] text-center font-[300] ">Users Joinedfvrg</p>
                        </div>
                        <div className="px-[40px] mt-[16px] ">
                            <h2 className="text-[#000000] text-center text-[20px] font-[400] ">1480</h2>
                            <p className="text-[#8E929E] text-[12px] text-center font-[300] ">Users Joined</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 !z-0 ">
                    <img className="!z-0" src={image} alt="" />
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default HomePage