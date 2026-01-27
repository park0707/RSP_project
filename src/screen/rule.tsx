import { back } from "./back";
import { useState } from "react";
import Menu from "./menu_parts/menu";
export default function Rule () {
    const [menuopen, setMenuopen] = useState(false);
    const [ruletype,setRuletype] = useState(false); //false면 싱글 & 멀티 플레이 true면 도전
    const goback = back()
    return (
        <div className="flex flex-col bg-base-color w-screen h-screen">
            <div className="pt-3 flex justify-between px-4">
                           <button className="back_button" onClick={()=>{goback()}}>뒤로가기</button>
                           <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={()=>setMenuopen(!menuopen)}
                           className="mid:w-[70px] mid:h-[70px]
                           w-[50px] h-[50px] cursor-pointer
                           "/>
            </div>
            <div className="flex justify-center  text-[45px] gap-[30px]">
                <div className={`
                    cursor-pointer px-2 py-2 rounded-[20px] border-4
                    ${ruletype ? "text-slate-400 border-slate-500" : "text-white border-white"}
                `} onClick={()=>setRuletype(false)}>
                    싱글 플레이 & 멀티 플레이
                </div>
                <div className={`
                    cursor-pointer px-2 py-2 rounded-[20px] border-4
                    ${ruletype ? "text-white border-white" : "text-slate-400 border-slate-500"}
                `} onClick={()=>setRuletype(true)}>
                    도전
                </div>
            </div>
            <div className="pt-10 text-[40px] text-white flex items-center justify-center">
                {ruletype===false ? (
                    <div className="flex flex-col gap-[20px] text-left ">
                        <p>
                            싱글 플레이와 멀티 플레이는 일반 카드 9장, 특수 카드 5장을 사용합니다.
                        </p>
                        <p>
                            각 플레이어는 직접 카드를 선택하거나 랜덤으로 플레이 할지 고를 수 있습니다.
                        </p>
                        <p>
                            각 라운드마다 일반 카드 1장과 특수 카드 사용 여부를 결정합니다.
                        </p>
                        <p>
                            양 플레이어 모두 결정하면 카드를 공개하고 승패를 결정하여 승자가 1점을 얻습니다.
                        </p>
                        <p>
                            9라운드가 끝나고 점수가 더 높은 쪽이 승리합니다.
                        </p>
                                          
                        
                    </div>
                ): (
                    <div className="flex flex-col gap-[20px] text-left ">
                        <p>
                            도전은 보스를 상대하는 싱글 플레이 모드 입니다.
                        </p>
                        <p>
                            각 보스는 고유의 특수 카드와 기믹을 가지고 있으며, 이를 전략적으로 대응해야 합니다.
                        </p>
                        <p>
                            도전 모드에서는 플레이어는 일반 카드 3장을 받은 상태에서 시작합니다. 
                        </p>
                        <p>
                            일반 카드는 사용시 랜덤한 일반 카드로 보충됩니다.   
                        </p>
                        <p>
                            특수 카드는 직접 구성해서 사용할 수 있고 보충 되지 않습니다.
                        </p>
                        <p>
                            보스와 플레이어 모두 체력을 가지고 있고 가위바위보에서 승리시 상대방에게 피해를 1 줍니다
                        </p>
                    </div>
                )
                }
            </div>












           <Menu open={menuopen} setOpen={setMenuopen}/>
            
            
        </div>
    );
}