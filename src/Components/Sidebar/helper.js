import Task from "../../Components/svgs"


const useSidebar = (active)=> {

    const routes = [
        {
            url: "/tasks",
            heading: "Tasks",
            icon: 'Task',
            isActive: active == 'task',
            link: '/dashboard/task'
        },
        {
            url: "/profile",
            heading: "Profile",
            icon: 'Profile',
            isActive: active == 'profile',
            link: '/dashboard/profile'
        }
    ]
    return{
        routes
    }
}

export default useSidebar