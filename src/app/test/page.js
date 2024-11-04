import AdvVideo from "@/components/AdvVideo"

function page() {

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        aspectRatio: '16:9',
        sources: [{
            src: 'http://127.0.0.1:8000/uploads/videos/85031387-fe81-4fa7-9205-bec0490e2e29/51c5421a-efd6-49f3-a746-84174974de1d/1080p.m3u8',
            type: 'application/x-mpegURL'
        }]
    };

    return (
        <div className="z-20">
            <div>Rest of app here</div>
            <div className="container mx-auto">
                <AdvVideo options={videoJsOptions} />
            </div>
            <div>Rest of app here</div>
        </div>
    )
}

export default page