import Image from "next/image"
import Link from "next/link"
import { EllipsisVertical } from "lucide-react"

function VideoCard({title, uploaded, thumbnail, channelName, channelUrl, channelPicture, videoUrl, views, videos, duration}) {
    let vDuration = ''
    const durationData = Math.floor(duration)
    if (durationData <= 60) {
        vDuration = `0:${durationData}`
    }else if (durationData >= 60 && durationData <= 60 * 60){
        vDuration = `${Math.floor(durationData / 60)}:${Math.floor(durationData % 60)}`
    }else if(durationData > 60*60){
        vDuration = `${Math.floor(durationData / 60 / 60)}:${Math.floor(( durationData % 60) / 60 )}`
    }else{
        vDuration = ''
    }
    return (
        <div className="w-full">
            <Link className="relative" href={`/watch/${videoUrl}`}>
                <Image className="w-full h-56 lg:h-[12.2rem] object-cover rounded-none lg:rounded-lg" alt={title} src={thumbnail? thumbnail : '/default.jpg'} width={300} height={300} />
                <span className="absolute bottom-3 right-3 bg-black bg-opacity-50 px-1 rounded-sm font-semibold text-xs tracking-wide">{vDuration}</span>
            </Link>
            <div className="flex gap-2 py-3 px-2 lg:px-0">
                <div className="w-[13%]">
                    <Link href="/">
                        <Image className="w-9 h-9 object-cover rounded-full" src={channelPicture? channelPicture : '/default.jpg'} alt='' width={40} height={40} />
                    </Link>
                </div>
                <div className="w-[80%] overflow-hidden">
                    <Link href={`/watch/${videoUrl}`} title={title? title : 'Untitled' }>
                        <h2 className="text-sm lg:text-md font-medium line-clamp-2 ">{title? title : 'Untitled' }</h2>
                    </Link>
                    <div className="pt-1">
                        <Link href={`/channel/${channelUrl}`} className="lg:block flex gap-2">
                            <h3 className="text-zinc-400 font-semibold text-xs lg:text-sm hover:text-zinc-300" title={channelName? channelName : 'Untitled' }>{channelName? channelName : 'Untitled' }</h3>
                            <p className="text-zinc-400 text-xs lg:text-sm"><span className="lg:hidden"> • </span>
                            <span className="hover:text-zinc-300">{`${views} views`}</span> • <span className="hover:text-zinc-300">{`${String(uploaded).split('T')[1].split('.')[0]} ago`}</span></p>
                        </Link>
                    </div>
                </div>
                <div className="w-[7%]">
                    <EllipsisVertical className="font-medium size-5 cursor-pointer hover:bg-sidebar-accent rounded-full"/>
                </div>
            </div>
        </div>
    )
}

export default VideoCard