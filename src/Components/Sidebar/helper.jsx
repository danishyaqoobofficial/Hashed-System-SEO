import {Svg , Svg1, Svg2 } from "../Svg"


const useSidebar = (active)=> {

    const routes = [
        {
            url: "/dashboard",
            name: "Dashboard",
            icon:   <Svg stoke={active == 'home'  ? "fill-[#fff]" : "fill-[#1E4470]"}/>,
            isActive: active == 'home',
            link: '/dashboard/home',
        },
        {
            url: "/tasks",
            name: "Tasks",
            icon:   <Svg1 stoke={active == 'task'  ? "stroke-[#fff]" : "stroke-[#1E4470]"}/>,
            isActive: active == 'task',
            link: '/dashboard/task'
        },
        {
            url: "/profile",
            name: "Profile",
            icon: <Svg2 stoke={active == 'profile'  ? "stroke-[#fff]" : "stroke-[#1E4470]"}/>,
            isActive: active == 'profile',
            link: '/dashboard/profile'
        }
    ]
    return{
        routes
    }
}

export default useSidebar