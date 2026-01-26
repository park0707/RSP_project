
import Setting from "./home_parts/setting";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Modal from "./home_parts/modal";
export default function Single() {
    const [issettingopen, setIsSettingOpen] = useState(false);
    const [chal,setIsChal] = useState(false)
    const [random,setRandom] = useState(false)
    return (
        <div className="bg-base-color w-screen h-screen " >
              <div className="pt-3 flex justify-between px-4">
                            <Link to="/">
                                    <div className="back_button">뒤로가기</div>
                            </Link>
                            <img src="/images/설정.png" alt="설정 아이콘" onClick={()=>setIsSettingOpen(!issettingopen)}
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
                <Modal isopen={issettingopen} onClose={()=>setIsSettingOpen(false)}>
                    <Setting />
                </Modal>
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