export default function Profile_log() {
  return (
    <div>
        <div 
            className="w-0 h-0 absolute 
            -top-3 left-1/2 -translate-x-1/2 border-l-[16px] 
            border-l-transparent border-r-[16px] border-r-transparent
            border-b-[20px] border-b-white"
        />
        <div className="bg-white w-[138px] h-[357px] rounded-[15px] flex flex-col gap-[12px] pt-[12px] pl-[5px]" >
          <button className="profile-button">내 정보</button>
          <button className="profile-button">대전 기록</button>
          <button className="profile-button">친구</button>
          <button className="profile-button">도전과제</button>
          <button className="profile-button">로그아웃</button>
        </div>
    </div>
    );
}