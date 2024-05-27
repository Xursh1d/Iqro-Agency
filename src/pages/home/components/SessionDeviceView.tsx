import { Title } from "../../../components";

export default function SessionDeviceView() {
    return (
        <div className="col-span-7 xl:col-span-3 font-bold flex items-center justify-between min-h-[100px] md:min-h-[140px] font-roboto bg-white rounded-base p-4 md:px-7">
            <div className="font-roboto">
                <Title title="Sessions By Device" />
                <span className="text-sm font-medium text-[#A3ABBD]">Top Region & session</span>
            </div>
            <button type="button" className="w-[100px] md:w-[130px] h-10 md:h-12 flex items-center justify-center text-[11px] md:text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-800 focus:ring-2 md:focus:ring-4 focus:ring-blue-300 focus:outline-none">View</button>
        </div>
    )
}
