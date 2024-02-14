
export default function Square({ value, onSquareClick}) {

    return (
        <>
            <div 
                className="bg-white hover:bg-slate-400 size-28 flex justify-center button"
                onClick={onSquareClick}>
                <button className="text-black size-full">{value}</button>
            </div>
        </>
    )
}