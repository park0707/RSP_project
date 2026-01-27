import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Menu from "./menu_parts/menu.tsx";
import Modal from "./home_parts/modal.tsx";
import Sisser from "./cards/sisser.tsx";
import Rock from "./cards/rock.tsx";
import Papper from "./cards/papper.tsx";
import Swap from "./cards/swap.tsx";
import CriticalHit from "./cards/criticalhit.tsx";
import Predict from "./cards/predict.tsx";
import Block from "./cards/block.tsx";
import Steel from "./cards/steel.tsx";
import Watch from "./cards/watch.tsx";
import Exchange from "./cards/exchange.tsx";
import Front from "./cards/front.tsx";
import Defeat from "./cards/defeat.tsx";
import Highriskhighreturn from "./cards/highriskhighreturn.tsx";
import Cheat from "./cards/cheat.tsx";
import Moordo from "./cards/moordo.tsx";
export default function Cards() {
    const [menuopen, setMenuopen] = useState(false);
    const togglesetting = () => {
        setMenuopen(!menuopen);
    };
    const [moordo,setmoordo] = useState(false);
    const [cheat,setcheat] = useState(false);
    const [highriskhighreturn,sethighriskhighreturn] = useState(false);
    const [defeat,setdefeat] = useState(false);
    const [front,setfront] = useState(false);
    const [special,setspecial] = useState(false);
    const [exchange,setexchange] = useState(false);
    const [sisser,setsisser] = useState(false);
    const [rock,setrock] = useState(false);
    const [papper,setpapper] = useState(false);
    const [swap,setswap] = useState(false);
    const [criticalhit,setcriticalhit] = useState(false);
    const [predict,setpredict] = useState(false);
    const [block,setblock] = useState(false);
    const [steel,setsteel] = useState(false);
    const [watch,setwatch] = useState(false);
    return (
        <div className="flex flex-col bg-base-color w-screen h-screen">
            <div className="pt-3 flex justify-between px-4">
                <Link to="/">
                        <button className="back_button">뒤로가기</button>
                </Link>
                <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={togglesetting}
                className="mid:w-[70px] mid:h-[70px]
                w-[50px] h-[50px] cursor-pointer
                "/>
            </div>
            <div className="flex justify-center text-white text-[45px] gap-[30px]">
                <div className="cursor-pointer border-4 border-white px-2 py-2 rounded-[20px]" onClick={()=>setspecial(false)}>
                    일반 카드
                </div>
                <div className="cursor-pointer border-4 border-white px-2 py-2 rounded-[20px]" onClick={()=>setspecial(true)}>
                    특수 카드
                </div>
            </div>
            <div className="border-white border-4 mx-4 my-4 rounded-[15px] overflow-y-auto px-2">
                {special === false ? (
                    <div className="flex gap-20 h-full items-center justify-center">
                        <img src="/images/가위.png" alt="가위 카드" className="card" onClick={()=>{setsisser(!sisser)}}/>
                        <img src="/images/바위.png" alt="바위 카드" className="card" onClick={()=>{setrock(!rock)}}/>
                        <img src="/images/보.png" alt="보 카드" className="card" onClick={()=>{setpapper(!papper)}}/>
                    </div>
                ) : (
                    <div className="flex-wrap gap-20 h-full items-center pl-[97px] inline-flex">
                        <img src="/images/뒤집기.png" alt="뒤집기 카드" className="card" onClick={()=>{setswap(!swap)}}/>
                        <img src="/images/강타.png" alt="강타 카드" className="card" onClick={()=>{setcriticalhit(!criticalhit)}}/>
                        <img src="/images/예측.png" alt="예측 카드" className="card" onClick={()=>{setpredict(!predict)}}/>
                        <img src="/images/방해.png" alt="방해 카드" className="card" onClick={()=>{setblock(!block)}}/>
                        <img src="/images/갈취.png" alt="갈취 카드" className="card" onClick={()=>{setsteel(!steel)}}/>
                        <img src="/images/흉조.png" alt="흉조 카드" className="card" onClick={()=>{setwatch(!watch)}}/>
                        <img src="/images/공유.png" alt="공유 카드" className="card" onClick={()=>{setexchange(!exchange)}}/>
                        <img src="/images/앞서기.png" alt="한 발짝 앞서기 카드" className="card" onClick={()=>{setfront(!front)}}/>
                        <img src="/images/전략적패배.png" alt="전략적 패배 카드" className="card" onClick={()=>{setdefeat(!defeat)}}/>
                        <img src="/images/하이리스크하이리턴.png" alt="하이 리스크 하이 리턴 카드" className="card" onClick={()=>{sethighriskhighreturn(!highriskhighreturn)}}/>
                        <img src="/images/사기.png" alt="사기 카드" className="card" onClick={()=>{setcheat(!cheat)}}/>
                        <img src="/images/모아니면도.png" alt="모아니면도 카드" className="card" onClick={()=>{setmoordo(!moordo)}}/>
                    </div>
                )}
            </div>
            <Modal isopen={moordo} onClose={()=>setmoordo(false)}>
                <Moordo/>
            </Modal>
            <Modal isopen={cheat} onClose={()=>setcheat(false)}>
                <Cheat/>
            </Modal>
            <Modal isopen={highriskhighreturn} onClose={()=>sethighriskhighreturn(false)}>
                <Highriskhighreturn/>
            </Modal>
            <Modal isopen={defeat} onClose={()=>setdefeat(false)}>
                <Defeat/>
            </Modal>
            <Modal isopen={front} onClose={()=>setfront(false)}>
                <Front/>
            </Modal>
            <Modal isopen={exchange} onClose={()=>setexchange(false)}>
                <Exchange/>
            </Modal>
            <Modal isopen={watch} onClose={()=>setwatch(false)}>
                <Watch/>
            </Modal>
            <Menu open={menuopen} setOpen={setMenuopen}/>
            <Modal isopen={sisser} onClose={()=>setsisser(false)}>
                <Sisser/>
            </Modal>
            <Modal isopen={rock} onClose={()=>setrock(false)}>
                <Rock/>
            </Modal>
            <Modal isopen={papper} onClose={()=>setpapper(false)}>
                <Papper/>
            </Modal>
            <Modal isopen={swap} onClose={()=>setswap(false)}>
                <Swap/>
            </Modal>
            <Modal isopen={criticalhit} onClose={()=>setcriticalhit(false)}>
                <CriticalHit/>
            </Modal>
            <Modal isopen={predict} onClose={()=>setpredict(false)}>
                <Predict/>
            </Modal>
            <Modal isopen={block} onClose={()=>setblock(false)}>
                <Block/>
            </Modal>
            <Modal isopen={steel} onClose={()=>setsteel(false)}>
                <Steel/>
            </Modal>
        </div>
    );
}