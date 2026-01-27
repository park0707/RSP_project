import React from "react";
import { back } from "./back";
import Menu from "./menu_parts/menu";
import { useState,useEffect } from "react";
import { useCard } from "../deckcontent";
import Modal from "./home_parts/modal";
import { specialeffect } from "./gamelogic/singlelogic";

export default function Play() {
    const {cards,removecards} = useCard();
    const [menuopen, setMenuopen] = React.useState(false);
    const [currentround, setcurrentround] = React.useState(1);
    const totalround = 9;
    const [myscore, setMyScore] = React.useState(0);
    const [oppscore, setOppScore] = React.useState(0);
    const [timer, setTimer] = React.useState(30);
    const [reset, setReset] = React.useState(false);
    const [stop, setStop] = React.useState(true);
    const [mycommoncard, setMyCommonCard] = React.useState<number>(0);
    const [myspecialcard, setMySpecialCard] = React.useState<number>(0);
    const [gamestate, setGameState] = React.useState<'selecting' | 'revealing' | 'vs'>('selecting');
    const [mycardready, setMyCardReady] = React.useState(false);
    const [notreadymodal, setNotReadyModal] = React.useState(false);
    const [oppcommoncard, setOppCommonCard] = React.useState<number>(0);
    const [oppspecialcard, setOppSpecialCard] = React.useState<number>(0);
    const [oppcurrentspecialcount, setOppCurrentSpecialCount] = React.useState(0); //상대가 현재 사용한 특수 카드 수
    const [myflip, setmyFlip] = React.useState<'opening' | 'closing' | 'none'>('none');
    const [oppflip, setoppFlip] = React.useState<'opening' | 'closing' | 'none'>('none');
    const [gamestart,setGamestart] = useState(true)
    const [gameend,setGameend] = useState(false);
    const goback = back()
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
    useEffect(()=>{
        
        const timer = setTimeout(() => {
            setStop(false)
            setReset(prev=>!prev)
            setGamestart(false)
        }, 2000);
        
        return ()=>clearTimeout(timer)
        
    },[])
    //게임 종료 확인 부분
    function gameisend()
    {
        let length = cards.length;
        if(length === 0)
            setGameend(true)
        else{
            if(currentround === totalround)
            {
                let count = 0;
                count = cards.filter(c => c.id <= 3).length;
                if(count === 0)
                    setGameend(true)
            }
        }
    }
    

    //타이머 만료시 자동 선택 및 진행
    useEffect(()=>{
        if(timer === 0 && (mycommoncard === 0))
        {
            
            let card = cards.find(card => card.id <=3)
            if(card)
                cardselect(card.id);
            setGameState('revealing')
        }
        if(timer === 0 && (mycommoncard !== 0))
            setGameState('revealing')
    },[timer])
  
   
    //게임 진행 부분
    useEffect(() => {
        if (gamestate === 'revealing' ) {
            setStop(true);
            setOppCommonCard(Math.floor(Math.random() * 3) + 1);
            let use = Math.floor(Math.random() * 2); //특수 카드 사용할지 말지 결정, 사용 이 뜨거나 남은 라운드가 곧 남은 특수 카드 수와 같으면 사용
            if((use === 1 && oppcurrentspecialcount < 5) || (oppcurrentspecialcount === (totalround - currentround -1))){
                let tmp = Math.floor(Math.random() * 12) + 4;
                setOppSpecialCard(tmp);
                setOppCurrentSpecialCount((prev)=>prev +1);
            }
            else{
                setOppSpecialCard(0); //특수 카드 사용 안함
            } 
            //setOppSpecialCard(9);  // 디버깅 위해서
            //setOppCommonCard(3)
            
            
            
            setTimeout(() => {
                setGameState('vs');
            }, 3000);
        }
        else if (gamestate === 'vs') {
            specialeffect(mycommoncard as number, oppcommoncard as number, myspecialcard as number, oppspecialcard as number,myflip, setmyFlip,
            oppflip, setoppFlip,
            setMySpecialCard,setOppSpecialCard,
            setMyCommonCard,
            setOppCommonCard,
            myscore, setMyScore,
            oppscore, setOppScore
            );
            
            setTimeout(() => {
                setGameState('selecting');
                removecards(mycommoncard as number);
                removecards(myspecialcard as number);
                setMyCommonCard(0);
                setMySpecialCard(0);
                setOppCommonCard(0);
                setOppSpecialCard(0);
                if(currentround < 9)
                    setcurrentround((prev)=>prev +1);
                
            }, 2000);
        }
        else{
            if(!gamestart)
            {
                setStop(false);
                setReset(!reset)
                gameisend();
            }
        }
    }, [gamestate]);

    //타이머 재메뉴 부분
    useEffect(() => {
        setTimer(30);
    }, [reset]);

    //타이머 진행 부분
    useEffect(() => {
        if (timer === 0 || stop || gamestart) return;
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(countdown);
    }, [timer, stop]);
    const cardselect = (id:number) => {
        if(id <=3){
            setMyCommonCard(id);
        }
        else{
            setMySpecialCard(id);
        }
    };

    //일반 카드 선택 했는 지 확인 부분
    useEffect(() => {
        if(mycommoncard !== 0){
            setMyCardReady(true);
        }
        else{
            setMyCardReady(false);
        }
    }, [mycommoncard]);
    return(
        <div className="bg-base-color w-screen h-screen">
            <div className="pt-3 flex justify-between px-4">
                        <button className="back_button" onClick={()=>{goback()}}>뒤로가기</button>
                        <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={()=>setMenuopen(!menuopen)}
                        className="mid:w-[70px] mid:h-[70px]
                        w-[50px] h-[50px] cursor-pointer
                        "/>
            </div>
            <div className="flex justify-between px-5 h-full">
                <div className="items-center flex flex-col gap-[20px] justify-center h-screen pb-40"> 
                    {/*좌측 화면, 구성 요소 : 라운드 표기, 상대 점수, 내 점수, 타이머 */}
                    <div className="text-white text-[36px] border-3 border-white px-2 py-2 rounded-[10px] w-[110px]"> {/*라운드 표기*/}
                        {currentround} / {totalround}
                    </div>
                    <div className="text-white text-[36px] border-4 border-[#FF2A2A] px-2 py-2 rounded-[10px] w-[110px]" onClick={()=>setGameState('selecting')}>
                        {oppscore} 점
                    </div>
                    <div className="text-white text-[36px] border-4 border-[#55d532] px-2 py-2 rounded-[10px] w-[110px]" onClick={()=>{setStop(!stop)}}>
                        {myscore} 점
                    </div>
                    <div className="text-white text-[36px] border-3 border-white px-2 py-2 rounded-[10px] w-[110px]" onClick={()=>setReset(!reset)}>
                        {timer} 초
                    </div>
                </div>

                <div className={`flex flex-col flex-1 transition-all duration-1000 ease-out
                ${gamestate === 'selecting' ? 'justify-start items-center pt-[30px] gap-[20px]' : 'items-center justify-end pb-5 gap-[20px]'}`}>
                    {/*중앙 화면, 구성 요소 : 선택한 카드가 보이는 부분*/}
                    {
                        gamestate === 'selecting' ? (null) : (
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex items-center justify-center gap-[20px]"> 
                                    <div className={`border-3 border-white rounded-[10px] cursor-pointer w-[200px] h-[270px]
                                    ${oppflip === 'closing' ? 'scale-0' : oppflip === 'opening' ? 'scale-100 ' : ' '}
                                    `} >
                                        {/*상대가 고른 일반 카드*/}
                                        <img src={oppcommoncard ? `/images/${getcardname(oppcommoncard)}.png` : "/images/카드뒷면.png"} alt="상대가 고른 일반 카드" className="w-full h-full object-cover rounded-[10px]" />
                                    </div>
                                    <div className={`border-3 border-white rounded-[10px] cursor-pointer w-[200px] h-[270px]`} >
                                        {/*상대가 고른 특수 카드*/}
                                        <img src={oppspecialcard ? `/images/${getcardname(oppspecialcard)}.png` : "/images/카드뒷면.png"} alt="상대가 고른 특수 카드" className="w-full h-full object-cover rounded-[10px]" />
                                    </div>
                                </div>
                                <div className="text-white text-[40px]">
                                    VS
                                </div>
                            </div>
                        )
                    }
                    <div className="flex items-center justify-center gap-[20px]"> 
                        <div className={`border-3 border-white rounded-[10px] cursor-pointer ${gamestate === 'selecting' ? 'w-[360px] h-[470px]' : 'w-[200px] h-[270px]'}
                        ${myflip === 'closing' ? 'scale-0' : myflip === 'opening' ? 'scale-100 ' : ' '}
                        `} onClick={gamestate === 'selecting' ? () => {setMyCommonCard(0)} : undefined}>
                            {/*내가 고른 일반 카드*/}
                            <img src={mycommoncard ? `/images/${getcardname(mycommoncard)}.png` : "/images/카드뒷면.png"} alt="내가 고른 일반 카드" className="w-full h-full object-cover rounded-[10px]" />
                        </div>
                        <div className={`border-3 border-white rounded-[10px] cursor-pointer ${gamestate === 'selecting' ? 'w-[360px] h-[470px]' : 'w-[200px] h-[270px]'}`} onClick={gamestate === 'selecting' ? () => {setMySpecialCard(0)} : undefined}>
                            {/*내가 고른 특수 카드*/}
                            <img src={myspecialcard ? `/images/${getcardname(myspecialcard)}.png` : "/images/카드뒷면.png"} alt="내가 고른 특수 카드" className="w-full h-full object-cover rounded-[10px]" />
                        </div>
                    </div>
                    <div className={`items-center justify-center flex ${gamestate === 'selecting' ? 'opacity-100' : 'opacity-0'}`}>
                        {
                            mycardready ? (
                                <button className="text-white text-[40px] border-white border-5 rounded-[10px] px-5 items-center justify-center pt-1 cursor-pointer" onClick={()=>setGameState('revealing')}>
                                    확인
                                </button>
                            ) :(
                                <button className="text-white text-[40px] border-white border-5 rounded-[10px] px-5 items-center justify-center pt-1 cursor-pointer" onClick={()=>{setNotReadyModal(true)}}>
                                    확인
                                </button>
                            )
                        }
                    </div>

                </div>
                <div className="h-screen flex pt-3">
                    {/*우측 화면, 구성 요소 : 내 덱 표시 되게*/}
                    <div className=" flex h-[590px] w-[490px] flex-wrap overflow-y-auto border-5 border-white rounded-[10px] items-center justify-center">
                        {cards.map((card)=>(
                            <div key={card.id} className="flex items-center justify-center w-1/2 cursor-pointer" onClick={gamestate === 'selecting' ? () => {cardselect(card.id)} : undefined}>
                                <img src={`/images/${getcardname(card.id)}.png`} alt={`${getcardname(card.id)} 카드`} className="w-[190px] h-[235px] inline-block m-2"/>
                                <div className="text-[30px] text-white text-center">x{card.count}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Menu open={menuopen} setOpen={setMenuopen}/>
            <Modal isopen={notreadymodal} onClose={()=>setNotReadyModal(false)}>
                <div className="text-white text-[24px] bg-[#130637] border-4 border-whtite p-5 rounded-[10px]">
                    일반 카드를 반드시 선택해야 합니다.
                </div>
            </Modal>
            
            {
                gamestart ? (
                    <div className="flex z-50 fixed inset-0 items-center justify-center">
                        <div className="flex px-5 py-5 text-[200px] border-white border-4 text-white bg-[#130637] items-center justify-center rounded-[10px]">
                            게임 시작
                        </div>
                    </div>
                ):null
            }
            {
                gameend ? (oppscore > myscore) ? (
                    <div className="flex z-50 fixed inset-0 items-center justify-center pointer-events-none">
                        <div className="flex px-5 py-5 text-[200px] border-white border-4 text-white bg-[#130637] items-center justify-center rounded-[10px]">
                            패배
                        </div>
                    </div>
                ) : (oppscore === myscore) ? (
                    <div className="flex z-50 fixed inset-0 items-center justify-center pointer-events-none">
                        <div className="flex px-5 py-5 text-[200px] border-white border-4 text-white bg-[#130637] items-center justify-center rounded-[10px]">
                            무승부
                        </div>
                    </div>
                ) : (
                    <div className="flex z-50 fixed inset-0 items-center justify-center pointer-events-none">
                        <div className="flex px-5 py-5 text-[200px] border-white border-4 text-white bg-[#130637] items-center justify-center rounded-[10px]">
                            승리
                        </div>
                    </div>
                ) : null
            }
        </div>
        
    );
}