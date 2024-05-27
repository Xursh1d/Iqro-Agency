export default function HeaderSearch() {
    return (
        <div className="relative h-[35px] w-[60%] md:h-[50px] md:w-[334px]">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-3 h-3 text-gray-500 md:w-4 md:h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="text" className="block bg-white w-full h-full px-2 text-[12px] md:text-sm font-roboto placeholder:text-[#5A5881] text-[#5A5881] border border-white rounded-lg outline-none ps-8 md:ps-10 focus:ring-2 focus:ring-blue-300 focus:outline-none" placeholder="Search Anything" />
        </div>
    )
}
