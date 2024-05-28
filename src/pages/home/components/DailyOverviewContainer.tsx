import DailyOverviewComponent from "./DailyOverviewComponent";


export default function DailyOverviewContainer() {
    return (
        <section className="grid col-span-7 xl:col-span-4 grid-cols-1 lg:grid-cols-2 gap-3 md:gap-7 min-h-[140px]">
            <DailyOverviewComponent
                today="5,461"
                expected="8,085"
                value={45}
                label="USERS"
                hollowColor="#EFECFF"
                basicColor="#563BFF"
            />
            <DailyOverviewComponent
                today="140"
                expected="120"
                value={79}
                label="GOALS"
                hollowColor="#FFF3F0"
                basicColor="#FF7049"
            />
        </section>
    )
}
