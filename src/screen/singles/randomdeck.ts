interface card {
    id: number; 
    count: number;
}
export function randomdeck(addcard:(card:card)=>void){
    for(let i = 0;i<9;i++)
    {
        let newcard = {id:Math.floor(Math.random() * 3) + 1,count:1}
        addcard(newcard)
        console.log('일반 카드 추가',newcard,"id : ",newcard.id)
    }
    for(let i = 0;i<5;i++)
    {
        let newcard = {id:Math.floor(Math.random() * 12) + 4,count:1}
        addcard(newcard)
        console.log('특수 카드 추가',newcard,"id : ",newcard.id)
    }
}