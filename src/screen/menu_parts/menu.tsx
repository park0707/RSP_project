import { useAuth } from "../../logincontext";
interface Menuprops
{
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Menu({open,setOpen}:Menuprops){
    const {islogin} = useAuth();
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
                <div className="text-white text-[40px] py-5 flex flex-col items-center px-2 cursor-pointer">
                     {islogin ? (<div>로그아웃</div>):(<div>로그인 / 회원가입</div>)}
                     <div>홈으로</div>
                     <div>싱글 플레이</div>
                     <div>멀티 플레이</div>
                     <div>카드 보기</div>
                     <div>규칙 보기</div>
                     <div>개인정보 처리 방침</div>
                     <div>문의 페이지</div>
                     <div>설정</div>

                </div>
            </div>
        </div>
    )
}