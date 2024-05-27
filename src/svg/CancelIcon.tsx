interface IMenuIconProps {
    handleClick: () => void
}

export default function CancelIcon({ handleClick }: IMenuIconProps) {
    return (
        <div onClick={handleClick} className="p-2 transition-all rounded-md text-[#51459E] cursor-pointer hover:bg-gray-50 active:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z" /></svg>
        </div>
    )
}
