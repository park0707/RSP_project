import { useState, type ChangeEvent} from "react";
interface LoginProps {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Login({setter}:LoginProps) {
  const [id,setid] = useState("");
  const [pw,setpw] = useState("");
  const handleid = (e:ChangeEvent<HTMLInputElement>) => {
    setid(e.target.value);
  };
  const handlepw = (e:ChangeEvent<HTMLInputElement>) => {
    setpw(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("아이디:", id);
    console.log("비밀번호:", pw);
  };
  return (
    <form onSubmit={handleSubmit}>
       <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[428px] h-[600px] text-white flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()} >
            <div className="flex flex-col items-start ">
              <div className=" text-[36px] pl-[16px] pt-[16px]">아이디</div>
              <input type="text" value={id} onChange={handleid} maxLength={20} className="bg-[#D9D9D9] w-[381px] h-[77px] rounded-[25px]  text-black text-[30px]"/>
            </div>
            <div className="flex flex-col items-start pb-[37px]">
              <div className=" text-[36px] pl-[16px] pt-[16px]">비밀번호</div>
              <input type="password" value={pw} onChange={handlepw} maxLength={20} className="bg-[#D9D9D9] w-[381px] h-[77px] rounded-[25px] text-black text-[30px]"/>
              
            </div>
            <button className="w-[381px] h-[77px] rounded-[25px] bg-[#0E2B8D] text-[48px] cursor-pointer">로그인</button>
            <div className="flex flex-row items-center gap-[18px] pt-[15px] pb-[15px]">
                <hr className="border-[#726D7F] w-[146px] border-t-3"></hr>
                <div className="text-[25px] text-[#726D7F]">또는</div>
                <hr className="border-[#726D7F] w-[146px] border-t-3"></hr>
            </div>
            <button className="w-[381px] h-[77px] rounded-[25px] bg-[#0E2B8D] text-[48px] cursor-pointer"
            onClick={()=>{setter(true)}}>
              회원가입</button>
            
        </div>
    </form>
  );
}