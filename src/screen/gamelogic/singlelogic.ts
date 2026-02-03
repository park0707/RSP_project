import React from "react";
//점수 반영
    function scorehandler(result: number, 
        setMyScore: React.Dispatch<React.SetStateAction<number>>, setOppScore: React.Dispatch<React.SetStateAction<number>>):void {
        
        if(result === 1){   
            setMyScore((prev)=>prev +1);
        }
        if(result === -1){
            setOppScore((prev)=>prev +1);
        }
    };

    //승패 판단
    function whosewin(mycommon:number, oppcommon:number):-1|0|1 {
        if(mycommon === oppcommon){
                return 0;
            }
            if((mycommon   === 1 && oppcommon === 3) ||
                    (mycommon === 2 && oppcommon === 1) ||
                    (mycommon === 3 && oppcommon === 2)){
                return 1;
            }
            else{
                return -1;
            }
    };
    //갈취 적용 부분 함수
    function special8(oppscore:number, myscore:number,setOppScore:React.Dispatch<React.SetStateAction<number>>,
        setMyScore:React.Dispatch<React.SetStateAction<number>>
    )
    {
         setTimeout(() => {
            if(Math.abs(oppscore-myscore) >= 3)
            {
                if(myscore < oppscore)
                {
                    setOppScore(prev=>prev-1)
                    setMyScore(prev=>prev+1)
                }
            }
         }, 500);
    }


    //흉조 적용 부분 함수
    function specail9(vsresult:-1|0|1,
        setMyScore:React.Dispatch<React.SetStateAction<number>>,
        setOppScore:React.Dispatch<React.SetStateAction<number>>,
        oppscore:number,myscore:number
        
    )
    {
        setTimeout(() => {
                if(vsresult === 1){ //내가 이겼을 때
                    if(oppscore >=1){
                        setOppScore((prev)=>prev -1); //상대 점수 1점 감소
                        setMyScore((prev)=>prev +1); //내 점수 1점 증가
                    }
                    else{
                        
                    }
                    
                }
                if(vsresult === -1){ //내가 졌을 때
                    
                    if(myscore >=1){
                        setMyScore((prev)=>prev -1); //내 점수 1점 감소
                        setOppScore((prev)=>prev +1);
                    }
                    else{
                        
                    }
                }
                else{ //비겼을 때
                    return;
                }
            }, 1000);
    }

    //앞서기 적용 함수
    function special11(vsresult:-1|0|1,
        setMyScore:React.Dispatch<React.SetStateAction<number>>)
        {
            if(vsresult === 0)
            {
                setMyScore(prev=>prev+1)
            }
        }

    //전략적 패배 함수
    function special12(vsresult:-1|0|1,setMyScore:React.Dispatch<React.SetStateAction<number>>)
    {
        if(vsresult === -1)
        {
            setMyScore(prev=>prev+1)
        }
    }
    
    // 하이리스크 하이리턴 함수
    function special13(vsresult:-1|0|1,setMyScore:React.Dispatch<React.SetStateAction<number>>,myscore:number)
    {
        setTimeout(() => {
            if(vsresult === -1)
            {
                if(myscore >= 3)
                {
                    setMyScore(prev=>prev-3)
                }
                else
                    setMyScore(0)
            }
            if(vsresult === 1)
            {
                setMyScore(prev=>prev+3)
            }
        }, 1000);
    }

    //특수 카드 6,8,9,11,12,13의 동작 함수
    function somespecialeffect(mycommoninit:number, oppcommoninit:number, myspecialinit:number, oppspecialinit:number,myscore:number, oppscore:number,
        setMyScore: React.Dispatch<React.SetStateAction<number>>, setOppScore: React.Dispatch<React.SetStateAction<number>>,
    ):-1|0|1
    {
        let vsresult: -1|0|1;
        let mycommon = mycommoninit;
        let oppcommon = oppcommoninit;
        let myspecial = myspecialinit;
        let oppspecial = oppspecialinit;
        if(oppspecial === 6 ){ //상대가 예측
            if(myspecial !== 0)
            {
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
            }
            else{
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                setOppScore((prev)=>prev +1); //상대 점수 1점 증가
            }
            return vsresult
        }
        if(oppspecial === 8){ //상대가 갈취
            
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special8(myscore,oppscore,setMyScore,setOppScore)
                return vsresult
        }
        if(oppspecial === 9){ //상대가 흉조
            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
            scorehandler(vsresult,setMyScore,setOppScore);
            if(myspecial !== 9)
                specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)    
            return vsresult
        }
        if(oppspecial === 11){ //상대가 앞서기
            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
            scorehandler(vsresult,setMyScore,setOppScore);
            special11(vsresult,setOppScore);
            return vsresult
        }
        if(oppspecial === 12){ //상대가 전략적패배
            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
            scorehandler(vsresult,setMyScore,setOppScore);
            special12(vsresult,setOppScore)
            return vsresult
        }
        if(oppspecial === 13){ //상대가 하이리스크하이리턴
            vsresult = whosewin(oppcommon, mycommon); //일단 승패 판단
            scorehandler(vsresult,setOppScore,setMyScore);
            special13(vsresult,setOppScore,oppscore)
            return vsresult
        }
        else{
            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
            scorehandler(vsresult,setMyScore,setOppScore);
        }

        return vsresult;    
    }

 
    //특별 카드의 결과 적용 부분
    export function specialeffect(mycommominit:number, oppcommoninit:number, myspecialinit:number, oppspecialinit:number,
        myflip: 'none' | 'opening' | 'closing', setmyFlip: React.Dispatch<React.SetStateAction<'none' | 'opening' | 'closing'>>,
        oppflip: 'none' | 'opening' | 'closing', setoppFlip: React.Dispatch<React.SetStateAction<'none' | 'opening' | 'closing'>>,
        setMySpecialCard: React.Dispatch<React.SetStateAction<number>>,setoppspecialCard: React.Dispatch<React.SetStateAction<number>>,
        setMyCommonCard: React.Dispatch<React.SetStateAction<number>>,
        setOppCommonCard: React.Dispatch<React.SetStateAction<number>>,
        myscore:number, setMyScore: React.Dispatch<React.SetStateAction<number>>,
        oppscore:number, setOppScore: React.Dispatch<React.SetStateAction<number>>
    ) {
        let vsresult: -1|0|1;
        let mycommon = mycommominit;
        let oppcommon = oppcommoninit;
        let myspecial = myspecialinit;
        let oppspecial = oppspecialinit;
        if(myspecial === 4){ //뒤집기
            mycommon = oppcommoninit
            oppcommon = mycommominit
            if(oppspecial === 4){ //상대도 뒤집기
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(oppcommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return;
            }
            if(oppspecial === 7){ //상대가 방해
                mycommon = mycommominit
                oppcommon = oppcommoninit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                mycommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단 왜냐면 난 이미 뒤집기니까
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setoppFlip('closing');
                oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setOppCommonCard(oppcommon);
                mycommon = oppcommon
                oppcommon = mycommominit
                setTimeout(() => {    
                    setoppFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setoppFlip('none');
                    }, 20);
                }, 20);
                
                return
            }
            else{
                somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
            }
        }
        if(myspecial === 5){ //강타
            console.log('원래 상대 카드',oppcommon)
            if(oppspecial !== 7 && oppspecial !== 14)
            {
                setoppFlip('closing');
                oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                console.log('내 강타 적용',oppcommon)
                setOppCommonCard(oppcommon);
                setTimeout(() => {    
                    setoppFlip('opening');
                    setTimeout(() => {       
                        setoppFlip('none');
                    }, 20);
                }, 20);
                
            }
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return;
            }
            if(oppspecial === 7){ //상대가 방해
                mycommon = mycommominit
                oppcommon = oppcommoninit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    console.log('상대 모아니면도 적용',oppcommon)    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 200);
                
                return
                
            }
            else{
                somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
            }
            
            console.log('최종 일반 카드',oppcommon)
        }
        if(myspecial === 6){ //예측
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
                
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                
                return
            }
            else{
                somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                if(oppspecial === 0)
                {
                    setMyScore(prev=>prev+1)
                }
            }
            
        }
        if(myspecial === 7){ //방해
            vsresult = whosewin(mycommominit,oppcommoninit);
            scorehandler(vsresult,setMyScore,setOppScore);
        }
        if(myspecial === 8){ //갈취
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special8(oppscore,myscore,setOppScore,setMyScore)
                return
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        special8(oppscore,myscore,setOppScore,setMyScore)
                
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special8(oppscore,myscore,setOppScore,setMyScore)
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            special8(oppscore,myscore,setOppScore,setMyScore)
                
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                special8(oppscore,myscore,setOppScore,setMyScore)
                
            }
           
        }
        if(myspecial === 9){ //흉조
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)
                return
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                specail9(vsresult,setMyScore,setOppScore,oppscore,myscore)
            }
            
        }
        if(myspecial === 10){ //공유
            if(oppspecial !== 7 && oppspecial !== 14 && oppspecial !== 15)
            {
                mycommon = oppcommoninit;
                setMyCommonCard(oppcommoninit)
            }
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
                
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    setmyFlip('closing')
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    setMyCommonCard(oppcommon)
                    mycommon = oppcommon
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setmyFlip('opening')
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            setoppFlip('none');
                            setmyFlip('none')
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
            }
            return
        }
        if(myspecial === 11){ //앞서기
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special11(vsresult,setMyScore)
                return
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        special11(vsresult,setMyScore)
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special11(vsresult,setMyScore)
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            special11(vsresult,setMyScore)
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                
                return
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                special11(vsresult,setMyScore)
            }
            return
        }
        if(myspecial === 12){ //전략적 패배
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special12(vsresult,setMyScore)
                return
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        special12(vsresult,setMyScore)
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special12(vsresult,setMyScore)
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            special12(vsresult,setMyScore)
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                special12(vsresult,setMyScore)
            }
            
        }
        if(myspecial === 13){ //하이리스크 하이리턴
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special13(vsresult,setMyScore,myscore)
                return
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        special13(vsresult,setMyScore,myscore)
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                special13(vsresult,setMyScore,myscore)
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            special13(vsresult,setMyScore,myscore)
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                special13(vsresult,setMyScore,myscore)
            }
            
        }
        if(myspecial === 14){ //사기
            if(oppspecial !== 4)
            {
                setoppspecialCard(4);
                specialeffect(mycommominit,oppcommoninit,myspecialinit,4,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
            }
            else{
                mycommon = oppcommoninit
                oppcommon = mycommominit
                vsresult = whosewin(mycommon,oppcommon)
                scorehandler(vsresult,setMyScore,setOppScore)
            }
            
        }
        if(myspecial === 15){ //모아니면 도
            if(oppspecial !== 7 && oppspecial !== 14)
            {
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        setmyFlip('none');
                    }, 20);
                }, 20);
            }
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
                
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setTimeout(() => {
                    setoppFlip('closing');
                    oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                    setOppCommonCard(oppcommon);
                    
                    setTimeout(() => {    
                        setoppFlip('opening');
                        setTimeout(() => {       
                            vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                            scorehandler(vsresult,setMyScore,setOppScore);
                            setoppFlip('none');
                        }, 20);
                    }, 20);
                }, 1000);
                return
                
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                
            }
            
        }
        if(myspecial === 0){ //내가 특수 카드 없음
            if(oppspecial === 4){ //상대가 뒤집기
                mycommon = oppcommon
                oppcommon = mycommominit
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
                
            }
            if(oppspecial === 5){ //상대가 강타
                setmyFlip('closing');
                mycommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setMyCommonCard(mycommon);
                setTimeout(() => {    
                    setmyFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setmyFlip('none');
                    }, 20);
                }, 20);
                return
            }
            if(oppspecial === 7){ //상대가 방해
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return;
            }
            if(oppspecial === 10){ //상대가 공유
                oppcommon = mycommominit
                setOppCommonCard(oppcommon);
                vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                scorehandler(vsresult,setMyScore,setOppScore);
                return
            }
            if(oppspecial === 14){ //상대가 사기
                setMySpecialCard(4); //상대 특수 카드를 뒤집기로 변경
                specialeffect(mycommominit,oppcommoninit,4,oppspecialinit,myflip,
                    setmyFlip,oppflip,setoppFlip,setMySpecialCard,setoppspecialCard,setMyCommonCard,setOppCommonCard,myscore,setMyScore,
                    oppscore,setOppScore
                )
                return
            }
            if(oppspecial === 15){ //상대가 모아니면도
                setoppFlip('closing');
                oppcommon = Math.floor(Math.random() * 3) + 1; //내 일반 카드를 랜덤으로 재메뉴    
                setOppCommonCard(oppcommon);
                
                setTimeout(() => {    
                    setoppFlip('opening');
                    setTimeout(() => {       
                        vsresult = whosewin(mycommon, oppcommon); //일단 승패 판단
                        scorehandler(vsresult,setMyScore,setOppScore);
                        setoppFlip('none');
                    }, 20);
                }, 20);
                return
                
            }
            else{
                vsresult = somespecialeffect(mycommon, oppcommon, myspecial, oppspecial,myscore, oppscore,
                    setMyScore, setOppScore);
                console.log('else 실행')
            }
            
        }
        
    }