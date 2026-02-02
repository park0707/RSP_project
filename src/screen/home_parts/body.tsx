import Modal from "./modal";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
export default function Body() {
  const [ismodalopen, setIsModalOpen] = useState(false);
  const modaltoggle = () => {
    setIsModalOpen(!ismodalopen);
  };

  return (
    
    <div className="items-center justify-center  pt-[60px]  top-[170px] flex flex-col text-white
    gap-[20px] text-[36px] 
    mid:gap-[58px] mid:text-[36px]
     ">
        <Link to="/single">
          <button className="home_button cursor-pointer hover:scale-110 transition-transform ">싱글 플레이</button>
        </Link>
        <button className="home_button cursor-pointer hover:scale-110 transition-transform " onClick={()=>{modaltoggle()}} >멀티 플레이</button>
        <Link to="/cards">
          <button className="home_button cursor-pointer hover:scale-110 transition-transform ">카드 보기</button>
        </Link>
        <Link to="/rule">
          <button className="home_button cursor-pointer hover:scale-110 transition-transform ">규칙 설명</button>
        </Link>
        
        
        <Modal isopen={ismodalopen} onClose={()=>setIsModalOpen(false)}>
          <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[628px] h-[215px] text-white flex items-center justify-center">
            <p className="text-[35px] flex items-center justify-center">
              멀티 플레이는 현재 준비 중입니다.
            </p>
          </div>
        </Modal>
    </div>
  );
}