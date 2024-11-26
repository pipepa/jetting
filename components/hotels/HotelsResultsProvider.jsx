'use client'

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { checkForErrors } from "@/modules/common/search"
import { makeSearch, getSearchData, formatSearchData, getSearchResultsData, getFiltersData, getHotelsProviders } from "@/modules/vio/utils/search"
import { useSearchForm } from '@/components/search-form/hotels/HotelsSearchProvider'
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import { useRouter } from "next/navigation"
import { DateObject } from "react-multi-date-picker"

const HotelsResultsContext = createContext()

export const useHotelsResults = () => useContext(HotelsResultsContext)

export const HotelsResultsProvider = ({ children }) => {
  const router = useRouter()
  const { hotelsSearchData, setHotelsSearchData, handleSetHotelsSearchData, searchActive, setSearchActive, autoSearch, errors, setErrors, handleDatePickerOpen } = useSearchForm()

  const [newHotelsSearchData, setNewHotelsSearchData] = useState(false)

  const [autoSearchCalled, setAutoSearchCalled] = useState(false)
  const [initialLoad, setInitialLoad] = useState(false)

  const [sessionToken, setSessionToken] = useState(null)
  const [hotelResults, setHotelResults] = useState([])
  const [hotelCountResults, setHotelCountResults] = useState(0)
  const [hotelsProviders, setHotelsProviders] = useState([])
  const [selectedHotelsProviders, setSelectedHotelsProviders] = useState([])

  const defaultSortType = 'best'
  const [sortType, setSortType] = useState(defaultSortType)
  const [filterValues, setFilterValues] = useState({})

  const [status, setStatus] = useState(null)

  const [canPaginate, setCanPaginate] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(2)
  const MAX_ITEMS = 20

  useEffect(() => {
    setSearchActive(true)
    setInitialLoad(true)
  }, [])

  async function launchSearch(initHotelsSearchData) {
    setStatus('Loading')

    //reset data
    setCanPaginate(false)
    setCurrentPage(1)
    setHotelResults([])
    setHotelCountResults(0)
    setHotelsProviders([])
    // setSelectedHotelsProviders([])

    let result = null
    let sessionToken
    do {
      const searchData = formatSearchData(initHotelsSearchData)
      searchData.pageSize = MAX_ITEMS
      result = await getSearchResultsData({ searchData, sessionToken, sortType, filters: filterValues })
      sessionToken = result.sessionToken

      if (result && result.hotels.length > 0) {
        setCanPaginate(result.canPaginate)
        setHotelResults(result.hotels)
        setHotelCountResults(result.hotelsCount)
        setHotelsProviders(getHotelsProviders(result.hotelsUnfiltered))
      }
    } while (result && !result.canPaginate)  // Continue while canPaginate is false

    setStatus('Completed')
    setSessionToken(sessionToken)
  }

  useEffect(() => {
    async function getSearchResults() {
      const url = window.location.hash;
      if (!initialLoad || url) {
        const initHotelsSearchData = { ...initialLoad ? formatSearchData(getSearchData(url), false) : hotelsSearchData }
        if (initialLoad) {
          if (hotelsSearchData?.toPlace?.iataCode === initHotelsSearchData?.toPlace.iataCode) {
            initHotelsSearchData.toPlace = hotelsSearchData.toPlace;
          }
          setHotelsSearchData(initHotelsSearchData);
          handleSetHotelsSearchData(initHotelsSearchData);
        }
        setNewHotelsSearchData(initHotelsSearchData);

        const hasErrors = checkForErrors({
          toPlace: initHotelsSearchData.toPlace,
          dates: initHotelsSearchData.dates
        }, {}, setErrors, [ 'toPlace', 'dates' ])
        if (!hasErrors) {
          await launchSearch(initHotelsSearchData);
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
        toPlace: newHotelsSearchData.toPlace,
        dates: newHotelsSearchData.dates
      }, errors, null, [ 'toPlace', 'dates' ]);
      if (hasErrors) {
        setErrors({... hasErrors})
        if (!hasErrors) {
          makeSearch({ router, searchData: { ... newHotelsSearchData }, setHotelsSearchData, searchActive, setSearchActive, samePage: true })
        }
        handleSetHotelsSearchData(newHotelsSearchData)
        if (hasErrors.dates) {
          handleDatePickerOpen('open')
        }
      }
    }

    if (!autoSearchCalled && !status && autoSearch == 'true' && newHotelsSearchData) {
      setAutoSearch();
      setAutoSearchCalled(true);
    }
  }, 20, [autoSearchCalled, status, autoSearch, newHotelsSearchData]);

  //filters data
  const filtersData = useMemo(() => {
    if (status) {
      const filters = getFiltersData(hotelResults)
      return filters
    } else {
      const filters = getFiltersData([])
      return filters
    }
  }, [status, hotelResults])

  //sort & filter hotels
  useDebouncedEffect(() => {
    async function handleSortAndFilter() {
      if (status == 'Completed') {
        await launchSearch(hotelsSearchData)
      }
    }
    handleSortAndFilter()
  }, 100, [ sortType, filterValues ])

  // pagination
  useEffect(() => {
    let extraPages = 1
    if (hotelCountResults) {
      if (hotelCountResults % MAX_ITEMS === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(hotelCountResults / MAX_ITEMS) + extraPages)
    }
  }, [hotelCountResults])

  useDebouncedEffect(() => {
    async function getNextPage() {
      if (currentPage > 1 && sessionToken) {
        const searchData = formatSearchData(newHotelsSearchData)
        searchData.pageSize = MAX_ITEMS
        searchData.offset = (currentPage - 1) * MAX_ITEMS
        const result = await getSearchResultsData({ searchData, sessionToken, sortType, filters: filterValues })
        if (result && result.hotels.length > 0) {
          setHotelResults(prevHotels => [...prevHotels, ...result.hotels])
        }
      }
    }
    getNextPage()
  }, 10, [currentPage, sessionToken])

  return (
    <HotelsResultsContext.Provider
      value={{
        hotelResults, hotelsCount: hotelCountResults,
        hotelsProviders,
        selectedHotelsProviders, setSelectedHotelsProviders,
        filtersData,
        sortType, setSortType,
        filterValues, setFilterValues,
        status,
        canPaginate, maxPage, currentPage, setCurrentPage, MAX_ITEMS,
      }}
    >
      {children}
    </HotelsResultsContext.Provider>
  )
}
