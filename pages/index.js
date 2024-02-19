import { hideAtom } from "@/store"
import { useAtom } from "jotai"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [hide, setHide] = useAtom(hideAtom)

  const handleClick = () => {
    if (hide === 'hidden') setHide('block')
    else setHide('hidden')
  }
  return (
    <>
      <div className="m-auto">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-2 place-content-center gap-8">
            <Link href='/wordle' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer hover:outline outline-stone-700 hover:bg-stone-600 flex justify-center" onClick={handleClick}>
                <div className="m-auto text-center">
                <Image 
                    src="/wordle.svg"
                    alt="Wordle Logo"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </Link>
            <Link href='/tictactoe' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer hover:outline outline-stone-700 hover:bg-stone-600 flex justify-center" onClick={handleClick}>
                <div className="m-auto">
                <Image 
                    src="/t3.svg"
                    alt="TicTacToe Logo"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
            </Link>
            <Link href='/match' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer hover:outline outline-stone-700 hover:bg-stone-600 flex justify-center" onClick={handleClick}>
                <div className="m-auto">
                <Image 
                    src="/match.svg"
                    alt="Match Logo"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
            </Link>
            <Link href='/typerace' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer hover:outline outline-stone-700 hover:bg-stone-600 flex justify-center" onClick={handleClick}>
                <div className="m-auto">
                <Image 
                    src="/type.svg"
                    alt="Typerace Logo"
                    width={102}
                    height={102}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
