'use client'

import { useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from "next/navigation"
import useLocalStorage from "@/hooks/useLocalStorage"
import { DateObject } from "react-multi-date-picker"
import { checkForErrors } from "@/modules/common/search"
import { makeSearch, generateSearchUrl } from "@/modules/vio/utils/search"
import getPlaces from "@/modules/skyscanner/utils/getPlaces"
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import { HotelsSearchContext } from '@/contexts/HotelsSearchContext'
export const useSearchForm = () => useContext(HotelsSearchContext)

export const HotelsSearchProvider = ({ children }) => {
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [searchActive, setSearchActive] = useState(false)

  const [storredHotelsSearchData, setStorredHotelsSearchData] = useLocalStorage("searchData", {})

  const [hotelsSearchData, setHotelsSearchData] = useState(storredHotelsSearchData)
  const handleSetHotelsSearchData = (newHotelsSearchData) => {
    setToPlace(newHotelsSearchData.toPlace)
    setTravelersCount(newHotelsSearchData.travelersCount)
    setTripType(newHotelsSearchData.tripType)
    setAutoSearch(newHotelsSearchData.autoSearch)
    setDates(newHotelsSearchData.dates)
  }

  //flying places
  const [toSearchValue, setToSearchValue] = useState("")
  const [toPlace, setToPlace] = useState(hotelsSearchData?.toPlace ?? null)
  const toPlaceInputRef = useRef(null)

  //set from,to places if empty name
  const fetchAndSetPlaces = async ({ toPlace }) => {
    // console.log('fetchAndSetPlaces')
    const newHotelsSearchData = {... hotelsSearchData}

    if (toPlace?.iataCode && !toPlace?.name) {
      const places = await getPlaces({ searchTerm: toPlace.iataCode })
      const fullToPlace = places.find(item => item.iataCode === toPlace.iataCode)
      newHotelsSearchData.toPlace = fullToPlace ?? {}
    }
    
    setHotelsSearchData(newHotelsSearchData)
    handleSetHotelsSearchData(newHotelsSearchData)
  }
  useDebouncedEffect(() => {
    if (toPlace?.iataCode && !toPlace?.name) {
      fetchAndSetPlaces({ toPlace })
    }
  }, 20, [toPlace])

  //travelerss
  const [travelersCount, setTravelersCount] = useState(hotelsSearchData?.travelersCount ?? {
    Adults: 2,
    Children: 0,
  })

  //filters
  const [tripType, tripTypeOLD] = useState("Round Trip") //hotelsSearchData?.tripType ?? "Round Trip"
  //always show round trip
  const [tripTypeNEW, setTripType] = useState(hotelsSearchData?.tripType ?? "Round Trip")
  const [flightsSearch, setFlightsSearch] = useState(hotelsSearchData?.flightsSearch ?? 'true')
  const [autoSearch, setAutoSearch] = useState(hotelsSearchData?.autoSearch ?? 'false')

  //dates
  const dateInitial = hotelsSearchData?.dates ?
  hotelsSearchData.dates
  : tripType == "Round Trip" ? [
    new DateObject().add(5, "day"),
    new DateObject().add(12, "day"),
  ] : [
    new DateObject().add(5, "day"),
  ]
  const [dates, setDates] = useState(dateInitial)
  const handleDatesChange = (value, tripType) => {
    let selectedDates = value
    if (tripType == 'One Way') {
      selectedDates = value[1] ?? value[0] ?? dates[0] ?? new DateObject().add(5, "day")
    }
    const newDate = Array.isArray(selectedDates) ? selectedDates : [new DateObject(selectedDates)]
    setDates(newDate)
    
    const currentDate = new DateObject().format('YYYY/MM/DD')
    const currentDateUnix = new DateObject(currentDate).toUnix()
    const dateTo = new DateObject(newDate[0])
    const dateBack = newDate[1] ? new DateObject(newDate[1]) : null
    if (dateBack && (currentDateUnix < dateTo.toUnix() && currentDateUnix < dateBack.toUnix()) || currentDateUnix <= dateTo.toUnix()) {
      delete errors.dates
      setErrors({... errors})
    }
  }
  
  //date picker
  const datePickerRef = useRef(null)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const handleDatePickerMonthChange = (date, updateView = false) => {
    const dateInit = new DateObject(date)
    if (updateView) {
      datePickerRef.current.set('year', dateInit.format('YYYY'))
      datePickerRef.current.set('month', dateInit.format('MM'))
    }
  }
  const handleDatePickerOpen = (set = false, setNewDate = false) => {
    if ((!set && isDatePickerOpen) || set == 'close') {
      setIsDatePickerOpen(false)
    } else if ((!set && !isDatePickerOpen) || set == 'open') {
      if (setNewDate) {
        handleDatePickerMonthChange(dates[0], true)
      }
      setIsDatePickerOpen(true)
    }
  }

  const handleTripTypeTypeChange = (value) => {
    setTripType(value)

    if (value == "Round Trip") {
      const outDate = dates[0]
      setDates([
        new DateObject(outDate),
        new DateObject(outDate).add(7, "day"),
      ])
    } else {
      setDates([
        dates[0] ?? new DateObject().add(5, "day"),
      ])
    }
  }

  //handle storring new data in local storage
  useEffect(() => {
    setStorredHotelsSearchData(hotelsSearchData)
  }, [hotelsSearchData])

  //form submit
  const handleHotelsSearchFormSubmit = async ({ samePage, scrollToResults = true }) => {
    const searchData = {
      toPlace,
      travelersCount,
      flightsSearch,
      autoSearch,
      dates
    }

    const hasErrors = checkForErrors(
      { toPlace: searchData.toPlace, dates: searchData.dates },
      errors,
      setErrors,
      ['toPlace', 'dates']
    )
    if (!hasErrors) {
      handleDatePickerOpen('close')
      //flights
      // if (flightsSearch == 'true') {
      //   setHotelsSearchData(searchData)
      //   const flightsUrl = generateSearchUrl({ searchData: { ... searchData }, samePage, scrollToResults })
        
      //   const windowResult = open(flightsUrl, '_blank')
      //   windowResult.focus()

      //   // try {
      //   //   const url = await getFlightsLink({ searchData })
          
      //   //   windowResult.onload = function () {
      //   //     if (url) {
      //   //       router.push(url)
      //   //     }
      //   //   }
      //   // } catch (error) {
      //   //   console.error('Error:', error)
      //   // }
      // } else {
        makeSearch({ router, searchData: { ... searchData }, setHotelsSearchData, scrollToResults, searchActive, setSearchActive, samePage })
      // }
    } else {
      if (errors.dates == 'Date Required!') {
        handleDatePickerOpen('open')
      }
    } 
  }

  return (
    <HotelsSearchContext.Provider
      value={{
        toSearchValue, setToSearchValue,
        toPlace, setToPlace, toPlaceInputRef,
        dates, handleDatesChange,
        datePickerRef, isDatePickerOpen, setIsDatePickerOpen, handleDatePickerOpen, handleDatePickerMonthChange,
        travelersCount, setTravelersCount,
        tripType, setTripType, handleTripTypeTypeChange,
        flightsSearch, setFlightsSearch,
        autoSearch, setAutoSearch,
        handleHotelsSearchFormSubmit,
        searchActive, setSearchActive,
        hotelsSearchData, setHotelsSearchData, handleSetHotelsSearchData,
        errors, setErrors,
      }}
    >
      {children}
    </HotelsSearchContext.Provider>
  );
};
