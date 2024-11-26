import { ReactNode } from "react";
import { StoreProvider } from '@/providers/StoreProvider'
import { SessionProvider } from '@/providers/SessionProvider'
import { UserLocationProvider } from '@/providers/UserLocationProvider'
import LayoutHead from "@/components/head/LayoutHead"
import SrollTop from "@/components/common/ScrollTop"
import HashScroller from "@/components/common/HashScroller"
import TrackingIdHandler from "@/components/common/TrackingIdHandler"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "@/styles/index.scss";


interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <LayoutHead/>
      <body>
        <main>
          <StoreProvider >
            <SessionProvider>
              <UserLocationProvider>
                <HashScroller />
                <TrackingIdHandler />
                {children}
                <SrollTop />
              </UserLocationProvider>
            </SessionProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  )
}