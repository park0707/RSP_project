import { useState, type ChangeEvent} from "react";
import { useEffect } from "react";
import { supabase } from "../../supabase";
interface signupprops {
  signupclose : React.Dispatch<React.SetStateAction<boolean>>
}
export default function Signup({signupclose}:signupprops) {
  const [name,setname] = useState("")
  const [id,setid] = useState("");
  const [pw,setpw] = useState("");
  const [pwcheck,setpwcheck] = useState("")
  const [same,setsame] = useState(false) //비밀번호 일치 확인 상태
  const [idcheck,setidcheck] = useState(0) //중복확인 버튼 눌렀는 지 확인
  const [idduple,setidduple] = useState(false) //아이디 중복 아닌지 확인 결과
  const [loading,setloading] = useState(false) //중복 버튼 눌림 방지 위해
  const [error,seterror] = useState<String|null>(null) //id 가져오는 데 실패한다면 그 이유 알기 위해
  const [fine,setfine] = useState(false) //회원 가입 성공시 true로 전환
  const [ispw,setispw] = useState(true) //비밀번호의 보이기
  const [ispwch,setispwch] = useState(true) //비밀번호 확인의 보이기 
  const handlename = (e:ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };
  const handleid = (e:ChangeEvent<HTMLInputElement>) => {
    setid(e.target.value);
    setidcheck(0)
    setidduple(false)
  };
  const handlepw = (e:ChangeEvent<HTMLInputElement>) => {
    setpw(e.target.value);
  };
  const handlepwcheck = (e:ChangeEvent<HTMLInputElement>) => {
    setpwcheck(e.target.value);
  };
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    console.log('handleSubmit called');
    if (!name.trim() || !id.trim() || !pw.trim()) {
      console.log('검증 실패: 미완');
      seterror("미완");
      return;
    }
    if (!same) {
      console.log('검증 실패: 비밀번호불일치');
      seterror("비밀번호불일치");
      return;
    }
    if (idcheck === 0 || idduple) {
      console.log('검증 실패: 아이디중복미확인', { idcheck, idduple });
      seterror("아이디중복미확인");
      return;
    }
    if(pw.length < 6)
    {
      seterror('pw길이6미만')
      return;
    }
    console.log('검증 통과, Supabase signup 시작');
    setloading(true);
    seterror(null);

 

    const { error: profileError } = await supabase.from("profiles").insert({
      user_id: id.trim(),
      user_name: name,
      pw: pw, 
    });

    if (profileError) {
      console.error('profileError', profileError);
      seterror("테이블에 삽입 실패");
      setloading(false);
      return;
    }
    setfine(true)
    
  };
  useEffect(()=>{
    setTimeout(() => {
      if(fine)
        signupclose(false)
    }, 1500);
  },[fine])
  useEffect(()=>{
    if(pw === pwcheck)
      setsame(true)
    else
      setsame(false)
  },[pw,pwcheck])
