import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import { formatDateTime } from "@/helpers/main"
import Image from "next/image"
import { DateObject } from "react-multi-date-picker"

const FlightsBanner = () => {
  const { flightsSearchData } = useSearchForm()
  const { formattedDate: toDate } = formatDateTime(new DateObject(flightsSearchData.dates[0]), true)
  const { formattedDate: backDate } = formatDateTime(new DateObject(flightsSearchData.dates[1]), true)
  
  return (
    <>
    {flightsSearchData.fromPlace && (
      <section className="header-banner py-5 bg-dark-4">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="col-auto">
                <p
                  className="text-12 text-white"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <span>
                    {flightsSearchData.fromPlace.iataCode}
                    {flightsSearchData.dates.length == 2 ? (
                      <>
                       {/* <Image
                         width="14"
                         height="14"
                         className="ml-5 mr-5 pb-2"
                         src="/img/flights/arrows-horizontal.svg"
                         alt="round"
                       /> */}
                      <i className={`icon-transfer-arrows text-11 ml-5 mr-5`} />
                      </>
                    ) : (
                      <i className={`icon-arrow-right text-11 ml-5 mr-5`} />
                    )}
                    {flightsSearchData.toPlace.iataCode}
                  </span>
                  <span className="ml-20 mr-20 border-left-light"></span>
                  <span>
                    {flightsSearchData.dates.length == 2 ? (
                      <>
                        {toDate} - {backDate}
                      </>
                    ) : (
                      <>
                        {toDate}
                      </>
                    )}
                  </span>
                  <span className="ml-20 mr-20 border-left-light"></span>
                  <span>
                    <i className={`icon-user-2 text-10 mr-5`} />
                    x {flightsSearchData.passengerCounts.Adults + flightsSearchData.passengerCounts.Children + flightsSearchData.passengerCounts.Infants }
                  </span>
                </p>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    )}
    </>
  );
};

export default FlightsBanner;
