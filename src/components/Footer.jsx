import { CirclePlus, CircleUser, Home, Layers2, TvMinimalPlay } from "lucide-react"
import Link from "next/link"

function Footer() {
    return (
        <div className="bg-primary h-12 w-full fixed bottom-0 z-20 px-1 align-middle items-center lg:hidden flex flex-row flex-nowrap justify-between content-between">
            <Link href="/" className="flex justify-center flex-col align-middle items-center w-[19%]">
                <Home size={20} />
                <p className="text-[0.6rem]">Home</p>
            </Link>
            <Link href="/" className="flex justify-center flex-col align-middle items-center w-[19%]">
                <Layers2 size={20} />
                <p className="text-[0.6rem]">Shorts</p>
            </Link>

            <Link href="/" className="flex justify-center flex-col align-middle items-center w-[24%] ">
                <CirclePlus size={35} strokeWidth={1} />
            </Link>


            <Link href="/" className="flex justify-center flex-col align-middle items-center w-[19%]">
                <TvMinimalPlay size={20} />
                <p className="text-[0.6rem]">Subscriptions</p>
            </Link>

            <Link href="/" className="flex justify-center flex-col align-middle items-center w-[19%]">
                <CircleUser size={20} />
                <p className="text-[0.6rem]">You</p>
            </Link>
        </div>
    )
}

export default Footer