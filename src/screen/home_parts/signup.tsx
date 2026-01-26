import { useState, type ChangeEvent} from "react";
export default function Signup() {
  const [id,setid] = useState(" ");
  const [pw,setpw] = useState(" ");
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
       <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[428px] h-[615px] text-white flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()} >
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-[10px]">
                <div className=" text-[24px] pl-[16px] pt-[16px] pb-[5px]">닉네임</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] pb-[5px]">*중복 가능</div>
              </div>
              <input type="text" value={id} onChange={handleid} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px]"/>
            </div>
            <div className="flex flex-col items-start pb-[16px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className=" text-[24px] pl-[16px] pt-[16px] pb-[5px]">아이디</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] pb-[5px]">*최대 20글자</div>
              </div>
              <input type="text" value={id} onChange={handleid} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px]"/>
            </div>
            <div className="flex justify-start w-full pl-[25px]">
              <button className="bg-[#0E2B8D] rounded-[30px] w-[134px] h-[41px] text-[20px] tracking-[0.15em] ">중복확인</button>
              {
                //<div>사용 가능한 아이디 입니다.</div>
                //<div>사용 불가능한 아이디 입니다.</div>
                //중복확인 버튼 클릭시 아이디가 이미 데이터 베이스에 있는지에 대해 검사하고 적합한 문장 뜨게
              }
            </div>
            <div className="flex flex-col items-start pt-[12px]">
              <div className="flex flex-row  items-baseline gap-[10px]">
                <div className=" text-[24px] pl-[16px]  pb-[5px]">비밀번호</div>
                <div className="text-[#F30000] pt-[16px] tracking-[0.15em] text-[17px] ">*최대 20글자</div>
              </div>
              <input type="password" value={pw} onChange={handlepw} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px]"/>
            </div>
            <div className="flex flex-col items-start pt-[12px]">
              <div className=" text-[24px] pl-[16px]  pb-[5px]">비밀번호 확인</div>
              <input type="password" value={pw} onChange={handlepw} className="bg-[#D9D9D9] w-[381px] h-[50px] rounded-[25px]"/>
              {
                //비밀번호 확인이랑 비밀번호가 같은지 검사하고 다르면 경고문구 뜨게
                //<div className="text-[#F30000] pt-[10px] tracking-[0.15em] text-[17px] pl-[16px] pb-[10px]">*비밀번호가 불일치 합니다.</div> 
              }
            </div>
            <button className="w-[381px] h-[60px] rounded-[25px] bg-[#0E2B8D] text-[36px] cursor-pointer tracking-[0.15em] mt-auto mb-[15px]">회원가입</button>
        </div>
    </form>
  );
}