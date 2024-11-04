import { EllipsisVertical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function RelatedContent({ data }) {

    return (
        <Link href={`/watch/${data.id}`} className="flex flex-row gap-2 flex-nowrap justify-start items-start">
                <div className="rounded-md w-[43%] ">
                    <Image className="rounded-md bg-slate-600 w-full h-28 object-cover" src={data.thumbnail} width={200} height={100}></Image>
                </div>
                <div className="w-[50%]">
                    <h3 className="line-clamp-2 text-sm font-semibold">{data.title}</h3>
                    <h4 className="text-xs pt-2 font-bold truncate text-gray-400">{data.channel.channel_name}</h4>
                    <p className="text-xs font-bold truncate text-gray-400">{`${data.views_count} views • ${data.created_at} days ago`} </p>
                </div>
                <div className="w-[7%] py-1">
                    <EllipsisVertical className="font-medium size-5 cursor-pointer hover:bg-sidebar-accent rounded-full"/>
                </div>
        </Link>
    )
}

export default RelatedContent