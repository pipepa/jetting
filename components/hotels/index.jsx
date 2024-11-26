import Header from "@/components/header";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer";

// import HotelsSearchFormSticky from "@/components/search-form/hotels/HotelsSearchFormSticky";
import HotelsSearchForm from "@/components/search-form/hotels";
import { HotelsSearchProvider } from "@/components/search-form/hotels/HotelsSearchProvider";
import { HotelsResultsProvider } from '@/components/hotels/HotelsResultsProvider';
import { MobileDateSearchCalendar } from "@/components/search-form/hotels/DateSearch";
import HotelsResults from '@/components/hotels/HotelsResults';

const index = () => {

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />

      <HotelsSearchProvider>
        <MobileDateSearchCalendar />
        <section className="section-bg pt-20 sm:pt-10 pb-30 sm:pb-10 relative z-5">
          <div className="section-bg__item col-12">
            <img
              src="/img/misc/hotels-search.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center pb-10 sm:d-none">
                  <h1 className="text-30 fw-600 text-white">
                    Compare Prices on Your Dream Hotels
                  </h1>
                </div>
                
                <HotelsSearchForm />

              </div>
            </div>
          </div>
        </section>

        <HotelsResultsProvider>
          {/*<HotelsSearchFormSticky />*/}

          <HotelsResults />

          <CallToActions />

          <DefaultFooter />
        </HotelsResultsProvider>
      </HotelsSearchProvider>
    </>
  );
};

export default index;
