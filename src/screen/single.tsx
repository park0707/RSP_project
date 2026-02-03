
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Modal from "./home_parts/modal";
import { randomdeck } from "./singles/randomdeck";
import { useCard } from "../deckcontent";
import Innerheader from "./innerheader";
export default function Single() {
    const {addcards,clearCards} = useCard()
    const [chal,setIsChal] = useState(false)
    function randomhandler() {
        clearCards()
        randomdeck(addcards)
    }
    
    
    return (
        <div className="bg-base-color w-screen h-screen " >
              <Innerheader/>
                <div className="flex flex-col text-white text-[60px] justify-center items-center gap-[70px] pt-[50px]">
                    <Link to="/predeck">
                        <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer hover:scale-110 transition-transform ">
                            사전 덱 구성
                        </div>
                    </Link>
                    <Link to='/play'>
                        <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer hover:scale-110 transition-transform "
                        onClick={()=>{randomhandler()}}>
                            랜덤 덱
                        </div>
                    </Link>
                    
                    <div className="border-white border-5 px-2 py-2 rounded-[30px] w-[500px] cursor-pointer hover:scale-110 transition-transform " 
                    onClick={()=>{setIsChal(true)}}>
                        도전
                    </div>
                </div>
                
                <Modal isopen={chal} onClose={()=>{setIsChal(false)}}>
                    <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[628px] h-[215px] text-white flex items-center justify-center">
                        <p className="text-[35px] flex items-center justify-center">
                            도전은 현재 준비 중입니다.
                        </p>
                    </div>
                </Modal>
                
        </div>
    );
}