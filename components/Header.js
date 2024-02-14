import { hideAtom } from "@/store"
import { useAtom } from "jotai"
import Link from "next/link"

export default function Header() {
    const [hide, setHide] = useAtom(hideAtom)

    const handleClick = () => {
        if (hide === 'hidden') setHide('block')
        else setHide('hidden')
    }

    return (
        <>
            <div className="container py-5 grid grid-cols-4 max-h-20">
                <div className="flex justify-end">
                    <Link href='/' passHref legacyBehavior>
                        <button className={`${hide} text-center text-4xl`} onClick={handleClick}>👼🏿</button>
                    </Link>
                </div>
                <div className="hidden md:block text-4xl text-center select-none col-span-2">
                    Wanna play a game?
                </div>
                <div className=" block md:hidden text-4xl text-center col-span-2">
                    👶
                </div>
                <div></div>
            </div>
        </>
    )
}
