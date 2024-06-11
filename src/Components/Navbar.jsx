import { Link } from "react-router-dom"
import Logo from "./Logo"




function Navbar() {
  

    return (
      <>
            <nav className="flex sm:items-center justify-between py-[11px] gap-[13px] ">
                <div className="">
                    <Logo/>
                </div>
                <div className="flex items-center gap-[9px] md:gap-[11px] flex-wrap justify-end ">
                    <Link to={'/login'} className="rounded-[8px] md:rounded-[10px] px-[16px] md:px-[22px] py-[9px] md:py-[10px] bg-[#E9EFFA] cursor-pointer text-[#1E4470] text-[13px] sm:text-[14px] md:text-[15px] font-[700] ">
                        Login
                    </Link>
                    <Link to={'/signup'} className="rounded-[8px] md:rounded-[10px] px-[16px] md:px-[22px] py-[9px] md:py-[10px] bg-[#1E4470] cursor-pointer text-[#fff] text-[13px] sm:text-[14px] md:text-[15px] font-[600] ">
                        Signup
                    </Link>
                </div>
            </nav>
      </>
    )
  }
  
  export default Navbar