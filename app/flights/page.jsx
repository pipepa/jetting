import Flights from "@/components/flights"

export const metadata = {
  title: "Flights | Jetting.com",
  description: "Find Your Dream Flight with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight Aggregator.",
  openGraph: {
    title: `Explore the World with Jetting Aggregator`,
    description: `Find Your Dream Flight with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight Aggregator.`,
    url: `https://jetting.com/flights`,
    images: `/img/about/about.png`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `Flights | Jetting.com | Jetting Aggregator`,
    description: `Find Your Dream Flight with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight Aggregator.`,
    image: {
      src: `/img/about/about.png`,
      alt: `Jetting Aggregator`,
    },
  },
};

const index = () => {

  return (
    <Flights/>
  );
};

export default index;
