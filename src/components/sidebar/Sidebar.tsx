import { CancelIcon, MenuIcon } from "../../svg";
import { NavIcon1, NavIcon10, NavIcon11, NavIcon2, NavIcon3, NavIcon4, NavIcon5, NavIcon6, NavIcon7, NavIcon8, NavIcon9 } from "../../svg";
import NavLink from "./NavLink";
import { ISidebarProps, NavLinkType } from "./types";

const menuList: NavLinkType[] = [
    { title: "Home", link: "/", active: true, icon: <NavIcon1 /> },
    { title: "Dashboard", link: "/", icon: <NavIcon2 /> },
    { title: "Statistics", link: "/", icon: <NavIcon3 /> },
    { title: "Cash", link: "/", icon: <NavIcon4 /> },
    { title: "Lists", link: "/", icon: <NavIcon5 /> },
    { title: "Email", link: "/", icon: <NavIcon6 /> },
    { title: "Messages", link: "/", icon: <NavIcon7 /> },
    { title: "Cart", link: "/", icon: <NavIcon8 /> },
    { title: "Link", link: "/", icon: <NavIcon9 /> },
    { title: "Link", link: "/", icon: <NavIcon10 /> },
    { title: "Archive", link: "/", icon: <NavIcon11 /> },
]

export default function Sidebar({ open, setOpen }: ISidebarProps) {

    const toggleHandler = () => setOpen(!open)

    return (
        <aside onClick={toggleHandler} className={`${open && "bg-[#00000026] w-full"} duration-150 h-screen  md:w-auto z-50 fixed bottom-0 left-0 top-0 transition-all `}>
            <div onClick={(e) => e.stopPropagation()} className={`h-full bg-white ${open ? "w-[180px] md:w-[250px]" : "w-[60px] md:w-[100px]"} transition-all duration-150`}>
                <div className={`${open ? "justify-end" : "justify-center"} flex items-center w-full h-[70px] md:h-24 px-2 md:px-5`}>
                    {!open ? <MenuIcon handleClick={toggleHandler} /> :
                        <CancelIcon handleClick={toggleHandler} />}
                </div>
                <nav className="flex flex-col h-[calc(100%-70px)] md:h-[calc(100%-96px)] pb-5 overflow-auto">
                    {menuList.map((list, index) =>
                        <NavLink list={list} index={index} open={open} />)}
                </nav>
            </div>
        </aside>
    )
}
