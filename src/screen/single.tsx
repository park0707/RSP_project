
import Menu from "./menu_parts/menu";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Modal from "./home_parts/modal";
import { back } from "./back";
export default function Single() {
    const [menuopen,setMenuopen] = useState(false)
    const [chal,setIsChal] = useState(false)
    const [random,setRandom] = useState(false)
    const goback = back()
    return (
        <div className="bg-base-color w-screen h-screen " >
              <div className="pt-3 flex justify-between px-4">
                            <button className="back_button" onClick={()=>{goback()}}>뒤로가기</button>
                            <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={()=>setMenuopen(true)}
                            className="mid:w-[70px] mid:h-[70px]
                            w-[50px] h-[50px] cursor-pointer
                            "/>
                </div>
                <div className="flex flex-col text-white text-[60px] justify-center items-center gap-[70px] pt-[50px]">
                    <Link to="/perdeck">
                        <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer">
                            사전 덱 구성
                        </div>
                    </Link>
                    <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer"
                    onClick={()=>{setRandom(true)}}>
                        랜덤 덱
                    </div>
                    <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer" 
                    onClick={()=>{setIsChal(true)}}>
                        도전
                    </div>
                </div>
                <Menu open={menuopen} setOpen={setMenuopen}/>
                <Modal isopen={chal} onClose={()=>{setIsChal(false)}}>
                    <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[628px] h-[215px] text-white flex items-center justify-center">
                        <p className="text-[35px] flex items-center justify-center">
                            도전은 현재 준비 중입니다.
                        </p>
                    </div>
                </Modal>
                <Modal isopen={random} onClose={()=>{setRandom(false)}}>
                    <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[628px] h-[215px] text-white flex items-center justify-center">
                        <p className="text-[35px] flex items-center justify-center">
                            랜덤덱은 현재 준비 중입니다.
                        </p>
                    </div>
                </Modal>
        </div>
    );
}