import React from "react";
interface ModalProps {
    isopen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function Modal({isopen, onClose, children}:ModalProps) {
    if (!isopen) return null;

    return (
        <>
            <div className="bg-black/50 fixed inset-0 z-[90]" onClick={()=>{onClose()}}>
                
            </div>
            <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none" >
                <div className="relative pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
                
            </div>
            
        </>
    ); 
}