const handleIdCheckClick = async () => {
  if (!id.trim()) {
    seterror("아이디를 입력해 주세요.");
    return;
  }

  setloading(true);
  const { data, error } = await supabase
    .from("profiles")
    .select("user_id")
    .eq("user_id", id.trim());

  setloading(false);
  setidcheck(1); // “중복확인 함” 표시용

  if (error) {
    seterror("아이디 중복 확인 중 오류가 발생했습니다.");
    return;
  }

  setidduple(data.length > 0);
};


  return (
    <form onSubmit={handleSubmit}>
       <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[428px] h-[635px] text-white flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()} >
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-[10px]">
                <div className=" text-[24px] pl-[16px] pt-[16px] pb-[5px]">닉네임</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] pb-[5px]">*중복 가능, 최대 20글자</div>
              </div>
              <input type="text" value={name} onChange={handlename} maxLength={20} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px] text-black text-[30px]"/>
            </div>
            <div className="flex flex-col items-start pb-[16px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className=" text-[24px] pl-[16px] pt-[16px] pb-[5px]">아이디</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] pb-[5px]">*중복 불가, 최대 20글자</div>
              </div>
              <input type="text" value={id} onChange={handleid} maxLength={20} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px]  text-black text-[30px]"/>
            </div>
            <div className="flex justify-start w-full pl-[25px]">
              <button type={"button"} className="bg-[#0E2B8D] rounded-[30px] w-[134px] h-[41px] text-[20px] tracking-[0.15em] cursor-pointer" disabled={loading} onClick={handleIdCheckClick}>중복확인</button>
              <div className="flex items-center justify-center pl-[20px] text-[20px]">
                {
                  idcheck ? (!id || id.trim() === "") ? <div>아아디를 입력해주세요.</div> :
                  idduple ? 
                    <div className="text-[#F30000]">사용 불가능한 아이디 입니다.</div> : 
                    <div className="text-[#28b552]">사용 가능한 아이디 입니다.</div>
                    : null
                  //중복확인 버튼 클릭시 아이디가 이미 데이터 베이스에 있는지에 대해 검사하고 적합한 문장 뜨게
                }    
              </div>
            </div>
            <div className="flex flex-col items-start pt-[12px]">
              <div className="flex flex-row  items-baseline gap-[10px]">
                <div className=" text-[24px] pl-[16px]  pb-[5px]">비밀번호</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] ">*최소 6글자, 최대 20글자</div>
              </div>
              <div className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px] flex">
                <input type={ispw ? "password" : "text"} value={pw} onChange={handlepw} maxLength={20} className="border-none outline-none focus:outline-none text-black text-[30px]"/>
                <div className="px-2 py-2 items-center justify-center flex">
                  {
                    ispw ? <img src="public\images\감은눈.png" alt="감은눈" onClick={()=>{setispw(false)}}/> : <img src="public\images\뜬눈.png" alt="뜬눈" onClick={()=>{setispw(true)}}/>
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[12px] pb-0">
              <div className=" text-[24px] pl-[16px]  pb-[5px]">비밀번호 확인</div>
              <div className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px] flex">
                <input type={ispwch ? "password" : "text"} value={pwcheck} onChange={handlepwcheck} maxLength={20} className="border-none outline-none focus:outline-none text-black text-[30px]"/>
                <div className="px-2 py-2 items-center justify-center flex">
                  {
                    ispwch ? <img src="public\images\감은눈.png" alt="감은눈" onClick={()=>{setispwch(false)}}/> : <img src="public\images\뜬눈.png" alt="뜬눈" onClick={()=>{setispwch(true)}}/>
                  }
                </div>
              </div>
              {
                (pw === "") ? null :
                  same ? <div className="text-[#28b552] pt-[10px] tracking-[0.15em] text-[17px] pl-[16px]">
                    비밀번호 일치
                  </div> : <div className="text-[#F30000] pt-[10px] tracking-[0.15em] text-[17px] pl-[16px]">
                    비밀번호 불일치
                  </div>
                //
                //비밀번호 확인이랑 비밀번호가 같은지 검사하고 다르면 경고문구 뜨게
                //<div className="text-[#F30000] pt-[10px] tracking-[0.15em] text-[17px] pl-[16px] pb-[10px]">*비밀번호가 불일치 합니다.</div> 
              }
            </div>
            <div className="flex justify-center w-full h-full items-center text-[20px]">
              {
                (error === "미완") ? <div>닉네임, 아이디, 비밀번호를 입력해주세요.</div> : 
                (error === "비밀번호불일치") ?
                  <div>비밀번호를 확인해주세요.</div> : 
                (error === "아이디중복미확인") ? 
                  <div>아이디 중복을 확인해주세요.</div> :
                (error === "pw길이6미만") ?
                  <div>비밀번호의 길이는 6이상 20이하여야 합니다.</div> : (fine) ?
                  <div>회원가입 성공</div> : null
                
              }
            </div>
            <button className="w-[381px] h-[60px] rounded-[25px] bg-[#0E2B8D] text-[36px] cursor-pointer tracking-[0.15em] mt-auto mb-[15px]">회원가입</button>
        </div>
    </form>
  );
}