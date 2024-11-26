
'use client'

import { useSearchForm } from './FlightsSearchProvider';
import Image from "next/image"

const LocationSwitcher = () => {
  const { setFromSearchValue, setToSearchValue, fromPlace, setFromPlace, toPlace, setToPlace, emptyIndicativePrices } = useSearchForm()

  const handleSwitchLocations = () => {
    setFromSearchValue('')
    setToSearchValue('')
    setFromPlace(toPlace)
    setToPlace(fromPlace)

    emptyIndicativePrices()
  }
  
  return (
    <>
      <div
        className={`position-absolute location-switcher cursor-pointer rounded-4 bg-white d-flex justify-center align-items-center`}
        onClick={handleSwitchLocations}
      >
        <div className="icon-transfer-arrows text-dark-5 text-16" />
        {/* <Image
          width="28"
          height="28"
          src="/img/flights/arrows-horizontal-dark.svg"
          alt="location switcher"
        /> */}
      </div>
    </>
  );
};

export default LocationSwitcher;
