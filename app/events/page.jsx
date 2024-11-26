import EventsPage from "@/components/events/EventsPage"

export const metadata = {
  title: "Events | Jetting.com",
  description: "Travel to the most significant events and places around the world with Jetting Aggregator",
  openGraph: {
    title: `Events | Jetting.com | Jetting Aggregator`,
    description: `Travel to the most significant events and places around the world with Jetting Aggregator`,
    url: `https://jetting.com/events`,
    images: `/img/about/about.png`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `Events | Jetting.com | Jetting Aggregator`,
    description: `Travel to the most significant events and places around the world with Jetting Aggregator`,
    image: {
      src: `/img/about/about.png`,
      alt: `Jetting Aggregator`,
    },
  },
};

const Events = () => {
  return (
    <>
      <EventsPage
      />
    </>
  );
};

export default Events;
