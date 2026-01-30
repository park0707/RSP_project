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
export default function Menu({open,setOpen}:Menuprops){
    const {islogin} = useAuth();
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
            <div className={`
                fixed top-0 right-0 h-full w-[30%] z-50 bg-[#130637]
                transform transition-transform duration-300 ease-out
                ${open ? "translate-x-0" : "translate-x-full"}
                `}>
                <div className="text-white text-[40px] py-5 flex flex-col items-center justify-center px-2 cursor-pointer w-full h-full
                gap-[10px]">
                     {islogin ? (<div onClick={()=>{setloginopen(true)}}>로그아웃</div>):(
                        <div onClick={()=>{setloginopen(true)}}>로그인/회원가입</div>
                     )}
                     <Link to="/">
                        <div>홈으로</div>
                     </Link>
                    <Link to="/single">
                        <div>싱글 플레이</div>
                    </Link>
                    <div>멀티 플레이</div>
                    <Link to="/cards"> 
                        <div>카드 보기</div>   
                    </Link>
                    <Link to="/rule">
                        <div>규칙 설명</div>
                    </Link>  
                     <div>개인정보 처리 방침</div>
                     <div>문의 페이지</div>
                     <div onClick={()=>setSettingopen(true)}>설정</div>


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
                            <Signup/>
                        </Modal>
                    </div>
            
            }
        </div>
    )
}