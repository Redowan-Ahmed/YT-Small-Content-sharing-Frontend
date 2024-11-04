'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"

function CategoryCarousal({ data }) {
    const [leftArrow, setLeftArrow] = useState(false)
    const [rightArrow, setRightArrow] = useState(true)
    const carouselRef = useRef(null);

    function handleScroll(e) {
        const { scrollWidth, scrollLeft, clientWidth } = e.target;
        setLeftArrow(scrollLeft > 0);
        setRightArrow(scrollLeft < scrollWidth - clientWidth);
    }

    function scrollLeft() {
        carouselRef?.current?.scrollBy({ left: -200, behavior: 'smooth' });
    }

    function scrollRight() {
        carouselRef?.current?.scrollBy({ left: 200, behavior: 'smooth' });
    }
    if (data?.results) {
        return (
            <div className="scroll-smooth pb-2 lg:pb-5 px-3 lg:px-0">
                <div className={`absolute z-10 from-[#0f0f0f00] via-[#0f0f0f] to-[#0f0f0f] bg-gradient-to-l w-20 ${leftArrow ? '' : 'hidden'} left-0 top-0 text-start`}>
                    <div onClick={scrollLeft} className="p-2 bg-primary hover:bg-gray-900 rounded-full inline-block cursor-pointer ">
                        <ChevronLeft></ChevronLeft>
                    </div>
                </div>
                <ul ref={carouselRef} onScroll={handleScroll} className="flex gap-2 overflow-y-hidden overflow-x-scroll w-full justify-start align-middle items-center [&::-webkit-scrollbar]:hidden relative py-2" >

                    <li key='all'><Link className="px-3 py-1 rounded-lg bg-white text-gray-900 font-semibold text-sm" href="/">All</Link></li>
                    {
                        data.results.map((item) => (
                            <li key={item.id}><button className="font-semibold text-nowrap block px-3 py-1 rounded-lg bg-sidebar-accent text-gray-200 text-sm" href={item.category_slug}>{item.category_name}</button></li>
                        ))
                    }
                    <li key='recent'><button className="px-3 py-1 rounded-lg bg-sidebar-accent text-gray-200 font-semibold text-sm text-nowrap" href="/">Recently Uploaded</button></li>
                    <li key='newtoyou'><button className="px-3 py-1 rounded-lg bg-sidebar-accent text-gray-200 font-semibold text-sm text-nowrap" href="/">New</button></li>

                </ul>
                <div className={`absolute z-10 from-[#0f0f0f00] via-[#0f0f0f] to-[#0f0f0f] bg-gradient-to-r w-20 h-11 right-0 top-0 text-end ${rightArrow ? '' : 'hidden'} `}>
                    <div onClick={scrollRight} className="p-2 bg-primary hover:bg-gray-900 rounded-full inline-block cursor-pointer ">
                        <ChevronRight></ChevronRight>
                    </div>
                </div>

            </div>
        )
    }else{
        return ''
    }


}

export default CategoryCarousal