import { Svg1, Svg2 } from "../Svg"


const useSidebar = (active)=> {

    const routes = [
        {
            url: "/tasks",
            heading: "Tasks",
            icon:   <Svg1 stoke={active == 'task'  ? "stroke-[#fff]" : "stroke-[#1E4470]"}/>,
            isActive: active == 'task',
            link: '/dashboard/task'
        },
        {
            url: "/profile",
            heading: "Profile",
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