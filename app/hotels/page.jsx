import Hotels from "@/components/hotels"

export const metadata = {
  title: "Hotels | Jetting.com",
  description: "Find Your Dream Hotel with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight and Hotel Aggregator",
  openGraph: {
    title: `Explore the World with Jetting Aggregator`,
    description: `Find Your Dream Hotel with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight and Hotel Aggregator`,
    url: `https://jetting.com/hotels`,
    images: `/img/about/about.png`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `Hotels | Jetting.com | Jetting Aggregator`,
    description: `Find Your Dream Hotel with Jetting Aggregator. Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight and Hotel Aggregator`,
    image: {
      src: `/img/about/about.png`,
      alt: `Jetting Aggregator`,
    },
  },
};

const index = () => {

  return (
    <Hotels/>
  );
};

export default index;
