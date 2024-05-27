import { ReactNode, useState } from "react";
import { Sidebar, Header } from "./components";

export interface ILayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    const [open, setOpen] = useState(false)

    return (
        <section className={`min-h-screen grid ${open ? "md:pl-[250px]" : "md:pl-[100px]"} pl-[60px] transition-all  bg-[#F7F8FB]`}>
            <Sidebar open={open} setOpen={setOpen} />
            <main className="px-3 md:px-5">
                <Header />
                <div className="pb-5 space-y-3 overflow-auto md:space-y-7 ">
                    {children}
                </div>
            </main>
        </section >
    )
}
