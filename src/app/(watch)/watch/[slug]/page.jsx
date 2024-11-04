import { relatedVideos, watch } from "@/app/actions/homeData";
import AdvVideo from "@/components/AdvVideo";
import CategoryCarousal from "@/components/CategoryCarousal";
import RelatedContent from "@/components/RelatedContent";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Bookmark, Ellipsis, RedoDot, ShieldCheck, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { Suspense } from 'react'


export async function generateMetadata({ params, searchParams }, parent) {
  const slug = (await params).slug
  const data = await watch(slug);

  if (data.id) {
    return {
      title: data.title,
      description: data.description,
      type: 'article',
    }
  } else {
    return {
      title: "Nothing Found",
      type: 'article',
    }
  }

}


async function page({ params }) {
  const slug = (await params).slug
  const data = await watch(slug);
  const relatedData = await relatedVideos(slug);


  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: '16:9',
    // poster: `http://127.0.0.1:8000/uploads/videos/85031387-fe81-4fa7-9205-bec0490e2e29/51c5421a-efd6-49f3-a746-84174974de1d/thumbnail.jpg`,
    poster: data.thumbnail,
    sources: [{
      src: `http://127.0.0.1:8000/${data.videos[0]}`,
      // src: `http://127.0.0.1:8000/uploads/videos/85031387-fe81-4fa7-9205-bec0490e2e29/b749c9e0-d4d2-4f85-a5a0-090a6e570858/master.m3u8`,
      // type: 'video/mp4'
      type: 'application/x-mpegURL'
    }]
  };

  if (data.id) {
    return (

      <div className="flex gap-4 lg:gap-7 flex-col lg:flex-row flex-wrap lg:flex-nowrap">
        <article className="w-full lg:w-9/12">
          <Suspense fallback={<p>Loading feed...</p>}>
            <AdvVideo options={videoJsOptions} />
          </Suspense>
          <h1 className="text-xl font-bold pt-4 ">{data.title}</h1>
          <section className="flex gap-3 lg:gap-10 flex-col lg:flex-row flex-wrap lg:flex-nowrap">
            <div className="flex w-full lg:w-4/12 gap-7 py-4 justify-between">
              <div className="flex gap-2">
                <Link href={data.channel.channel_slug} title={data.channel.channel_name}>
                  <Image className="w-12 h-12 object-cover rounded-full" alt={data.channel.channel_name} src={data.channel.channel_picture} width={60} height={60} ></Image>
                </Link>
                <div>
                  <Link href={data.channel.channel_slug} title={data.channel.channel_name} className="text-md font-bold text-white"> {data.channel.channel_name} {data.channel.verified ? (<ShieldCheck />) : ''} </Link>
                  <p className="text-xs text-[rgb(170, 170, 170)] opacity-80">{data.channel.subscribers} <span className="hidden lg:inline-block">subscribers</span></p>
                </div>
              </div>

              <div>
                <Button className="bg-gray-100 text-primary rounded-full hover:bg-gray-300">Subscribe</Button>
              </div>
            </div>
            <div className="flex w-full lg:w-8/12 justify-start lg:justify-end gap-3 items-center lg:overflow-x-hidden overflow-x-scroll">
              <div className="flex">
                <Button className="bg-[#83838363] text-white font-bold rounded-s-full hover:bg-gray-600"> <ThumbsUp></ThumbsUp>1.1K</Button>
                <div className="bg-[#83838363] flex justify-center items-center py-2">
                  <span className="border border-l h-full"></span>
                </div>
                <Button className="bg-[#83838363] text-white font-bold rounded-e-full hover:bg-gray-600"> <ThumbsDown></ThumbsDown></Button>
              </div>
              <div>
                <Button className="bg-[#83838363] text-white font-bold rounded-full hover:bg-gray-600"> <RedoDot></RedoDot> Share </Button>
              </div>

              <div>
                <Button className="bg-[#83838363] text-white font-bold rounded-full hover:bg-gray-600"> <ArrowDownToLine></ArrowDownToLine> Download </Button>
              </div>
              <div>
                <Button className="bg-[#83838363] text-white font-bold rounded-full hover:bg-gray-600"> <Bookmark></Bookmark> Save </Button>
              </div>
              <div>
                <button className="bg-[#83838363] text-white font-bold rounded-full p-2 hover:bg-gray-600"> <Ellipsis></Ellipsis> </button>
              </div>
            </div>
          </section>
          <section>
            <p className="text-sm text-white">{data.description}</p>
          </section>
        </article>

        <aside className="lg:w-3/12 w-full ">
          <div className="relative">
            <CategoryCarousal></CategoryCarousal>

            <div className="flex flex-col gap-3">
              {
                relatedData.results.map((video) => (
                  <RelatedContent key={video.id} data={video}></RelatedContent>
                ))
              }
            </div>

          </div>
        </aside>


      </div>
    )
  } else {
    redirect('/')
  }
}

export default page