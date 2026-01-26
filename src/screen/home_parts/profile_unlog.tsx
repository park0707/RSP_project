
import { useState } from "react";
import Modal from "./modal.tsx";
import Signup from "./signup.tsx";
import Login from "./login.tsx";
export default function Profile_unlog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [islog,setislog] = useState(false);
  
  const clicklog = ()=>{
    setislog(true);
    setIsModalOpen(true);
  };

  const clicksignup = ()=>{
    setislog(false);
    setIsModalOpen(true);
  };

  return (
    <div>
        <div 
            className="w-0 h-0 absolute 
            -top-3 left-1/2 -translate-x-1/2 border-l-[16px] 
            border-l-transparent border-r-[16px] border-r-transparent
            border-b-[20px] border-b-white"
        />
        <div className="bg-white w-[138px] h-[153px] rounded-[15px] flex flex-col gap-[12px] pt-[12px] pl-[5px]" >
          <button className="profile-button cursor-pointer" onClick={clicklog}>로그인</button>
          <button className="profile-button cursor-pointer" onClick={clicksignup}>회원가입</button>
          <Modal isopen={isModalOpen} onClose={()=>setIsModalOpen(false)}>
            {
              islog ? (<Login/>) : (<Signup/>)
            }
          </Modal>
        </div>
        
    </div>
  );
}