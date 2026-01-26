import React from "react";
export default function Defeat() {
    return (
        <div className="cards text-white text-[34px] flex flex-col items-center justify-center pt-10 pb-10 gap-10">
            <h1>특수 카드 : 전략적 패배</h1>
            <div>
                <p>이번 게임 패배 시  +1점</p>
                <p>도전 모드 : 패배 시 데미지 +2</p>
                
            </div>
        </div>
    );
}