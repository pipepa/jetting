'use client'

import { useState } from "react";
import { useSearchForm } from './FlightsSearchProvider';
import getPlaces from "@/modules/skyscanner/utils/getPlaces";
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import LocationSearch from "../common/locationSearch"
const FlyingToLocation = ({ className = 'px-20 lg:py-15 md:py-10 lg:px-0', openDates = true }) => {
  const { toSearchValue, setToSearchValue, toPlace, setToPlace, toPlaceInputRef, emptyIndicativePrices, errors, setErrors } = useSearchForm()

  const [locationSearchContent, setLocationSearchContent] = useState([])
  
  const [isLoading, setIsLoading] = useState(false)
  // const [isDisabled, setIsDisabled] = useState(false)

  const toPlaceError = errors.toPlace ?? null

  const handleSearchValue = (value) => {
    const searchTerm = value

    if (toPlace) {
      emptyIndicativePrices()
      setToPlace(null)
    }

    setToSearchValue(searchTerm)

    if (!showPopup) {
      setShowPopup(true)
    }
    
    setLocationSearchContent([])
    setIsLoading(true)
  }

  useDebouncedEffect(() => {
    async function fetchData() {
      // setIsDisabled(true)
      const locations = await getPlaces({ searchTerm: toSearchValue })
      setLocationSearchContent([... locations])

      // setIsDisabled(false)
      setIsLoading(false)
    }

    if (toSearchValue) {
      fetchData()
    }
  }, 300, [toSearchValue])

  const [showPopup, setShowPopup] = useState(false)
  const handleDivClick = () => {
    if (toPlaceInputRef.current) {
      toPlaceInputRef.current.focus()
    }
  }

  const handleOptionClick = (item) => {
    setToSearchValue(item.name)
    emptyIndicativePrices(openDates)
    setToPlace(item)
    
    //errors
    delete errors.toPlace
    setErrors({... errors})

    //close search popup
    setShowPopup(false)
  }

  const handleCloseDropdown = () => {
    setToSearchValue('')
  }

  return (
    <LocationSearch 
      className={className}
      showPopup={showPopup}
      isLoading={isLoading}
      location={toPlace}
      locationError={toPlaceError}
      searchValue={toSearchValue}
      locationSearchContent={locationSearchContent}
      handleSearchValue={handleSearchValue}
      handleOptionClick={handleOptionClick}
      handleCloseDropdown={handleCloseDropdown}
      handleDivClick={handleDivClick}
      locationInputRef={toPlaceInputRef}
      // isDisabled={isDisabled}
      placeholder="Jetting off to"
      label="Arrival"
    />
  );
};

export default FlyingToLocation;
