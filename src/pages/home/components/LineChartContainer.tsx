import { LineChart, SubTitle, Title } from "../../../components";

export default function LineChartContainer() {
    return (
        <div className="col-span-7 space-y-2 xl:col-span-4">
            <div className="flex items-center justify-between font-bold font-roboto">
                <Title title="Performance" />
                <SubTitle title="Year" />
            </div>
            <div className="w-full bg-white h-[220px] md:h-[294px] rounded-base">
                <LineChart />
            </div>
        </div>
    )
}
