import { Link } from "react-router-dom";
import { INavLinkProps } from "./types";

export default function NavLink({ index, list, open }: INavLinkProps) {
    return (
        <Link to={list.link} key={index} className={`${open ? "justify-start" : "justify-center"} relative flex items-center gap-2 md:gap-3 pb-5  group`}>
            <span className={`inline-block w-[3px] h-6 md:h-[38px] absolute rounded-e-full transition-all  left-0 group-hover:bg-[#3734A9] ${list.active && "bg-[#3734A9]"}`}></span>
            <div className={`${open ? "px-2 w-8 h-8 md:h-12 md:w-12 ms-5" : "w-10 h-8 md:h-12 md:w-16"} justify-center ${list.active && "shadow-[#563BFF42] bg-primary shadow-xl text-white"} text-[#C7C7D2] group-hover:text-white transition-all gap-3 flex items-center rounded-base  md:rounded-[15px] group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-[#563BFF42]`}>
                {list.icon}
            </div>
            {open && <span className={`${list.active && "text-gray-900"} text-[11px] md:text-sm font-medium text-gray-400 group-hover:text-gray-900 font-poppins`}>{list.title}</span>}
        </Link>
    )
}
