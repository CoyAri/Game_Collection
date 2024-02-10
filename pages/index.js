import { hideAtom } from "@/store"
import { useAtom } from "jotai"
import Link from "next/link"

export default function Home() {
  const [hide, setHide] = useAtom(hideAtom)

  const handleClick = () => {
    if (hide === 'hidden') setHide('block')
    else setHide('hidden')
  }
  return (
    <>
      <div className="">
        <div className="flex justify-center h-full">
          <div className="grid grid-cols-2 place-content-center gap-8">
            <Link href='/wordle' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer" onClick={handleClick}>
                <div className="">
                  wordle
                </div>
              </div>
            </Link>
            <Link href='/tiktactoe' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer" onClick={handleClick}>
                <div className="">
                  tiktactoe
                </div>
              </div>
            </Link>
            <Link href='/match' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer" onClick={handleClick}>
                <div className="">
                  match
                </div>
              </div>
            </Link>
            <Link href='/typerace' passHref legacyBehavior>
              <div className="bg-stone-800 rounded-md p-2 size-32 hover:cursor-pointer" onClick={handleClick}>
                <div className="">
                  typerace
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
