'use client'

import { DesktopDateSearchCalendar } from "./DateSearch";
import GuestSearch from "./GuestSearch"
import LocationSearch from "./LocationSearch"
import { useSearchForm } from "./HotelsSearchProvider"

const HotelsSearchForm = ({ samePage = true }) => {

  const { handleHotelsSearchFormSubmit } = useSearchForm()

  return (
    <>
      <div className="mainSearch bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-10">
        <div className="button-grid items-center">
          <LocationSearch />

          <DesktopDateSearchCalendar />

          <GuestSearch />

          <div className="button-item h-full">
            <button 
              className="button -dark-1 py-15 px-40 h-full col-12 bg-dark-4 text-white"
              onClick={() => handleHotelsSearchFormSubmit({ samePage, scrollToResults: true })}
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

export default HotelsSearchForm;
