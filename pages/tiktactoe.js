
export default function TikTacToe(){
    return(
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 place-content-center">
                    <div className="bg-transparent size-20">1</div>
                    <div className="bg-transparent size-20 border-r-8 border-l-8">2</div>
                    <div className="bg-transparent size-20">3</div>
                    <div className="bg-transparent size-20 border-t-8">4</div>
                    <div className="bg-transparent size-20 border-r-8 border-l-8 border-t-8">5</div>
                    <div className="bg-transparent size-20 border-t-8">6</div>
                    <div className="bg-transparent size-20 border-t-8">7</div>
                    <div className="bg-transparent size-20 border-r-8 border-l-8 border-t-8">8</div>
                    <div className="bg-transparent size-20 border-t-8">9</div>
                </div>
            </div>
        </>
    )
}