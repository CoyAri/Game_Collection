import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xNext, setXNext] = useState(true)
    const [reset, setReset] = useState(false)
    const winner = calculateWinner(squares)
    let status

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares)) {
            return
        }
        const nextSquares = squares.slice()

        if (xNext) nextSquares[i] = "X"
        else nextSquares[i] = "O"

        if (squares.includes(null) === false || calculateWinner(nextSquares)) {
            setReset(true)
        }

        setSquares(nextSquares)
        setXNext(!xNext)
    }

    function handleReset() {
        const resetSquares = Array(9).fill(null)
        setReset(false)
        setXNext(true)
        setSquares(resetSquares)
    }

    if (winner) {
        status = winner + " wins!"
    }
    else if (squares.includes(null) == false) {
        status = "It's a draw... 💀"

    }
    else {
        status = (xNext ? "X" : "O") + " turn..."
    }

    return (
        <>
            <div className="grid grid-rows-5">
                <div className="text-center">{status}</div>
                <div className="bg-slate-900 grid grid-cols-3 place-content-center gap-2 row-span-3">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <div className="relative">
                    <div className="flex justify-center">
                        <button className={`${reset ? 'block' : 'hidden'} absolute bottom-0 text-center size-12 text-2xl`} onClick={handleReset}>🎅🏻</button>
                    </div>
                </div>
            </div>
        </>
    )
}