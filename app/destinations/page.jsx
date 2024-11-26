import Link from "next/link";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer";
import BlockSeo from "@/components/destinations/components/BlockSeo";
import Continents from "@/components/destinations/Continents";
import RecommendedFlights from "@/components/flight/RecommendedFlights";
import CallToActions from "@/components/common/CallToActions";

export const metadata = {
  title: "Destinations | Jetting.com",
  description: "Travel to Best Destinations with Jetting",
  openGraph: {
    title: `Explore the World with Jetting Aggregator`,
    description: `Explore the globe affordably with Jetting Aggregator by finding the cheapest flights to countries on every continent.`,
    url: `https://jetting.com/destinations`,
    images: `/img/destinations/destinations.jpg`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `Explore the World with Jetting Aggregator`,
    description: `Explore the globe affordably with Jetting Aggregator by finding the cheapest flights to countries on every continent.`,
    image: {
      src: `/img/destinations/destinations.jpg`,
      alt: `Jetting Aggregator`,
    },
  },
};

const Destinations = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <section className="masthead -type-5">

        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <h1
                className="text-60 lg:text-40 md:text-30"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Discover{" "}
                <span className="text-dark-1 relative">
                  the World{" "}
                  <span className="-line">
                    <img src="/img/destinations/line.png" alt="line" />
                  </span>
                </span>
              </h1>
              <p className="text-16 mt-30" data-aos="fade-up" data-aos-delay="300">
                Travel Destinations and Cheapest Flights Across Six Continents
              </p>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="masthead__image" data-aos="fade">
          <img src="/img/destinations/destinations.jpg" alt="Travel Destinations" />
        </div>
        {/* End .masthead__image */}
      </section>

      <section className="layout-pb-md">
        <div className="container">

          <div className="row y-gap-20 pt-40">

            <BlockSeo />

          </div>
          {/* End .row */}

          <div className="mt-30 border-top-light" />
          {/* border separation */}

        </div>
        {/* End .container */}
      </section>


      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Every Continent in the World</h2>
                <h3 className=" sectionTitle__text mt-5 sm:mt-0">
                  Find the best deals on flights to various countries across each continent, within various countries
                </h3>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <Continents />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End top destination section */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Flights for Unforgettable Travel</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore our advanced search, precise filtering, and tailored selection to ensure every leg of your journey is smooth and satisfying
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-20">
            <RecommendedFlights />
          </div>
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Destinations
