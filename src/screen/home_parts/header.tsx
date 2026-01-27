
import { useState } from "react";
import Modal from "./modal.tsx";
import Menu from "../menu_parts/menu.tsx";
export default function Header() {
//  const [isLogin, setIsLogin] = useState(false);

  const [settingopen, setSettingopen] = useState(false);

  
  const togglesetting = () => {
    setSettingopen(!settingopen);
  };

  return (
    <div className="relative">
      <div className="flex flex-row border-b border-white justify-between items-center h-[100px] pl-[20px]" >
        <h1 className="
        font-jua text-[40px] text-white pt-[5px]
        mid:text-[64px] mid:gap-[50px]
        ">
          가위 바위 보 포커</h1>
        <div className="flex flex-row items-center pr-[10px] gap-[20px]
        mid:pr-[31px] mid:gap-[43px]
        "  >
          
          <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={togglesetting}
          className="mid:w-[70px] mid:h-[70px]
          w-[50px] h-[50px] cursor-pointer
          "/>
          
        </div>
      </div>
      <Modal isopen={settingopen} onClose={()=>setSettingopen(false)}>
        <Menu/>
      </Modal>
    </div>
    
  );
  
}