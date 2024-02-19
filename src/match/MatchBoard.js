import { useEffect, useState } from "react";
import Card from "./Card";

export default function MatchBoard() {

    const [cards, setCards] = useState([])
    const [showCards, setShowCards] = useState(Array(16).fill(true))
    const [matched, setMatched] = useState([])
    const [card, setCard] = useState(null)

    useEffect(() => {
        const symbols = ["❤️", "🎻", "🌸", "🚴", "👑", "🃏", "🎲", "🎱"]
        const deck = [...symbols, ...symbols].sort(() => 0.5 - Math.random())
        setCards(deck)
    }, [])

    useEffect(() => {
        const hideCards = Array(16).fill(false)
        console.log("Hiding cards in 2 seconds...")
        const hideTime = setTimeout(() => {
            setShowCards(hideCards)
        }, 2000)
    }, [])

    const handleClick = (index) => {
        {/** have a counter to check/keep track to how many matched cards. also if we can keep track of how many moves/score the player has */ }

        if (card !== null) {
            if (cards[index] === cards[card]) {
                {/* records true to index and card(flipped card) in matched */ }

            }
            {/** put here what happens if card don't match. setTimeout(), 200 to have a bit of delay till cards are flipped back to null/empty */ }

        }
        else {
            {/** this should only happen if there is no flipped card */ }
            const flipCard = showCards.slice()
            flipCard[index] = true
            setShowCards(flipCard)
            setCard(index)
        }
    }

    return (
        <>
            <div className="grid grid-rows-5">
                <div></div>
                <div className="grid grid-cols-4 place-content-center gap-4 row-span-3">
                    <Card value={cards[0]} handleCardClick={() => handleClick(0)} flip={showCards[0]} match={matched[0]} />
                    <Card value={cards[1]} handleCardClick={() => handleClick(1)} flip={showCards[1]} match={matched[1]} />
                    <Card value={cards[2]} handleCardClick={() => handleClick(2)} flip={showCards[2]} match={matched[2]} />
                    <Card value={cards[3]} handleCardClick={() => handleClick(3)} flip={showCards[3]} match={matched[3]} />
                    <Card value={cards[4]} handleCardClick={() => handleClick(4)} flip={showCards[4]} match={matched[4]} />
                    <Card value={cards[5]} handleCardClick={() => handleClick(5)} flip={showCards[5]} match={matched[5]} />
                    <Card value={cards[6]} handleCardClick={() => handleClick(6)} flip={showCards[6]} match={matched[6]} />
                    <Card value={cards[7]} handleCardClick={() => handleClick(7)} flip={showCards[7]} match={matched[7]} />
                    <Card value={cards[8]} handleCardClick={() => handleClick(8)} flip={showCards[8]} match={matched[8]} />
                    <Card value={cards[9]} handleCardClick={() => handleClick(9)} flip={showCards[9]} match={matched[9]} />
                    <Card value={cards[10]} handleCardClick={() => handleClick(10)} flip={showCards[10]} match={matched[10]} />
                    <Card value={cards[11]} handleCardClick={() => handleClick(11)} flip={showCards[11]} match={matched[11]} />
                    <Card value={cards[12]} handleCardClick={() => handleClick(12)} flip={showCards[12]} match={matched[12]} />
                    <Card value={cards[13]} handleCardClick={() => handleClick(13)} flip={showCards[13]} match={matched[13]} />
                    <Card value={cards[14]} handleCardClick={() => handleClick(14)} flip={showCards[14]} match={matched[14]} />
                    <Card value={cards[15]} handleCardClick={() => handleClick(15)} flip={showCards[15]} match={matched[15]} />
                </div>
                <div></div>

            </div>
        </>
    )
}