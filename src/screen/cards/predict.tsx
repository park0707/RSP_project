import React from "react";
export default function Predict() {
    return (
        <div className="cards text-white text-[34px] flex flex-col items-center justify-center pt-10 pb-10 gap-10">
            <h1>특수 카드 : 예측</h1>
            <div>
                <p>상대가 특수 카드 미사용시 점수 +1점</p>
                <p>도전 모드 : 예측 성공시 데미지 +1추가</p>
                
            </div>
        </div>
    );
}