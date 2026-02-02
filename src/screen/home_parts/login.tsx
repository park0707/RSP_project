import { useState, type ChangeEvent} from "react";
import { supabase } from "../../supabase";
import { useAuth } from "../../logincontext";
interface LoginProps {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Login({setter}:LoginProps) {
  const {setislogin} = useAuth()
  const [id,setid] = useState("");
  const [pw,setpw] = useState("");
  const [error,seterror] = useState<string|null>(null) //에러 확인
  const [loading,setloading] = useState(false) //백엔드 접근 처리 중에는 버튼 눌리지 않도록
  const handleid = (e:ChangeEvent<HTMLInputElement>) => {
    setid(e.target.value);
  };
  const handlepw = (e:ChangeEvent<HTMLInputElement>) => {
    setpw(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!id.trim() || !pw.trim())
    {
      seterror('아이디나 비밀번호를 재확인해주세요.')
      return
    }

    setloading(true)
    seterror(null)

    const {data:user, error:selecterror } = await supabase
    .from("profiles")
    .select("user_id, user_name,pw")
    .eq("user_id",id.trim())
    .maybeSingle()

    setloading(false)

    if(selecterror)
    {
      seterror('로그인 실패')
      return
    }

    if(user?.user_id === "" || (user?.user_id.length === 0))
    {
      seterror("존재하지않는 아이디입니다.")
      return
    }

    if(user?.pw !== pw)
    {
      seterror('잘못된 비밀번호입니다.')
      return
    }

    seterror('로그인 성공')
    setTimeout(() => {
      setislogin(true)
    }, 1500);
    
  };
  return (
    <form onSubmit={handleSubmit}>
       <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[428px] h-[620px] text-white flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()} >
            <div className="flex flex-col items-start ">
              <div className=" text-[36px] pl-[16px] pt-[16px]">아이디</div>
              <input type="text" value={id} onChange={handleid} maxLength={20} disabled={loading} className="bg-[#D9D9D9] w-[381px] h-[77px] rounded-[25px]  text-black text-[30px]"/>
            </div>
            <div className="flex flex-col items-start ">
              <div className=" text-[36px] pl-[16px] pt-[16px]">비밀번호</div>
              <input type="password" value={pw} onChange={handlepw} maxLength={20} disabled={loading} className="bg-[#D9D9D9] w-[381px] h-[77px] rounded-[25px] text-black text-[30px]"/>
              
            </div>
            <div className="flex items-center justify-center text-[25px] px-5 py-5">
              {  
                error && <div >{error}</div>
              }
            </div>
            <button className="w-[381px] h-[77px] rounded-[25px] bg-[#0E2B8D] text-[48px] cursor-pointer" disabled={loading}>로그인</button>
            <div className="flex flex-row items-center gap-[18px] pt-[15px] pb-[15px]">
                <hr className="border-[#726D7F] w-[146px] border-t-3"></hr>
                <div className="text-[25px] text-[#726D7F]">또는</div>
                <hr className="border-[#726D7F] w-[146px] border-t-3"></hr>
            </div>
            <button type="button" className="w-[381px] h-[77px] rounded-[25px] bg-[#0E2B8D] text-[48px] cursor-pointer"
            onClick={()=>{setter(true)}}>
              회원가입</button>
            
        </div>
    </form>
  );
}