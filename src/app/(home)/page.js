import VideoCard from "@/components/VideoCard";
import { categories, homeData } from "../actions/homeData";
import CategoryCarousal from "@/components/CategoryCarousal";

export default async function Home() {
  const data = await homeData()
  const categoriesData = await categories()
  return (
    <div >
      <div className="relative">
          <CategoryCarousal data={categoriesData}></CategoryCarousal>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {
          data? (<>
            {
              data.results.map((video)=>(
                <VideoCard key={video.id} title={video.title} uploaded={video.created_at} thumbnail={video.thumbnail} channelName={video.channel.channel_name} channelUrl={video.channel.channel_slug} channelPicture={video.channel.channel_picture} videoUrl={video.id} views={video.views_count} videos={video.videos} duration={video.duration}></VideoCard>
              ))
            }
          </>):(<h2>Something Went Wrong</h2>)
        }
      </div>
    </div>
  );
}
