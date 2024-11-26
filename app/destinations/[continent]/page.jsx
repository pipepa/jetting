import { notFound } from 'next/navigation'

import { getBaseUrl } from "@/helpers/main"
import { continentData } from "@/data/continents";
import { continents } from "@/data/skyscannerContinents"
import Header from "@/components/header";
import Breadcrumbs from "@/components/common/breadcrumbs"
import DefaultFooter from "@/components/footer";
import CallToActions from "@/components/common/CallToActions";

import Banner from "@/components/banner/BigBanner";
import Categories from "@/components/destinations/components/Categories";
import IntroContinent from "@/components/destinations/components/IntroContinent";
import Alert from "@/components/common/Alert";
import Weather from "@/components/destinations/components/Weather";
import GeneralInfo from "@/components/destinations/components/GeneralInfo";
import Description from "@/components/destinations/components/Description"
import DestinationCards from "@/components/destinations/components/DestinationCards"
import Faq from "@/components/faq/Faq";
import { FlightsSearchProvider } from '@/components/search-form/flights/FlightsSearchProvider'

export async function generateMetadata({ params }) {
  const continentSlug = params.continent
  const continent = continentData.find((item) => item.slug == continentSlug) || continentData[0]
  const baseUrl = getBaseUrl()

  return {
    title: `Explore ${continent.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
    description: `Discover the beauty, culture, and adventures awaiting in ${continent.name}. Explore ${continent.name}'s weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
    openGraph: {
      title: `Explore ${continent.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
      description: `Discover the beauty, culture, and adventures awaiting in ${continent.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
      url: `${baseUrl}/destinations/${continent.slug}`,
      images: [continent.img], // you can add more images if needed
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@Jetting",
      creator: "@Jetting",
      title: `Explore ${continent.name} with Jetting.com - Your Ultimate Travel Booking Platform`,
      description: `Discover the beauty, culture, and adventures awaiting in ${continent.name}. Explore weather conditions, FAQs, cheap flights, hotels, and much more with Jetting.com`,
      image: {
        src: continent.img,
        alt: `${continent.name} with Jetting.com`,
      },
    },
  };
}

const DestinationContinent = ({ params }) => {
  const continentSlug = params.continent
  const continent = continentData.find((item) => item.slug == continentSlug)
  const continentValue = continents.find((item) => item.slug == continentSlug)
  
  if (!continent || !continentValue) {
    notFound();
  }
  
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <Breadcrumbs
        dataArrays={[continents]}
        link={{
          text: `Best flights to ${continentValue.name}`,
          href: `/flights`
        }}
      />

      <section className="layout-pb-md mt-15">
        <div className="container">
          <div className="row">
            <Banner
              bannerItem={continent}
              link={{
                text: `Events in ${continent.name}`,
                href: `https://jetting.com/events/${continent.slug}`
              }}
            />
          </div>

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div>

          <div className="row y-gap-20 pt-40">
            <IntroContinent intro={continent.intro} />
          </div>

          <section className="py-80">
            <div className="container">
              <div className="row">

                <Alert />

              </div>
            </div>
          </section>

          <div className="row y-gap-20">
            <Weather weather={continent.weather}/>
          </div>
          {/* End local weather */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* border separation */}

          <div className="row y-gap-20">
            <GeneralInfo info={continent.info}/>
          </div>

          <div className="mt-30 border-top-light" />
          {/* border separation */}

        </div>
        {/* End .container */}
      </section>
      {/* End Info section */}

      <FlightsSearchProvider>
        <section className="layout-pt-md layout-pb-md" data-aos="fade-up">
          <div className="container">
            <Description
              continent={continentValue}
            />

            <div className="pt-30">
              <DestinationCards 
                continent={continentValue}
              />
            </div>
          </div>
        </section>
      </FlightsSearchProvider>

      {/*<section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{continent.cities.iconic.title}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {continent.cities.iconic.desc}
                </p>
              </div>
            </div>

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -dark-1 bg-blue-1-05 text-dark-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <FlightsSearchProvider>
              <PopularDestinations cities={continent.cities.iconic.list}/>
            </FlightsSearchProvider>
          </div>
        </div>
      </section>
      
      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{continent.cities.coastal.title}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {continent.cities.coastal.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <FlightsSearchProvider>
              <PopularDestinations cities={continent.cities.coastal.list}/>
            </FlightsSearchProvider>
          </div>
        </div>
      </section>
      
      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{continent.cities.cultural.title}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {continent.cities.cultural.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <FlightsSearchProvider>
              <PopularDestinations cities={continent.cities.cultural.list}/>
            </FlightsSearchProvider>
          </div>
        </div>
      </section>
      
      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{continent.cities.nature.title}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {continent.cities.nature.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <FlightsSearchProvider>
              <PopularDestinations cities={continent.cities.nature.list}/>
            </FlightsSearchProvider>
          </div>
        </div>
      </section>
      
      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{continent.cities.foodie.title}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {continent.cities.foodie.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <FlightsSearchProvider>
              <PopularDestinations cities={continent.cities.foodie.list}/>
            </FlightsSearchProvider>
          </div>
        </div>
      </section>     */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                Frequently asked questions about {continent.name}
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq dataName={continent.name} />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default DestinationContinent
