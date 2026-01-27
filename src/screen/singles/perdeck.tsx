
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Menu from "../menu_parts/menu";
import Modal from "../home_parts/modal";
import { useEffect } from "react";
import { useCard } from "../../deckcontent";
export default function PerDeck() {
    const [menuopen, setMenuopen] = useState(false);
    const [isspecial, setIsSpecial] = useState(false);
    const [totalcommoncard,settotalcommoncard] = useState(0);
    const [totalspecialcard,settotalspecialcard] = useState(0);
    const maxcommoncard = 9;
    const maxspecialcard = 5;
    const {
        cards,
        addcards,
        removecards
    }=useCard();
    const nowcommoncount = cards.filter(card=>card.id <=3).reduce((acc,card)=>acc+card.count,0);
    const nowspecialcount = cards.filter(card=>card.id >3).reduce((acc,card)=>acc+card.count,0);
    useEffect(() => {
        settotalcommoncard(nowcommoncount);
        settotalspecialcard(nowspecialcount);
    }, []);
    useEffect(() => {
        if(totalcommoncard === maxcommoncard && totalspecialcard === maxspecialcard){
            setIsReady(true);
        }
        else{
            setIsReady(false);
        }
    }, [totalcommoncard, totalspecialcard]);
    const addhandeler = (id:number) => {
        if(totalcommoncard >= maxcommoncard && id <=3){
            return;
        }
        if(totalspecialcard >= maxspecialcard && id >3){
            return;
        }
        // 수용 가능 카드 이상은 추가 못하게 막기
        if(id <=3){
            settotalcommoncard(totalcommoncard+1);
        }
        if(id >3){
            settotalspecialcard(totalspecialcard+1);
        }
        const newcard = {id:id,count:1};
        addcards(newcard);
        
    };
    const getcardname = (id:number) => {
        switch(id){
            case 1: return "가위";
            case 2: return "바위";
            case 3: return "보";
            case 4: return "뒤집기";
            case 5: return "강타";
            case 6: return "예측";
            case 7: return "방해";
            case 8: return "갈취";
            case 9: return "흉조";
            case 10: return "공유";
            case 11: return "앞서기";
            case 12: return "전략적패배";
            case 13: return "하이리스크하이리턴";
            case 14: return "사기";
            case 15: return "모아니면도";
            
        }
    };
    const removehandeler = (id:number) => {
        if(id <=3){
            settotalcommoncard(totalcommoncard-1);
        }
        if(id >3){
            settotalspecialcard(totalspecialcard-1);
        }
        removecards(id);
        
    };
    const [isready,setIsReady] = useState(false);
    const [notopened,setNotOpened] = useState(false);
    return (
        <div className="w-screen h-screen bg-base-color">
            <div className="pt-3 flex justify-between px-4">
                <Link to="/single">
                        <div className="back_button">뒤로가기</div>
                </Link>
                <div>
                    {
                        isready ? (
                            <Link to="/play">
                                <div className="text-white text-[40px] pt-3 border-5 border-white rounded-[10px] px-5 py-1 cursor-pointer" 
                                >
                                        플레이
                                </div>    
                            </Link>
                        ) : (
                            <div className="text-white text-[40px] pt-3 border-5 border-white rounded-[10px] px-5 py-1 cursor-pointer" 
                            onClick={()=>{setNotOpened(true)}}>
                                    플레이
                            </div>
                        )
                    }
                </div>
                <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={()=>setMenuopen(!menuopen)}
                className="mid:w-[70px] mid:h-[70px]
                w-[50px] h-[50px] cursor-pointer
                "/>
            </div>
            <div className="flex justify-between text-white text-[40px] px-3 gap-[10px]">
                <div>
                    <div className="flex gap-[25px] items-center justify-center pb-5">
                        <div className="border-5 border-white rounded-[10px] px-3 cursor-pointer" onClick={()=>setIsSpecial(false)}>
                            일반
                        </div>
                        <div className="border-5 border-white rounded-[10px] px-3 cursor-pointer" onClick={()=>setIsSpecial(true)}>
                            특수
                        </div>
                    </div>
                    <div className="w-[1000px] h-[480px] overflow-y-auto border-5 border-white rounded-[10px]">
                        {isspecial ? (
                           <div className="flex-wrap gap-20 h-full items-center pl-[97px] inline-flex">
                                <img src="/images/뒤집기.png" alt="뒤집기 카드" className="card" onClick={()=>{addhandeler(4)}} />
                                <img src="/images/강타.png" alt="강타 카드" className="card" onClick={()=>{addhandeler(5)}} />
                                <img src="/images/예측.png" alt="예측 카드" className="card" onClick={()=>{addhandeler(6)}} />
                                <img src="/images/방해.png" alt="방해 카드" className="card" onClick={()=>{addhandeler(7)}} />
                                <img src="/images/갈취.png" alt="갈취 카드" className="card" onClick={()=>{addhandeler(8)}} />
                                <img src="/images/흉조.png" alt="흉조 카드" className="card" onClick={()=>{addhandeler(9)}} />
                                <img src="/images/공유.png" alt="공유 카드" className="card" onClick={()=>{addhandeler(10)}} />
                                <img src="/images/앞서기.png" alt="한 발짝 앞서기 카드" className="card" onClick={()=>{addhandeler(11)}} />
                                <img src="/images/전략적패배.png" alt="전략적 패배 카드" className="card" onClick={()=>{addhandeler(12)}} />
                                <img src="/images/하이리스크하이리턴.png" alt="하이 리스크 하이 리턴 카드" className="card" onClick={()=>{addhandeler(13)}} />
                                <img src="/images/사기.png" alt="사기 카드" className="card" onClick={()=>{addhandeler(14)}} />
                                <img src="/images/모아니면도.png" alt="모아니면도 카드" className="card" onClick={()=>{addhandeler(15)}}/>
                            </div>
                        ) : (
                           <div className="flex gap-10 h-full items-center justify-center  ">
                                <img src="/images/가위.png" alt="가위 카드" className="w-[300px] h-[470px]" onClick={()=>{addhandeler(1)}}/>
                                <img src="/images/바위.png" alt="바위 카드" className="w-[300px] h-[470px]" onClick={()=>{addhandeler(2)}}/>
                                <img src="/images/보.png" alt="보 카드" className="w-[300px] h-[470px]" onClick={()=>{addhandeler(3)}}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-1 justify-center flex-col items-center">
                    <div className="border-5 border-white rounded-[10px] px-3">
                        내 덱
                    </div>
                    <div className=" flex h-[480px] w-full flex-wrap overflow-y-auto border-5 border-white rounded-[10px] items-center justify-center">
                        {
                            
                            cards.map((card)=>
                                <div key={card.id} className="flex items-center justify-center w-1/2" onClick={()=>(removehandeler(card.id))}>
                                    <img src={`/images/${getcardname(card.id)}.png`} alt={`${getcardname(card.id)} 카드`} className="w-[150px] h-[235px] inline-block m-2"/>
                                    <div className="text-[30px] text-center">x{card.count}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Menu open={menuopen} setOpen={setMenuopen}/>
            <Modal isopen={notopened} onClose={()=>setNotOpened(false)}>
                <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[728px] h-[215px] text-white flex items-center justify-center text-[36px]">
                    일반 카드를 {maxcommoncard-totalcommoncard}장, 특수 카드를 {maxspecialcard-totalspecialcard}장 더 골라주세요.
                </div>
            </Modal>
        </div>
    );

}