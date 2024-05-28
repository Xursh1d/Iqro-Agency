import { Title } from "../../../components"
import Card from "./Card"

export default function CategoriesContainer() {
    return (
        <section className="min-h-[274px] sm:min-h-[174px] md:min-h-[274px] gap-3 md:gap-7 col-span-7 xl:col-span-4 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-7 min-h-[200px] sm:min-h-[150px] md:min-h-[200px]">
                <Card img={<img src="/users.svg" alt="Users" />} title="Users" count="72.6k" percent="+25%" color="#dbeafe" />
                <Card img={<img src="/sessions.svg" alt="Sessions" />} title="Sessions" count="87.2k" percent="+47%" color="#fee2e2" />
                <Card img={<img src="/rate.svg" alt="Rate" />} title="Sessions" count="87.2k" percent="+47%" color="#f3e8ff" />
                <Card img={<img src="/duration.svg" alt="Duration" />} title="Session Duration" count="2m 18s" percent="+13%" color="#dcfce7" />
            </div>
            <div className="flex items-center justify-between py-1 ">
                <Title title="Daily Overview" />
                <button className="bg-white text-[12px] md:text-sm font-roboto w-[130px] h-[42px] font-medium rounded-base text-dark focus:outline-none hover:bg-gray-100 transition-all focus:ring-2 md:focus:ring-4 focus:ring-gray-50">
                    Export
                </button>
            </div>
        </section >
    )
}
