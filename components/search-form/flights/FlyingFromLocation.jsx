'use client'

import { useState, useEffect, useRef } from "react";
import { useSearchForm } from './FlightsSearchProvider';
import getPlaces from "@/modules/skyscanner/utils/getPlaces";
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import { useRecommendedUserLocation } from "@/hooks/useUserLocation"
import LocationSearch from "../common/locationSearch"

const FlyingFromLocation = ({ className = 'pl-24 pr-20 lg:py-15 md:py-10 lg:px-0' }) => {
  const inputRef = useRef(null)
  const { fromSearchValue, setFromSearchValue, fromPlace, setFromPlace, toPlaceInputRef, emptyIndicativePrices, errors, setErrors } = useSearchForm()
  const { recommendedFlightLocation } = useRecommendedUserLocation()

  useEffect(() => {
    if (!fromPlace && recommendedFlightLocation) {
      setFromPlace(recommendedFlightLocation)
      
      //errors
      delete errors.fromPlace
      setErrors({... errors})
    }
  }, [ recommendedFlightLocation ])

  const [locationSearchContent, setLocationSearchContent] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  // const [isDisabled, setIsDisabled] = useState(false)

  const fromPlaceError = errors.fromPlace ?? null

  const handleSearchValue = (value) => {
    const searchTerm = value

    if (fromPlace) {
      emptyIndicativePrices()
      setFromPlace(null)
    }
    
    setFromSearchValue(searchTerm)

    if (!showPopup) {
      setShowPopup(true)
    }
    
    setLocationSearchContent([])
    setIsLoading(true)
  }

  useDebouncedEffect(() => {
    async function fetchData() {
      // setIsDisabled(true)
      const locations = await getPlaces({ searchTerm: fromSearchValue })
      setLocationSearchContent([... locations])

      // setIsDisabled(false)
      setIsLoading(false)
    }

    if (fromSearchValue) {
      fetchData()
    }
  }, 300, [fromSearchValue])

  const [showPopup, setShowPopup] = useState(false)
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleOptionClick = (item) => {
    setFromSearchValue(item.name)
    emptyIndicativePrices()
    setFromPlace(item)
    
    //errors
    delete errors.fromPlace
    setErrors({... errors})
    
    //close search popup
    setShowPopup(false)

    //focus on to place input
    toPlaceInputRef.current?.focus()
  }

  const handleCloseDropdown = () => {
    setFromSearchValue('')
  }

  return (
    <>
      <LocationSearch 
        className={className}
        showPopup={showPopup}
        isLoading={isLoading}
        location={fromPlace}
        locationError={fromPlaceError}
        searchValue={fromSearchValue}
        locationSearchContent={locationSearchContent}
        handleSearchValue={handleSearchValue}
        handleOptionClick={handleOptionClick}
        handleCloseDropdown={handleCloseDropdown}
        handleDivClick={handleDivClick}
        locationInputRef={inputRef}
        // isDisabled={isDisabled}
        placeholder="Jetting off from"
        label="Departure"
        showSwitcher={true}
      />
    </>
  );
};

export default FlyingFromLocation;
