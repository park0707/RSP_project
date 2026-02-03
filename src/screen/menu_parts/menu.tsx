import { useAuth } from "../../logincontext";
import Setting from "./setting";
import { Link } from "@tanstack/react-router";
import Modal from "../home_parts/modal";
import { useState } from "react";
import Login from "../home_parts/login";
import Signup from "../home_parts/signup";
interface Menuprops
{
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function logouthandler(setislogin:React.Dispatch<React.SetStateAction<boolean>>,setgloid:React.Dispatch<React.SetStateAction<String>>){
    setislogin(false)
    setgloid("")
    
}
export default function Menu({open,setOpen}:Menuprops){
    const {islogin,gloid,setislogin,setgloid} = useAuth();
    const [settingopen,setSettingopen] = useState(false)
    const [loginopen,setloginopen] = useState(false)
    const [signupopen,setsignupopen] = useState(false)
    return (
        <div>
            {open && (
                <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setOpen(false)}
                />
            )}
        <div
        className={`
            fixed top-0 right-0 h-full w-[30%] z-50 bg-[#130637]
            transform transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
        `}
        >
        <div
            className="
            text-white text-[30px] py-10
            flex flex-col items-stretch justify-center
            px-6 cursor-pointer w-full h-full
            gap-4
            "
        >
            {islogin ? (
            <div
                onClick={() => {
                logouthandler(setislogin,setgloid)
                }}
                className="py-3 px-4 rounded-xl hover:bg-white/20 transition-colors text-center hover:scale-110 transition-transform "
            >
                로그아웃
            </div>
                ) : (
                <div
                    onClick={() => {
                    setloginopen(true);
                    }}
                    className="py-3 px-4 rounded-xl  hover:bg-white/20 transition-colors text-center hover:scale-110 transition-transform "
                >
                    로그인 / 회원가입
                </div>
                )}

                <Link to="/">
                <div className="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center hover:scale-110 transition-transform ">
                    홈으로
                </div>
                </Link>

                <Link to="/imformation">
                    <div className="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center hover:scale-110 transition-transform ">
                    개인정보 처리 방침
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center hover:scale-110 transition-transform ">
                        문의 페이지
                    </div>
                </Link>
                

                {
                    islogin ?
                    <div className="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center hover:scale-110 transition-transform ">
                        마이 페이지
                    </div> : null
                }

                <div
                onClick={() => setSettingopen(true)}
                className="py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center hover:scale-110 transition-transform "
                >
                설정
                </div>
            </div>
    </div>

            <Modal isopen={settingopen} onClose={()=>{setSettingopen(false)}}>
                <Setting/>
            </Modal>
            {
                islogin ? 
                    null
                :
                    <div>
                        <Modal isopen={loginopen} onClose={()=>{setloginopen(false)}}>
                            <Login setter={setsignupopen}/>
                        </Modal>
                        <Modal isopen={signupopen} onClose={()=>{setsignupopen(false)}}>
                            <Signup signupclose={()=>setsignupopen(false)}/>
                        </Modal>
                    </div>
            
            }
        </div>
    )
}