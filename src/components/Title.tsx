export default function Title({ title }: { title: string }) {
    return (
        <h1 className="font-bold text-dark text-[16px] md:text-[20px] font-roboto">{title}</h1>
    )
}
