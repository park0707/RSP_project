
import { useAudio } from "../../audiocontext";
export default function Setting() {
  const {
    allmute,
    effectmute,
    clickmute,
    allvolume,
    effectvolume,
    clickvolume,
    setAllmute,
    setEffectmute,
    setClickmute,
    setAllvolume,
    setEffectvolume,
    setClickvolume,
  } = useAudio();

  const toggleallmute = () => setAllmute(!allmute);
  const toggleeffectmute = () => setEffectmute(!effectmute);
  const toggleclickmute = () => setClickmute(!clickmute);
    const handleallvolumechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value === ""){
            setAllvolume(0);
            return;
        }
        const num = Number(value);
        if(!Number.isInteger(num)){
            return;
        }
        if(num < 0 || num > 100){
            return;
        }
        setAllvolume(num);
    }
    
    const handleeffectvolumechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value === ""){
            setEffectvolume(0);
            return;
        }
        const num = Number(value);
        if(!Number.isInteger(num)){
            return;
        }
        if(num < 0 || num > 100){
            return;
        }
        setEffectvolume(num);
    }
    const handleclickvolumechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value === ""){
            setClickvolume(0);
            return;
        }
        const num = Number(value);
        if(!Number.isInteger(num)){
            return;
        }
        if(num < 0 || num > 100){
            return;
        }
        setClickvolume(num);
    }
    return (
        <div className="bg-[#130637] border-white border-5 rounded-[30px] w-[428px] h-[315px] text-white flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}>
            <div>
                <div className="flex gap-[20px] pt-[40px]">
                <button type="button" onClick={toggleallmute} className={"w-10 h-10 rounded-[10px] border-2 border-gray-400" }>
                    {allmute ? "" : "✓"} 
                </button>
                <div className="text-[25px] pt-[5px]">전체 음량</div>
                <input type="number" min={0} max={100} step={1} value={allvolume} onChange={handleallvolumechange} className="w-[70px]  bg-[#130637] border border-white rounded px-2 py-1 text-white"></input>
                </div>                
                <div className="flex gap-[20px] pt-[40px] justify-between">
                <button type="button" onClick={toggleeffectmute} className={"w-10 h-10 rounded-[10px] border-2 border-gray-400" }>
                    {effectmute ? "" : "✓"} 
                </button>
                <div className="text-[25px] pt-[5px]">효과음  </div>
                <input type="number" min={0} max={100} step={1} value={effectvolume} onChange={handleeffectvolumechange} className="w-[70px]  bg-[#130637] border border-white rounded px-2 py-1 text-white"></input>
                </div>
                <div className="flex gap-[20px] pt-[40px]">
                <button type="button" onClick={toggleclickmute} className={"w-10 h-10 rounded-[10px] border-2 border-gray-400" }>
                    {clickmute ? "" : "✓"} 
                </button>
                <div className="text-[25px] pt-[5px]">클릭 음량</div>
                <input type="number" min={0} max={100} step={1} value={clickvolume} onChange={handleclickvolumechange} className="w-[70px]  bg-[#130637] border border-white rounded px-2 py-1 text-white"></input>
                </div>
            </div>
        </div>
    );
}