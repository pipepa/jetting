'use client'

import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import FlyingFromLocation from "@/components/search-form/flights/FlyingFromLocation"
import FlyingToLocation from "@/components/search-form/flights/FlyingToLocation"

const SearchResultsBanner = ({ locationType, locationTo, samePage = true }) => {
  const { handleFlightsBannerFormSubmit } = useSearchForm()

  return (
    <div className="masthead -type-2 bg-dark-1">
      <div className="container ">
        <div className="row align-items-center justify-between">
          <div className="col-12 col-lg-6 lg:px-20 lg:py-20">
            <h1 className="text-white text-40 fw-600 sm:text-25">
              We know where the cheapest tickets to {locationTo.name} are!
            </h1>
            <h2 className="text-22 sm:text-18 fw-400 text-rich-300 mt-20">
              We search 300+ sellers to secure the best price for your upcoming flight to {locationTo.name}
            </h2>
          </div>
          <div className="col-12 col-lg-6 c col-xl-5 lg:px-20 lg:py-20">
            <div className="row justify-center text-center md:px-5 md:py-24 px-15 py-30 bg-new-1 rounded-18 m-0 box-shadow">
              <div className="col-12">
                <div className="fw-600">
                  <FlyingFromLocation className={`banner-location-container`} />
                </div>
              </div>
              <div className="col-12 mt-20">
                <div className="fw-600">
                  <FlyingToLocation className={`banner-location-container`} openDates={false} />
                </div>
              </div>
              <div className="col-12 mt-20">
                <button
                  className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 bg-dark-4 text-white"
                  onClick={() => handleFlightsBannerFormSubmit({ locationType, samePage })}
                >
                  <i className="icon-search text-20 mr-10" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsBanner;
