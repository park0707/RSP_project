import { createContext,useContext,useState } from "react";
import type { ReactNode } from "react";
interface card {
    id: number; //각 카드마다 고유번호 존재
    count: number;
}
interface CardContextType {
    cards: card[];
    addcards: (newcard: card) => void;
    removecards: (id: number) => void;
    clearCards: () => void;
}
const cardcontext = createContext<CardContextType | undefined>(undefined);
export function CardProvider({children}:{children:ReactNode}){
    const [cards,setcards] = useState<card[]>([]);
    const addcards = (newcard: card) => { 
        setcards(prevCards => {
            const existingCard = prevCards.find(card => card.id === newcard.id);

            if (existingCard) {
            return prevCards
                .map(card =>
                card.id === newcard.id
                    ? { ...card, count: card.count + 1 }
                    : card
                )
                .sort((a, b) => a.id - b.id);
            } else {
            return [...prevCards, newcard].sort((a, b) => a.id - b.id);
            }
        });
    };
    const removecards = (id: number) => {
        setcards(prevcards =>prevcards.map(
            card=>
                card.id === id ? { ...card, count: card.count - 1 } : card
        ).filter(card=>card.count>0));
    }
    const clearCards = () => setcards([]);
    return (
        <cardcontext.Provider value={{cards,addcards,removecards,clearCards}}>
            {children}
        </cardcontext.Provider>
    );
}
export function useCard(){
    const context = useContext(cardcontext);
      if (!context) {
    throw new Error('useCards는 CardProvider 안에서 사용해야 합니다');
  }
  return context;
}