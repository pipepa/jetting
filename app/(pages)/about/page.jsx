import Image from "next/image";
import DefaultHeader from "@/components/header";
import DefaultFooter from "@/components/footer";
import MainContent from "@/components/about/MainContent";
import Block1 from "@/components/about/Block1";
import Counter from "@/components/counter/Counter";
import Team from "@/components/about/Team";
import AppBanner from "@/components/common/AppBanner";
import CallToActions from "@/components/common/CallToActions";

export const metadata = {
  title: "About Jetting.com",
  description: "Discover the World with Jetting.com: Your Ultimate Travel Booking Aggregator",
  openGraph: {
    title: `About Jetting.com | Jetting Aggregator`,
    description: `Jetting.com, also known simply as Jetting or Jetting Aggregator is all-in-one Travel Booking Aggregator.`,
    url: `https://jetting.com/about`,
    images: `/img/about/about.png`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jetting",
    creator: "@Jetting",
    title: `About Jetting.com | Jetting Aggregator`,
    description: `Jetting.com, also known simply as Jetting or Jetting Aggregator is all-in-one Travel Booking Aggregator.`,
    image: {
      src: `/img/about/about.png`,
      alt: `Jetting Aggregator`,
    },
  },
};

const About = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/misc/flights.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-60 md:text-25 fw-600 text-white">
                About Jetting.com
              </h1>
              <h2 className="text-white mt-15">
                All-in-one Travel Booking Aggregator
              </h2>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}


      <section className="layout-pt-md layout-pb-md">
        <div className="container">

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <MainContent />
              {/* Main Content content */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-sm">
        <div className="container">
          <div className="row y-gap-30 x-gap-60 justify-center items-center">
              <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-center text-center">
            <Counter />
          </div>
        </div>
      </section>
      {/* End Counter section */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Meet the Jetting Team
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Get to know the passionate travel enthusiasts behind Jetting.com
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden layout-pt-md js-section-slider">
            <div className="item_gap-x30">
              <Team />
            </div>
          </div>
          {/* End .overflow-hidden */}
        </div>
        {/* End .container */}
      </section>
      {/* End Team section */}

      <AppBanner />

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default About
