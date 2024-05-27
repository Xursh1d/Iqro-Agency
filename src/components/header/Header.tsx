import { MessageIcon, NotificationIcon } from "../../svg";
import Avatar from "./Avatar";
import HeaderIcon from "./HeaderIcon";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
    return (
        <header className="flex items-center justify-between w-full h-16 md:h-24">
            <HeaderSearch />
            <div className="flex items-center gap-1 md:gap-2">
                <HeaderIcon message={2} icon={<MessageIcon />} />
                <HeaderIcon icon={<NotificationIcon />} />
                <Avatar />
            </div>
        </header>
    )
}

