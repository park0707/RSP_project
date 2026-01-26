import React from "react";
export default function Swap() {
    return (
        <div className="cards text-white text-[34px] flex flex-col items-center justify-center pt-10 pb-10 gap-10">
            <h1>특수 카드 : 뒤집기</h1>
            <div>
                <p>가위가 바위를 상대로 승리</p>
                <p>바위가 보자기를 상대로 승리</p>
                <p>보자기가 가위를 상대로 승리</p>
            </div>
        </div>
    );
}