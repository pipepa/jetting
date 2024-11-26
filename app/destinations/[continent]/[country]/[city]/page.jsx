import { notFound } from 'next/navigation'

import { getBaseUrl } from "@/helpers/main"
import { countries } from "@/data/skyscannerCountries";
import { cities } from "@/data/skyscannerCities";
import { continents } from "@/data/skyscannerContinents";
import Header from "@/components/header";
import Breadcrumbs from "@/components/common/breadcrumbs"
import DestinationCards from "@/components/destinations/components/DestinationCards"
import CallToActions from "@/components/common/CallToActions";
import SearchResultsBanner from "@/components/banner/SearchResultsBanner";
import Footer from "@/components/footer";
import { FlightsSearchProvider } from '@/components/search-form/flights/FlightsSearchProvider'

export async function generateMetadata({ params }) {
  const baseUrl = getBaseUrl()

  const continentSlug = params.continent
  const countrySlug = params.country
  const citySlug = params.city
  const continent = continents?.find((item) => item.slug == continentSlug)
  const country = countries?.find((item) => item.slug == countrySlug)
  const city = cities?.find((item) => item.slug == citySlug)

  if (continent && country && city && continent.entityId == country.parentId && country.entityId == city.parentId) {
    return {
      title: `Explore ${city.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
      description: `Discover the beauty, culture, and adventures awaiting in ${city.name}. Explore ${city.name}'s weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
      openGraph: {
        title: `Explore ${city.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
        description: `Discover the beauty, culture, and adventures awaiting in ${city.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
        url: `${baseUrl}/destinations/${continentSlug}/${countrySlug}/${citySlug}`,
        images: [country.flagImage], // you can add more images if needed
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@Jetting",
        creator: "@Jetting",
        title: `Explore ${city.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
        description: `Discover the beauty, culture, and adventures awaiting in ${city.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
        image: {
          src: city.img,
          alt: `${city.name} with Jetting.com`,
        },
      },
    }
  }
}

const DestinationCountry = ({ params }) => {
  const continentSlug = params.continent
  const countrySlug = params.country
  const citySlug = params.city
  const continent = continents?.find((item) => item.slug == continentSlug)
  const country = countries?.find((item) => item.slug == countrySlug)
  const city = cities?.find((item) => item.slug == citySlug)
  
  if (!continent || !country || !city || continent.entityId != country.parentId || country.entityId != city.parentId) {
    notFound();
  }

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <div className="bg-new-1">
        <FlightsSearchProvider>
          <SearchResultsBanner
            locationTo={city}
            locationType={'city'}
          />
      
          <section
            className="layout-pt-sm"
          >
            <Breadcrumbs
              dataArrays={[continents, countries, cities]}
            />
          </section>

          <section
            className="layout-pt-md layout-pb-lg"
            id="prices"
            style={{ scrollMarginTop: '40px'}}
          >
            <div className="container">

              <div>
                <DestinationCards
                  continent={continent}
                  country={country}
                  city={city}
                />
              </div>

            </div>
          </section>
        </FlightsSearchProvider>
      </div>

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default DestinationCountry
