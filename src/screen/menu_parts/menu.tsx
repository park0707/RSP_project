interface Menuprops
{
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Menu({open,setOpen}:Menuprops){
    return (
        <div>
            {open && (
                <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setOpen(false)}
                />
            )}
            <div className={`
                fixed top-0 right-0 h-full w-[30%] z-50 bg-[#130637]
                transform transition-transform duration-300 ease-out
                ${open ? "translate-x-0" : "translate-x-full"}
                `}>
                <div>
                    test
                </div>
            </div>
        </div>
    )
}