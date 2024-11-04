export async function homeData(){
    const response = await fetch('http://127.0.0.1:8000/api/v1/contents/', { next: { revalidate: 10 } })
    const data = await response.json()
    return data
}


export async function watch(slug){
    const response = await fetch(`http://127.0.0.1:8000/api/v1/contents/${slug}/`, { next: { revalidate: 60 } })
    const data = await response.json()
    return data
}


export async function categories(){
    const response = await fetch(`http://127.0.0.1:8000/api/v1/categories/`, { next: { revalidate: 60 } })
    const data = await response.json()
    return data
}


export async function relatedVideos(slug){
    const response = await fetch(`http://127.0.0.1:8000/api/v1/contents/${slug}/related_contents/`, { next: { revalidate: 60 } })
    const data = await response.json()
    return data
}