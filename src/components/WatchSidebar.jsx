'use client'
import { useEffect } from "react"
import { AppSidebar } from "./app-sidebar"
import { useSidebar } from "@/components/ui/sidebar"


function WatchSidebar() {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar()
    useEffect(() => {
        setOpen(false)
    }, [])

    return (
        <div className={`absolute z-20 left-0 ${open ? '' : 'hidden'}`}>
            <AppSidebar collapsible="offcanvas" />
        </div>
    )
}

export default WatchSidebar