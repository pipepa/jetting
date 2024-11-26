'use client'

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { checkForErrors } from "@/modules/common/search"
import { makeSearch, getSearchData, formatSearchData, getSearchResultsData, getPickedTickets, getFlightsProviders, getFiltersData } from "@/modules/skyscanner/utils/search"
import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import { useRecommendedUserLocation } from "@/hooks/useUserLocation"
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import { useRouter } from "next/navigation"
import { DateObject } from "react-multi-date-picker"

const FlightsResultsContext = createContext()

export const useFlightsResults = () => useContext(FlightsResultsContext)

export const FlightsResultsProvider = ({ children }) => {
  const router = useRouter()
  const { flightsSearchData, setFlightsSearchData, handleSetFlightsSearchData, searchActive, setSearchActive, autoSearch, errors, setErrors, handleDatePickerOpen } = useSearchForm()
  const { recommendedFlightLocation } = useRecommendedUserLocation()

  const [newFlightsSearchData, setNewFlightsSearchData] = useState(false)

  const [autoSearchCalled, setAutoSearchCalled] = useState(false)
  const [initialLoad, setInitialLoad] = useState(false)

  const [flightResultsRaw, setFlightResultsRaw] = useState([])
  const [flightCountResults, setFlightCountResults] = useState(0)
  const [pickedTickets, setPickedTickets] = useState([])
  const [flightsProviders, setFlightsProviders] = useState([])
  const [selectedFlightsProviders, setSelectedFlightsProviders] = useState([])

  const [sortType, setSortType] = useState('Cheapest') //Cheapest & Fastest
  const [filterValues, setFilterValues] = useState([])

  const [status, setStatus] = useState(null)

  const [canPaginate, setCanPaginate] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(2)

  useEffect(() => {
    setSearchActive(true)
    setInitialLoad(true)
  }, [])

  async function launchSearch(initFlightsSearchData) {
    setStatus('Loading')

    //reset data
    setCanPaginate(false)
    setCurrentPage(1)
    setFlightResultsRaw([])
    setFlightCountResults(0)
    setPickedTickets([])
    setFlightsProviders([])
    // setSelectedFlightsProviders([])

    let result = null
    let sessionToken
    do {
      const searchData = formatSearchData(initFlightsSearchData)
      result = await getSearchResultsData(searchData, sessionToken)
      sessionToken = result.sessionToken

      if (result && result.flights.length > 0) {
        setCanPaginate(result.canPaginate)
        setFlightResultsRaw(result.flights)
        setFlightCountResults(result.flightsCount)
        setPickedTickets(getPickedTickets(result.flights, result.sortingOptions))
        setFlightsProviders(getFlightsProviders(result.flightsUnfiltered))
      }
    } while (result && !result.canPaginate)  // Continue while canPaginate is false

    setStatus('Completed')
  }

  useEffect(() => {
    async function getSearchResults() {
      const url = window.location.hash;
      if (!initialLoad || url) {
        const initFlightsSearchData = { ...initialLoad ? formatSearchData(getSearchData(url), false) : flightsSearchData }
        if (initialLoad) {
          if (flightsSearchData?.fromPlace?.iataCode === initFlightsSearchData?.fromPlace.iataCode) {
            initFlightsSearchData.fromPlace = flightsSearchData.fromPlace;
          }
          if (flightsSearchData?.toPlace?.iataCode === initFlightsSearchData?.toPlace.iataCode) {
            initFlightsSearchData.toPlace = flightsSearchData.toPlace;
          }
          setFlightsSearchData(initFlightsSearchData);
          handleSetFlightsSearchData(initFlightsSearchData);
        }
        setNewFlightsSearchData(initFlightsSearchData);

        const hasErrors = checkForErrors({
          fromPlace: initFlightsSearchData.fromPlace,
          toPlace: initFlightsSearchData.toPlace,
          dates: initFlightsSearchData.dates
        }, {}, setErrors);
        if (!hasErrors) {
          await launchSearch(initFlightsSearchData);
        }
      }

      setSearchActive(false);
      setInitialLoad(false);
    }

    if (searchActive) {
      getSearchResults();
    }
  }, [searchActive]);
  
  useDebouncedEffect(() => {
    async function setAutoSearch() {
      const hasErrors = checkForErrors({
        fromPlace: newFlightsSearchData.fromPlace,
        toPlace: newFlightsSearchData.toPlace,
        dates: newFlightsSearchData.dates
      }, errors);
      if (hasErrors) {
        if (hasErrors.fromPlace) {
          newFlightsSearchData.fromPlace = recommendedFlightLocation
          delete hasErrors.fromPlace
        }
        
        setErrors({... hasErrors})
        if (!hasErrors) {
          makeSearch({ router, searchData: { ... newFlightsSearchData }, setFlightsSearchData, searchActive, setSearchActive, samePage: true })
        }
        handleSetFlightsSearchData(newFlightsSearchData)
        if (hasErrors.dates) {
          handleDatePickerOpen('open')
        }
      }
    }

    if (!autoSearchCalled && !status && autoSearch == 'true' && recommendedFlightLocation && newFlightsSearchData) {
      setAutoSearch();
      setAutoSearchCalled(true);
    }
  }, 20, [autoSearchCalled, status, autoSearch, recommendedFlightLocation, newFlightsSearchData]);

  //filters data
  const filtersData = useMemo(() => {
    if (status) {
      const filters = getFiltersData(flightResultsRaw)
      return filters
    } else {
      const filters = getFiltersData([])
      return filters
    }
  }, [status, flightResultsRaw])

  //sort flights
  const sortedFlights = useMemo(() => {
    let sortedFlights = [...flightResultsRaw]
    
    switch (sortType) {
      case 'Cheapest':
        sortedFlights.sort((a, b) => a.minPrice - b.minPrice)
        break
      case 'Fastest':
        sortedFlights.sort((a, b) => a.durationInMinutes - b.durationInMinutes)
        break
      case 'Cheapest & Fastest':
        sortedFlights.sort((a, b) => b.bestScore - a.bestScore)
        break
      case 'Earliest':
        sortedFlights.sort((a, b) => {
          const aDatetime = a.outbound.departureDateTime
          const bDatetime = b.outbound.departureDateTime
          return new Date(aDatetime.year, bDatetime.month - 1, aDatetime.day, aDatetime.hour, aDatetime.minute).getTime() - new Date(bDatetime.year, bDatetime.month - 1, bDatetime.day, bDatetime.hour, bDatetime.minute).getTime()
        })
        break
    }

    return sortedFlights
  }, [flightResultsRaw, sortType])

  //filter flights
  const flightResults = useMemo(() => {
    let filteredFlights = [...sortedFlights]

    if (status) {
  
      if (filterValues['Stops']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          const outboundStopsCount = flight.outbound.steps.filter(stopItem => stopItem?.transfer === true).length
          const inboundStopsCount = flight.inbound ? flight.inbound?.steps.filter(stopItem => stopItem?.transfer === true).length : 0
          const flightStops = outboundStopsCount + inboundStopsCount
          if (filterValues['Stops'].includes('Nonstop') && flightStops == 0) return true
          if (filterValues['Stops'].includes('1 Stop') && (outboundStopsCount == 1 || inboundStopsCount == 1)) return true
          if (filterValues['Stops'].includes('2+ Stops') && (outboundStopsCount >= 2 || inboundStopsCount >= 2)) return true
          return false
        })
      }
      if (filterValues['Departure time']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          const flightTime = new Date(0, 0, 0, flight.outbound.departureDateTime.hour, flight.outbound.departureDateTime.minute)
          if (filterValues['Departure time'].includes('Morning')) {
            const startTime = new Date(0, 0, 0, 6, 0)
            const endTime = new Date(0, 0, 0, 11, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          } 
          if (filterValues['Departure time'].includes('Afternoon')) {
            const startTime = new Date(0, 0, 0, 12, 0)
            const endTime = new Date(0, 0, 0, 17, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          if (filterValues['Departure time'].includes('Evening')) {
            const startTime = new Date(0, 0, 0, 18, 0)
            const endTime = new Date(0, 0, 0, 23, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          if (filterValues['Departure time'].includes('Night')) {
            const startTime = new Date(0, 0, 0, 0, 0)
            const endTime = new Date(0, 0, 0, 5, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          return false
        })
      }
      if (filterValues['Arrival time']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          const flightTime = new Date(0, 0, 0, flight.outbound.arrivalDateTime.hour, flight.outbound.arrivalDateTime.minute)
          if (filterValues['Arrival time'].includes('Morning')) {
            const startTime = new Date(0, 0, 0, 6, 0)
            const endTime = new Date(0, 0, 0, 11, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          } 
          if (filterValues['Arrival time'].includes('Afternoon')) {
            const startTime = new Date(0, 0, 0, 12, 0)
            const endTime = new Date(0, 0, 0, 17, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          if (filterValues['Arrival time'].includes('Evening')) {
            const startTime = new Date(0, 0, 0, 18, 0)
            const endTime = new Date(0, 0, 0, 23, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          if (filterValues['Arrival time'].includes('Night')) {
            const startTime = new Date(0, 0, 0, 0, 0)
            const endTime = new Date(0, 0, 0, 5, 59)

            if (flightTime >= startTime && flightTime <= endTime) return true
          }
          return false
        })
      }
      if (filterValues['Price'] && filterValues['Price'] > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          if (flight.minPrice <= filterValues['Price']) return true
          return false
        })
      }
      if (filterValues['Duration'] && filterValues['Duration'] > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          if (flight.durationInMinutes <= filterValues['Duration'] * 60) return true
          return false
        })
      }
      if (filterValues['Departing from']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          const departingFrom = flight.outbound.originPlace.name + ' (' + flight.outbound.originPlace.iata + ')'
          if (filterValues['Departing from'].includes(departingFrom)) return true
          return false
        })
      }
      if (filterValues['Arriving at']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          const arrivingAtFlight = flight.inbound ? flight.inbound : flight.outbound
          const arrivingAt = arrivingAtFlight.destinationPlace.name + ' (' + arrivingAtFlight.destinationPlace.iata + ')'
          if (filterValues['Arriving at'].includes(arrivingAt)) return true
          return false
        })
      }
      if (filterValues['Stops at']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          let stops = flight.outbound.steps.concat(flight.inbound ? flight.inbound.steps : [])
          return stops.some(stopItem => {
            const stop = `${stopItem.originPlace.name} (${stopItem.originPlace.iata})`
            return filterValues['Stops at'].includes(stop)
          })
        })
      }
      if (filterValues['Airlines']?.length > 0) {
        filteredFlights = filteredFlights.filter(flight => {
          let airlines = flight.outbound.carriers.concat(flight.inbound ? flight.inbound.carriers : [])
          return airlines.some(airlineItem => {
            return filterValues['Airlines'].includes(airlineItem.name)
          })
        })
      }

    }

    setFlightCountResults(filteredFlights.length)
    return filteredFlights
  }, [sortedFlights, filterValues, status])

  // pagination
  useEffect(() => {
    let extraPages = 1
    if (flightResults) {
      if (flightResults.length % MAX_ITEMS === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(flightResults.length / MAX_ITEMS) + extraPages)
    }
  }, [flightResults])
  const MAX_ITEMS = 10

  return (
    <FlightsResultsContext.Provider
    value={{
      flightResults, flightResultsRaw, flightCountResults,
      pickedTickets,
      flightsProviders,
      selectedFlightsProviders, setSelectedFlightsProviders,
      filtersData,
      sortType, setSortType,
      filterValues, setFilterValues,
      status,
      canPaginate, maxPage, currentPage, setCurrentPage, MAX_ITEMS,
    }}>
      {children}
    </FlightsResultsContext.Provider>
  )
}
