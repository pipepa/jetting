import Link from "next/link";
import Image from "next/image";
import TopHeader from "@/components/header/top-header";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { MobileDateSearchCalendar } from "@/components/search-form/flights/DateSearch"
import { FlightsSearchProvider } from '@/components/search-form/flights/FlightsSearchProvider'
import TopCities from "@/components/slider/TopCities";
import CounterHome from "@/components/counter/CounterHome";
import BestHotels from "@/components/home/BestHotels";
import RecommendedFlights from "@/components/flight/RecommendedFlights";
// import SelectFilter from "@/components/home/filter-tabs/SelectFilter";
// import TypewriterInput from "@/components/common/TypewriterInput";
import Hotels from "@/components/home/Hotels";
import TopDestinations from "@/components/destinations/TopDestinations";
import Partners from "@/components/home/Partners";
import BestCruise from "@/components/cruise/BestCruise";
import AboutIntro from "@/components/home/AboutIntro";
// import PopularCars from "@/components/home/PopularCars";
import Blog from "@/components/home/BlogHome";
import Destinations from "@/components/home/Destinations";
import CallToActions from "@/components/common/CallToActions";
import Footer from "@/components/footer";
import HelpfulFeedback from "@/components/common/HelpfulFeedback";
// import ImpactVerification from '@/components/head/ImpactVerification';
import ParallaxBanner from "@/components/banner/ParallaxBanner";
import VacationApp from "@/components/ai/apps/VacationApp";

const home = () => {
  
//   useEffect(() => {
//     // Conditionally load the Appzi script
//     if (isDesktop) {
//       const script1 = document.createElement('script');
//       script1.src = "https://w.appzi.io/w.js?token=IoBVV";
//       script1.async = true;
//       document.body.appendChild(script1);
//     }

//     // Conditionally load the illow.io script
//     if (isDesktop) {
//       const script2 = document.createElement('script');
//       script2.src = "https://platform.illow.io/banner.js?siteId=7024d67e-1fad-4f9c-b3b2-8e6bfdd87582";
//       script2.async = true;
//       document.body.appendChild(script2);
//     }
// }, []);

  return (
    <>
      {/*<ImpactVerification />*/}

      <TopHeader />
      <Header marginTop="mt-30"/>
      
      <FlightsSearchProvider>
        <MobileDateSearchCalendar />
        <Hero />
      </FlightsSearchProvider>

      <section className="layout-pt-lg layout-pb-lg">
        <ParallaxBanner />
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Top Destinations to Travel in 2024
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Book your dream getaway effortlessly with our premier travel booking service
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-5 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left text-dark-1" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right text-dark-1" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}
          
          <FlightsSearchProvider>
            <TopCities />
          </FlightsSearchProvider>

        </div>
        {/* End .container */}
      </section>
      {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">
                Welcome to Jetting.com!
              </h2>
              <p className="mt-40 lg:mt-20">
                Unlike traditional travel booking platforms, Jetting.com does not sell tickets or services directly. Instead, we provide a comprehensive platform where travelers can compare prices and options from various travel providers all in one place.
              </p>

              <div className="d-inline-block mt-40 lg:mt-20">
                <a 
                  href="/about" 
                  target="_blank" 
                  className="button -md -dark-1 bg-dark-4 text-white">
                  About Us <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-2 rounded-4">
                <div className="row border-center">
                  <CounterHome />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End Counter Section */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Discover Cheap Flights Departing Near You</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore an array of wallet-friendly flight options departing conveniently from your location
                </p>
              </div>
            </div>
            {/* End .col */}

            {/*<div className="col-auto">
              <Link
                href="/flights" target="_blank"
                className="button -md -dark-1 bg-dark-4 text-white"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>*/}
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-20">
            <RecommendedFlights />
          </div>

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Recommended Flights Section */}

      <Hotels />

      {/* <BestHotels /> */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">

              <VacationApp />

            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations on Every Continent</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Showcasing the most enchanting destinations on each continent
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <TopDestinations />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Continent Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h4>Partners with the world’s best</h4>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between items-center pt-50 lg:pt-40 sm:pt-30">
            <Partners />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Partners Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose Your Dream Cruise Destination</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover a range of cheap cruise deals and set sail on your next adventure
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="https://www.dpbolvw.net/click-101112083-13034477"
                target="_blank"
                className="button -md -dark-4 bg-blue-1-05 text-black"
                rel="nofollow noopener noreferrer sponsored"
              >
                Search <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20">
            <BestCruise />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Best Cruise Section */}

      <AboutIntro />
      {/* End About Intro Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h3 className="sectionTitle__title">Car Hire for Your Next Journey</h3>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Book your perfect ride today for a seamless journey ahead
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="col-12 text-center pt-40">
            <Image
              width={648}
              height={287}
              src="/img/cars/soon.png"
              alt="jetting cars"
              className="col-12 rounded-8 w-50 sm:w-1/1"
              style={{ opacity: '0.5' }}
            />
          </div>

          {/*<div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <PopularCars />
          </div>*/}
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car Hire Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h3 className="sectionTitle__title">
                  Latest Travel Tips and Trends
                </h3>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Stay informed about the hottest travel trends, insider insights, destination guides, and expert tips
                </p>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link
                href="https://blog.jetting.com" 
                target="_blank"
                className="button -md -dark-4 bg-blue-1-05 text-black"
              >
                Our Blog <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Blog Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h3 className="sectionTitle__title">Cheap Flights to Destinations we Love</h3>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Our cheapest flight deals, making your dream getaways more affordable than ever
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="tabs -pills-2 pt-40 js-tabs">
            <FlightsSearchProvider>
              <Destinations />
            </FlightsSearchProvider>
          </div>
          {/* End tabs */}

          <div className="d-flex x-gap-10 items-center text-10 mt-10">
            <HelpfulFeedback id="3" />
          </div>

        </div>
      </section>
      {/* End Destination we love Section */}

      <CallToActions />
      <Footer />
    </>
  );
};

export default home
