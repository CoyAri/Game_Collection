
export default function Card({ value, handleCardClick, flip, match }) {
    return (
        <>
            <div
            className={`${match ? "bg-stone-600" : flip ? "bg-stone-400" : "bg-stone-300 hover:bg-stone-200 active:bg-stone-400"}  size-[5rem] flex justify-center button rounded transition ease-in-out duration-500`} onClick={handleCardClick}>
                <button className="text-black size-full text-2xl" disabled={flip || match}>{flip || match ? value : ""}</button>
            </div>
        </>
    )
}