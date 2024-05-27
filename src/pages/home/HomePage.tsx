import Layout from "../../Layout"
import CategoriesContainer from "./components/CategoriesContainer"
import DailyOverviewContainer from "./components/DailyOverviewContainer"
import LineChartContainer from "./components/LineChartContainer"
import MultiLineChartContainer from "./components/MultiLineChartContainer"
import ProgressContainer from "./components/ProgressContainer"
import SessionDeviceView from "./components/SessionDeviceView"

export default function HomePage() {
    return (
        <Layout>
            <div className="grid w-full grid-cols-7 gap-3 md:gap-7">
                <LineChartContainer />
                <MultiLineChartContainer />
            </div >
            <div className="grid w-full grid-cols-7 gap-3 md:gap-7">
                <CategoriesContainer />
                <ProgressContainer />
            </div >
            <div className="grid w-full grid-cols-7 gap-3 md:gap-7">
                <DailyOverviewContainer />
                <SessionDeviceView />
            </div >
        </Layout >
    )
}