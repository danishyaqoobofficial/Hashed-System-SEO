import { useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const DashboardLayout = ({children, active}) => {
  const [expandSidebar, setExpandSidebar] = useState(false)
  return (
    <div>
        <Sidebar active={active} setExpandSidebar={setExpandSidebar} expandSidebar={expandSidebar} />
        <Topbar setExpandSidebar={setExpandSidebar} expandSidebar={expandSidebar}/>
        {children}
    </div>
  )
}

export default DashboardLayout