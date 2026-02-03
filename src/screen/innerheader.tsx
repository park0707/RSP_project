import { back } from "./back";
import { useState } from "react";
import Menu from "./menu_parts/menu";
export default function Innerheader(){
    const [menuopen,setMenuopen] = useState(false)
    const goback = back()
    return(
        <div>
            <div className="pt-3 flex justify-between px-4">
                            <button className="back_button" onClick={()=>{goback()}}>뒤로가기</button>
                            <img src="/images/메뉴.png" alt="메뉴 아이콘" onClick={()=>setMenuopen(!menuopen)}
                            className="mid:w-[70px] mid:h-[70px]
                            w-[50px] h-[50px] cursor-pointer
                            "/>
            </div>
            <Menu open={menuopen} setOpen={setMenuopen}/>
        </div>
    )
}