import { MultiRadialBar, SubTitle, Title } from "../../../components";

interface ITextLineProps {
    text1: string
    text2: string
}

function TextLine({ text1, text2 }: ITextLineProps) {
    return (
        <div className="flex items-center">
            <span className="text-lg font-bold text-dark">{text1}</span>
            <span className="ml-2 text-sm font-medium text-slate">{text2}</span>
        </div>)
}

export default function MultiLineChartContainer() {
    return (
        <div className="col-span-7 space-y-2 xl:col-span-3">
            <div className="flex items-center justify-between font-bold font-roboto">
                <Title title="Sessions By Device" />
                <SubTitle title="Year" />
            </div>
            <div className="w-full bg-white overflow-hidden h-[220px] md:h-[294px] grid grid-cols-3 rounded-base">
                <div className="col-span-2 overflow-hidden">
                    <MultiRadialBar />
                </div>
                <div className="flex flex-col items-start justify-center col-span-1 gap-1 md:gap-4">
                    <div className="space-y-0 md:space-y-1 font-roboto">
                        <SubTitle title="Desktop" />
                        <TextLine text1="8,085" text2="30%" />
                    </div>
                    <div className="space-y-0 md:space-y-1 font-roboto">
                        <SubTitle title="Mobile" />
                        <TextLine text1="8,085" text2="30%" />
                    </div>
                    <div className="space-y-0 md:space-y-1 font-roboto">
                        <SubTitle title="Tablets" />
                        <TextLine text1="8,085" text2="30%" />
                    </div>
                </div>
            </div>
        </div>
    )
}



