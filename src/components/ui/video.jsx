export function Video({ src, poster }) {
    return (
        <div>
            <video width="100%" height="auto" controls={true} autoPlay={true} preload="none" poster={poster} playsInline className="rounded-lg aspect-video">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}