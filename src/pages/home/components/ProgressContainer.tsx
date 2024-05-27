import { Title } from "../../../components";

interface IProgressProps {
    title: string
    value: string
    color: string
}

function ProgressComponent({ title, value, color }: IProgressProps) {
    return (
        <div className="grid items-center grid-cols-[1fr_3fr_1fr]  gap-3 ">
            <span className="text-sm font-medium text-slate">{title}</span>
            <div className=" bg-[#F2F3F9] rounded-full h-2">
                <div className="h-2 rounded-full " style={{ width: value, background: color }}></div>
            </div>
            <span className="text-sm font-medium text-end text-slate">{value}</span>
        </div>
    )
}

export default function ProgressContainer() {
    return (
        <div className="font-bold col-span-7 xl:col-span-3 flex flex-col justify-between min-h-[220px]  md:h-[274px] font-roboto bg-white rounded-base p-4 md:p-7">
            <Title title="Sessions By Device" />
            <div className="grid items-center grid-cols-[1fr_3fr_1fr]  gap-3 pb-5 border-b border-gray-300">
                <span className="text-[12px] md:text-sm text-dark">Channel</span>
                <span className="text-[12px] md:text-sm text-dark">Traffic (%)</span>
                <span className="text-end text-[12px] md:text-sm text-dark">Value</span>
            </div>
            <ProgressComponent title="Direct" value="45%" color="#563BFF" />
            <ProgressComponent title="Direct" value="50%" color="#FF7049" />
            <ProgressComponent title="Direct" value="67%" color="#20C997" />
        </div>
    )
}
