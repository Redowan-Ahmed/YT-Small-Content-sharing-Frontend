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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-primary"
      >
          <SidebarProvider className="">
          <Header/>
          <AppSidebar collapsible='icon' />
          <main className="mt-16 p-0 lg:px-9 flex-1 w-full overflow-hidden relative">
            {children}
          </main>
        </SidebarProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}