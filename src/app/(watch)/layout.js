import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Youtube - Home",
    description: "Generated by create next app",
};

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchSidebar from "@/components/WatchSidebar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className="bg-primary"
            >
                <SidebarProvider className="">
                    <Header />
                        <WatchSidebar></WatchSidebar>
                    <main className="lg:pt-20 p-2 lg:px-28 flex-1 overflow-hidden w-full">
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
