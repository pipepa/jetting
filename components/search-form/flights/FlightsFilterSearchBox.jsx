
'use client'

import { DesktopDateSearchCalendar } from "./DateSearch";
import PassengersSearch from "./PassengersSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import FilterSelect from "@/components/search-form/common/FilterSelect";
import { useSearchForm } from './FlightsSearchProvider';

const FlightsFilterSearchBox = ({ samePage = true, textClass = 'text-white' }) => {
  const { handleFlightsSearchFormSubmit } = useSearchForm()
  
  return (
    <>
      <div className="row y-gap-20 sm:y-gap-0 pt-30 pl-35 lg:pl-10 items-center">
        <FilterSelect textClass={textClass} />
      </div>

      <div 
        className="mainSearch -col-5 bg-white shadow-1 rounded-100 xl:rounded-16 px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 mt-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="button-grid items-center">
          <FlyingFromLocation />

          <FlyingToLocation />

          <DesktopDateSearchCalendar />

          <PassengersSearch />

          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 bg-dark-4 text-white"
              onClick={() => handleFlightsSearchFormSubmit({ samePage, scrollToResults: true })}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsFilterSearchBox;
