

const useSidebar = (active)=> {

    const routes = [
        {
            url: "/",
            heading: "Home",
            isActive: active == 'home',
            icon: "/Assets/images/Logo.png",
        },
        {
            url: "/tasks",
            heading: "Tasks",
            // icon: <Svgs.Task />,
            isActive: active == 'task'
        }
    ]

    return{
        routes
    }
}

export default useSidebar