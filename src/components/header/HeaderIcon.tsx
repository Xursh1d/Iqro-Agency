import { ReactNode } from "react";

export default function HeaderIcon({ icon, message }: { message?: number, icon: ReactNode }) {
    return (
        <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-all text-[#4E4E4E] rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200">
            {icon}
            {message && <span className="absolute top-1 flex items-center justify-center w-[12px] h-[12px] md:w-[15px] md:h-[15px] text-[7px] md:text-[9px] text-white font-roboto font-bold right-1 rounded-full bg-primary">{message}</span>}
        </div>
    )
}