import Image from "next/image";
import FilterSelect from "@/components/search-form/common/FilterSelect";
import MainFilterSearchBox from "@/components/search-form/flights/MainFilterSearchBox";
import TabsSearchForm from '@/components/search-form/flights/TabsSearchForm';

const Index = () => {
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content">
              <div
                className="text-80 lg:text-60 sm:text-40 pl-35 lg:pl-10 pb-20 lh-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Jetting Aggregator
              </div>
              <h1 className="text-15 w-400 text-light-1 pl-35 lg:pl-10" data-aos="fade-up" data-aos-delay="200">
                Your Ultimate Booking Aggregator for the best Flights, Hotels, and Beyond in Travel Planning
              </h1>
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="row y-gap-20 sm:y-gap-0 pl-35 lg:pl-10 items-center pt-40">
                  <FilterSelect />
                </div>

                <MainFilterSearchBox />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <TabsSearchForm />
        </div>

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="row y-gap-30 flex-nowrap">

            <div className="col-auto">
              <Image
                width={290}
                height={560}
                src="/img/misc/hero.jpg"
                alt="Jetting Hero"
                className="rounded-22"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
