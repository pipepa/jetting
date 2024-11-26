import EventsPage from "@/components/events/EventsPage"
import { continents } from "@/data/skyscannerContinents"
import { getBaseUrl } from "@/helpers/main"

export async function generateMetadata({ params }) {
  const continentSlug = params.continent
  const continent = continents.find((item) => item.slug == continentSlug)
  const baseUrl = getBaseUrl()

  if (continent) {
    return {
      title: `Events in ${continent.name} | Jetting.com`,
      description: `Travel to the most significant events and places in ${continent.name} with Jetting`,
      openGraph: {
        title: `Events in ${continent.name} | Jetting.com`,
        description: `Travel to the most significant events and places in ${continent.name} with Jetting`,
        url: `${baseUrl}/events/${continent.slug}`,
        // images: [continent.img],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@Jetting",
        creator: "@Jetting",
        title: `Events in ${continent.name} | Jetting.com`,
        description: `Travel to the most significant events and places in ${continent.name} with Jetting`,
        // image: {
        //   src: continent.img,
        //   alt: `${continent.name} with Jetting.com`,
        // },
      },
    };
  }
}

const Events = ({ params }) => {
  const continentSlug = params.continent
    
  return (
    <>
      <EventsPage
        continentSlug={continentSlug}
      />
    </>
  );
};

export default Events
