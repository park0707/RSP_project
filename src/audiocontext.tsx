import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
interface AudioContextType {
  allmute: boolean;
  effectmute: boolean;
  clickmute: boolean;
  allvolume: number;
  effectvolume: number;
  clickvolume: number;
  setAllmute: (value: boolean) => void;
  setEffectmute: (value: boolean) => void;
  setClickmute: (value: boolean) => void;
  setAllvolume: (value: number) => void;
  setEffectvolume: (value: number) => void;
  setClickvolume: (value: number) => void;
}
const AudioContext = createContext<AudioContextType | undefined>(undefined);
export function AudioProvider({ children }: { children: ReactNode }) {
  const [allmute, setAllmute] = useState(false);
  const [effectmute, setEffectmute] = useState(false);
  const [clickmute, setClickmute] = useState(false);
  const [allvolume, setAllvolume] = useState(100);
  const [effectvolume, setEffectvolume] = useState(100);
  const [clickvolume, setClickvolume] = useState(100);
return (
    <AudioContext.Provider
    value={{
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
    }}
    >
    {children}
    </AudioContext.Provider>
);
}
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}