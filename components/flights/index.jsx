import Header from "@/components/header/flights";
import { FlightsResultsProvider } from '@/components/flights/FlightsResultsContext';
import FlightsResults from '@/components/flights/FlightsResults';
import Footer from "@/components/footer/FooterFlights";
import FlightsFilterSearchBox from "@/components/search-form/flights/FlightsFilterSearchBox";
import { FlightsSearchProvider } from '@/components/search-form/flights/FlightsSearchProvider';
import FlightsFormSticky from "@/components/search-form/flights/FlightsFormSticky";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth";
import X from "@/components/x"
import { MobileDateSearchCalendar } from "@/components/search-form/flights/DateSearch"

const index = async () => {
  const session = await getServerSession(authOptions)
  
  const isVisible = session && (session.user.role === 'staff' || session.user.role === 'admin');

  return (
    <>
      {session ? (
        <FlightsSearchProvider>
          <FlightsResultsProvider>
            <X session={session} />
          </FlightsResultsProvider>
        </FlightsSearchProvider>
      ) : (
        <>
        <div className="header-margin"></div>
        {/* header top margin */}
  
        <FlightsSearchProvider>

          <Header />

          <MobileDateSearchCalendar />
          <section className="section-bg pt-40 pb-40 relative z-5">
            <div className="section-bg__item col-12">
              <img
                src="/img/flights/sky.jpg"
                alt="Jetting Flights"
                className="w-full h-full object-cover"
              />
            </div>
            {/* End .section-bg__item */}
  
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    <h2 className="text-30 fw-600 text-white">
                      Find Your Dream Flight
                    </h2>
                  </div>
                  {/* End text-center */}
                  <FlightsFilterSearchBox />
                </div>
                {/* End col-12 */}
              </div>
            </div>
          </section>
          {/* Top SearchBanner */}
          <FlightsResultsProvider>
  
            <FlightsFormSticky />
  
            <FlightsResults/>
            
          </FlightsResultsProvider>
        </FlightsSearchProvider>
  
        <Footer />
        </>
      )}
    </>
  );
};

export default index;
