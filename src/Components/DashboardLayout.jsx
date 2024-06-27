import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const DashboardLayout = ({children, active}) => {
    const [hide,setHide]=useState()
  return (
    <div>
        <Sidebar active={active} hide={hide} />
        <Topbar />
        {children}
    </div>
  )
}

export default DashboardLayout