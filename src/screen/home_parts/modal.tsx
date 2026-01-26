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
            <div className="bg-black/50 fixed inset-0 z-40" >
                
            </div>
            <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
                <div className="relative" >
                    {children}
                </div>
                
            </div>
            
        </>
    ); 
}