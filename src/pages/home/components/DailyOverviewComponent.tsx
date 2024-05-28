import RadialBar from "../../../components/RadialBar"

interface IDailyOverviewComponentProps {
    today: string,
    expected: string,
    value: number,
    hollowColor: string,
    basicColor: string,
    label: string
}
export default function DailyOverviewComponent({ today, expected, value, hollowColor, basicColor, label }: IDailyOverviewComponentProps) {
    return (
        <div className="h-[100px] md:h-auto flex items-center justify-center gap-3 px-5 bg-white rounded-base">
            <div className="space-y-2 w-16 md:w-auto text-center">
                <h1 className="text-xl font-medium md:text-2xl text-dark">{today}</h1>
                <h6 className="text-[11px] md:text-sm font-bold text-slate">Today</h6>
            </div>
            <div className="flex items-center justify-center h-[110px] w-[110px] md:h-[130px] md:w-[130px] ">
                <RadialBar value={value} hollowColor={hollowColor} label={label} basicColor={basicColor} />
            </div>
            <div className="space-y-2 w-16 md:w-auto text-center">
                <h1 className="text-xl font-medium md:text-2xl text-dark">{expected}</h1>
                <h6 className="text-[11px] md:text-sm font-bold text-slate">Expected</h6>
            </div>
        </div>
    )
}