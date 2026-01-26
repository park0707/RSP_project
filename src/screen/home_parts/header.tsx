import React, { use } from "react";
import { useState,useRef,useEffect } from "react";
import Profile_unlog from "./profile_unlog.tsx";
import Profile_log from "./profile_log.tsx";
import Modal from "./modal.tsx";
import Setting from "./setting.tsx";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [settingopen, setSettingopen] = useState(false);

  const dropref = useRef<HTMLDivElement>(null);
  const toggledropdown = () => {
    setIsOpen(!isopen);
  };
  const togglesetting = () => {
    setSettingopen(!settingopen);
  };
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropref.current && !dropref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if(isopen){
      document.addEventListener("mousedown", handleClickOutside);
    };
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[isopen]);  
 
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
          <div ref={dropref}>
            <img src="/images/프로필 아이콘.png" alt="프로필아이콘" onClick={toggledropdown}
            className="w-[60px] h-[60px]
            mid:w-[80px] mid:h-[80px] cursor-pointer
            " />
          </div>
          <img src="/images/설정.png" alt="설정 아이콘" onClick={togglesetting}
          className="mid:w-[70px] mid:h-[70px]
          w-[50px] h-[50px] cursor-pointer
          "/>
          
        </div>
      </div>
      {isopen && (
        <div
          className="absolute z-50 mt-2 "
          style={{
            top: (dropref.current?.offsetTop || 0) + (dropref.current?.offsetHeight || 0),
            left:
              (dropref.current?.offsetLeft || 0) +
              (dropref.current?.offsetWidth || 0) / 2 -
              69,
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          
          <Profile_unlog /> {/*로그인 상태에따라 다르게 <Profile_unlog />*/}
        </div>
      )}
      <Modal isopen={settingopen} onClose={()=>setSettingopen(false)}>
        <Setting/>
      </Modal>
    </div>
    
  );
  
}