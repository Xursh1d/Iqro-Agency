import { ReactNode } from "react";
import { SubTitle } from "../../../components";
import CardTitle from "./CardTitle";

interface ICardProps {
    title: string
    count: string
    percent: string
    img: ReactNode
    color: string
}
export default function Card({ title, count, percent, img, color }: ICardProps) {
    return (
        <div className="flex flex-col justify-between gap-2 p-3 bg-white md:p-5 rounded-base">
            <div style={{ background: color }} className={`w-10 h-10 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-base`}>
                {img}
            </div>
            <div className=" md:space-y-1 font-roboto">
                <SubTitle title={title} />
                <CardTitle title={count} />
                <SubTitle title={percent} />
            </div>
        </div>
    )
}
