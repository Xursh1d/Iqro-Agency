import { useLocation } from "react-router-dom";
import { CancelIcon, MenuIcon } from "../../svg";
import { NavIcon1, NavIcon10, NavIcon11, NavIcon2, NavIcon3, NavIcon4, NavIcon5, NavIcon6, NavIcon7, NavIcon8, NavIcon9 } from "../../svg";
import NavLink from "./NavLink";
import { ISidebarProps, NavLinkType } from "./types";


export default function Sidebar({ open, setOpen }: ISidebarProps) {
    const { pathname } = useLocation();
    const paths = pathname.split(" ")

    const toggleHandler = () => setOpen(!open)

    const menuList: NavLinkType[] = [
        { title: "Home", link: "/", active: paths.includes("/"), icon: <NavIcon1 /> },
        { title: "Dashboard", link: "/dashboard", active: paths.includes("/dashboard"), icon: <NavIcon2 /> },
        { title: "Statistics", link: "/statistic", active: paths.includes("/statistic"), icon: <NavIcon3 /> },
        { title: "Cash", link: "/cash", active: paths.includes("/cash"), icon: <NavIcon4 /> },
        { title: "Lists", link: "/lists", active: paths.includes("/lists"), icon: <NavIcon5 /> },
        { title: "Email", link: "/email", active: paths.includes("/email"), icon: <NavIcon6 /> },
        { title: "Messages", link: "/message", active: paths.includes("/message"), icon: <NavIcon7 /> },
        { title: "Cart", link: "/cart", active: paths.includes("/cart"), icon: <NavIcon8 /> },
        { title: "Status", link: "/status", active: paths.includes("/status"), icon: <NavIcon9 /> },
        { title: "Store", link: "/store", active: paths.includes("/store"), icon: <NavIcon10 /> },
        { title: "Archive", link: "/archive", active: paths.includes("/archive"), icon: <NavIcon11 /> },
    ]

    return (
        <aside onClick={toggleHandler} className={`${open && "bg-[#00000026] w-full"} duration-150 h-screen  md:w-auto z-50 fixed bottom-0 left-0 top-0 transition-all `}>
            <div onClick={(e) => e.stopPropagation()} className={`h-full bg-white ${open ? "w-[180px] md:w-[250px]" : "w-[60px] md:w-[100px]"} transition-all duration-150`}>
                <div className={`${open ? "justify-end" : "justify-center"} flex items-center w-full h-[70px] md:h-24 px-2 md:px-5`}>
                    {!open ? <MenuIcon handleClick={toggleHandler} /> :
                        <CancelIcon handleClick={toggleHandler} />}
                </div>
                <nav className="flex flex-col h-[calc(100%-70px)] md:h-[calc(100%-96px)] pb-5 overflow-auto">
                    {menuList.map((list, index) =>
                        <NavLink key={index} list={list} index={index} open={open} />)}
                </nav>
            </div>
        </aside>
    )
}
