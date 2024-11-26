import { notFound } from 'next/navigation'

import { getBaseUrl } from "@/helpers/main"
import { countries } from "@/data/skyscannerCountries";
import { continents } from "@/data/skyscannerContinents";
import Header from "@/components/header";
import Breadcrumbs from "@/components/common/breadcrumbs"
import Alert from "@/components/common/Alert";
import Description from "@/components/destinations/components/Description"
import DestinationCards from "@/components/destinations/components/DestinationCards"
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer";
import { FlightsSearchProvider } from '@/components/search-form/flights/FlightsSearchProvider'

export async function generateMetadata({ params }) {
  const baseUrl = getBaseUrl()

  const continentSlug = params.continent
  const countrySlug = params.country
  const continent = continents?.find((item) => item.slug == continentSlug)
  const country = countries?.find((item) => item.slug == countrySlug)

  if (continent && country && continent.entityId === country.parentId) {
    return {
      title: `Explore ${country.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
      description: `Discover the beauty, culture, and adventures awaiting in ${country.name}. Explore ${country.name}'s weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
      openGraph: {
        title: `Explore ${country.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
        description: `Discover the beauty, culture, and adventures awaiting in ${country.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
        url: `${baseUrl}/destinations/${continentSlug}/${country.slug}`,
        images: [country.flagImage], // you can add more images if needed
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@Jetting",
        creator: "@Jetting",
        title: `Explore ${country.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
        description: `Discover the beauty, culture, and adventures awaiting in ${country.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
        image: {
          src: country.img,
          alt: `${country.name} with Jetting.com`,
        },
      },
    }
  }
}

const DestinationCountry = ({ params }) => {
  const continentSlug = params.continent
  const countrySlug = params.country
  const continent = continents?.find((item) => item.slug == continentSlug)
  const country = countries?.find((item) => item.slug == countrySlug)
  
  if (!continent || !country || continent.entityId != country.parentId) {
    notFound();
  }
  
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <Breadcrumbs
        dataArrays={[continents, countries]}
        link={{
          text: `Best flights to ${country.name}`,
          href: `/flights`
        }}
      />

      <section className="layout-pt-md layout-pb-md">
        <div className="container">

          <Alert />

        </div>
      </section>

      <FlightsSearchProvider>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <Description
              continent={continent}
              country={country}
            />

            <div className="pt-30">
              <DestinationCards
                continent={continent}
                country={country}
              />
            </div>

          </div>
        </section>
      </FlightsSearchProvider>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default DestinationCountry
