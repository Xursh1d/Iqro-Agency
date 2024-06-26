interface IMenuIconProps {
    handleClick: () => void
}

export default function MenuIcon({ handleClick }: IMenuIconProps) {
    return (
        <div onClick={handleClick} className="p-2 transition-all rounded-md cursor-pointer md:p-3 hover:bg-gray-50 active:bg-gray-100">
            <svg className="w-4 md:w-6 " viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M-0.00012207 1.45455C-0.00012207 0.651222 0.6511 0 1.45442 0H9.45442C10.2577 0 10.909 0.651222 10.909 1.45455C10.909 2.25787 10.2577 2.90909 9.45442 2.90909H1.45442C0.6511 2.90909 -0.00012207 2.25787 -0.00012207 1.45455Z" fill="#51459E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M-0.00012207 7.99999C-0.00012207 7.19666 0.6511 6.54544 1.45442 6.54544H19.6362C20.4396 6.54544 21.0908 7.19666 21.0908 7.99999C21.0908 8.80331 20.4396 9.45453 19.6362 9.45453H1.45442C0.6511 9.45453 -0.00012207 8.80331 -0.00012207 7.99999Z" fill="#51459E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M-0.00012207 14.5455C-0.00012207 13.7421 0.6511 13.0909 1.45442 13.0909H16.7272C17.5305 13.0909 18.1817 13.7421 18.1817 14.5455C18.1817 15.3488 17.5305 16 16.7272 16H1.45442C0.6511 16 -0.00012207 15.3488 -0.00012207 14.5455Z" fill="#51459E" />
            </svg>
        </div >

    )
}
