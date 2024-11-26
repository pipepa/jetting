import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/home/page";

export const metadata = {
  title: "Jetting.com | Travel Booking Aggregator for Flights & Hotels",
  description: "Book your next adventure with Jetting.com, the premier travel booking aggregator. Explore top deals on flights, hotels, cruises, and beyond, all tailored to make your journey unforgettable",
  alternates: {
    canonical: `https://jetting.com`,
    languages: {
      'en': `https://jetting.com`,
    },
  },
  openGraph: {
    title: `Jetting.com | Travel Booking Aggregator for Flights, Hotels & Beyond`,
    description: `Book your next adventure with Jetting.com, the premier travel booking aggregator. Explore top deals on flights, hotels, cruises, and beyond, all tailored to make your journey unforgettable`,
    url: `https://jetting.com`,
    images: `/img/about/about.png`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `Jetting.com | Travel Booking Aggregator for Flights, Hotels & Beyond`,
    description: `Book your next adventure with Jetting.com, the premier travel booking aggregator. Explore top deals on flights, hotels, cruises, and beyond, all tailored to make your journey unforgettable`,
    image: {
      src: `/img/about/about.png`,
      alt: `Jetting.com`,
    },
  },
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
