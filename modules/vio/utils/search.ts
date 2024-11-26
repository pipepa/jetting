import { DateObject } from "react-multi-date-picker"
import { checkForErrors } from "@/modules/common/search"
import { calculateAveragePrice } from "@/helpers/price"
import { parseSearchResults } from "@/modules/vio/utils/parseSearchResults"

export function generateSearchUrl({ searchData, samePage, scrollToResults }) {
  const formattedSearchData = formatSearchData(searchData)
  const tripTypeValue = formattedSearchData.dates[0] && formattedSearchData.dates[1] ? '1' : '0'
  const backTime = formattedSearchData.dates[1] ? formattedSearchData.dates[1] : ''
  
  return `${samePage ? '' : '/hotels'}#` + 
  formattedSearchData.toPlace.iataCode + '/' +
  formattedSearchData.dates[0] + '/' +
  backTime + '/' +
  formattedSearchData.travelersCount.Adults + ',' + formattedSearchData.travelersCount.Children + '/' + 
  tripTypeValue + '/' +
  formattedSearchData.flightsSearch + '/' +
  formattedSearchData.autoSearch //+
  // `${scrollToResults ? '#results' : ''}`
}

export function makeSearch({
  router,
  searchData,
  setHotelsSearchData,
  scrollToResults,
  searchActive = false,
  setSearchActive = null,
  errors = null,
  setErrors = null,
  openInNewTab = false,
  samePage = false,
}) {
  let hasErrors = false
  if (setErrors) {
    hasErrors = checkForErrors(
      {
        toPlace: searchData.toPlace,
        dates: searchData.dates
      },
      errors,
      setErrors,
      ['toPlace', 'dates']
    )
  }
  if (!hasErrors) {
    setHotelsSearchData(searchData)

    const hotelsUrl = generateSearchUrl({ searchData: { ... searchData }, samePage, scrollToResults })

    if (!openInNewTab) {
      if (searchActive == true) {
        window.location.replace(hotelsUrl)
        window.location.reload()
      } else {
        router.push(hotelsUrl)
        setSearchActive(true)
      }
    } else {
      window.open(hotelsUrl, '_blank')
      if (searchActive != true) {
        setSearchActive(true)
      }
    }
    
    return true
  } else {
    return false
  }
}

export function formatSearchData(searchData, vioFormat = true) {
  const newSearchData = {... searchData}

  if (vioFormat) {
    const toTime = newSearchData?.dates[0] ? new DateObject(newSearchData.dates[0]) : null
    newSearchData.dates[0] = toTime ? toTime.year + '-' + toTime.month.number + '-' + toTime.day : ''
    if (newSearchData.dates[1]) {
      const backTime = newSearchData.dates[1] ? new DateObject(newSearchData.dates[1]) : null
      newSearchData.dates[1] = backTime ? backTime.year + '-' + backTime.month.number + '-' + backTime.day : ''
    }

    //hotels
    newSearchData.flightsSearch = 'FLIGHTS_NO'
    if (searchData.flightsSearch == "true") {
      newSearchData.flightsSearch = 'FLIGHTS_YES'
    }

    //auto
    newSearchData.autoSearch = 'AUTO_NO'
    if (searchData.autoSearch == "true") {
      newSearchData.autoSearch = 'AUTO_YES'
    }
  } else {
    if (searchData?.dates[0]) {
      newSearchData.dates[0] = new DateObject(searchData.dates[0])
    }
    if (searchData.dates[1]) {
      newSearchData.dates[1] = new DateObject(searchData.dates[1])
    }

    //hotels
    newSearchData.flightsSearch = 'false'
    if (searchData.flightsSearch == "FLIGHTS_YES") {
      newSearchData.flightsSearch = 'true'
    }

    //auto
    newSearchData.autoSearch = 'false'
    if (searchData.autoSearch == "AUTO_YES") {
      newSearchData.autoSearch = 'true'
    }
  }

  return newSearchData
}

async function getVioLink({ searchData }) {
  const response = await fetch('/api/vio/link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ searchData }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()

  return data
}

export async function getHotelsLink({ searchData }) {
  const vioLink = await getVioLink({ searchData })
  const url = vioLink?.links?.find(item => item.name == 'Vio.com')?.url
  return url
}

async function getVioHotelsData({ searchData }) {
  const response = await fetch('/api/vio/hotelsSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json()

  return data
}

export async function getHotels({ searchData }) {
  const newSearchData = {
    ...searchData,
  }
  if (searchData.sortingOption != "best") {
    newSearchData.sortField = searchData.sortingOption == "price-asc" || searchData.sortingOption == "price-desc" ? "price" : "guestRating"
    newSearchData.sortOrder = searchData.sortingOption == "price-asc" ? "ascending" : "descending"
  }
  const vioHotelsData = await getVioHotelsData({ searchData: newSearchData })

  //randomize hotels
  if (searchData.random) {
    vioHotelsData.hotels = vioHotelsData.hotels.sort(() => Math.random() - 0.5)
  }

  //limit hotels
  if (searchData.show) {
    vioHotelsData.hotels = vioHotelsData.hotels.slice(0, searchData.show)
  }

  return vioHotelsData
}

export async function redirectToVio({ searchData = {} }) {
  const vioHotelsData = await getHotelsLink({ searchData })
  const url = vioHotelsData?.links ? vioHotelsData.links.find(item => item.name == 'Vio.com')?.url : vioHotelsData
  window.open(url, '_blank')
}

async function getVioResults(searchData) {
  const response = await fetch('/api/vio/hotelsResults', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json()

  return data
}

export function getSearchData(url) {
  const hashPart = url.substring(1)

  const parts = hashPart.split('/');

  // Extract parts
  const toPlaceIataCode = parts[0];
  const departureDate = parts[1];
  const returnDate = parts[2];
  const travelersCountParts = parts[3].split(',');
  const tripType = parts[4] === '1' ? 'Round Trip' : 'One Way';
  const flightsSearch = parts[6];
  const autoSearch = parts[7];

  // Construct the searchData object
  return {
    toPlace: { iataCode: toPlaceIataCode },
    travelersCount: {
      Adults: parseInt(travelersCountParts[0], 10),
      Children: parseInt(travelersCountParts[1], 10),
    },
    dates: [departureDate, returnDate].filter(date => date !== ''),
    tripType: tripType,
    flightsSearch: flightsSearch,
    autoSearch: autoSearch,
  }
}

export async function getSearchResultsData({ searchData, searchSessionToken = null, sortType = null, filters = {} }) {
  const newSearchData = { ... searchData }

  //sorting
  if (sortType != "best") {
    newSearchData.sortField = sortType == "price-asc" || sortType == "price-desc" ? "price" : "guestRating"
    newSearchData.sortOrder = sortType == "price-asc" ? "ascending" : "descending"
  }

  //filters
  if (Object.keys(filters).length) {
    newSearchData.filters = {}
    
    // Get filters configuration to check which ones are singleSelect
    const filtersConfig = getFiltersData(null)
    
    Object.entries(filters).forEach(([key, values]) => {
      if (values === 'any') return // Skip 'any' values
      
      // Only convert to array if it came as array
      const filterValues = Array.isArray(values) ? values.filter(value => value !== 'any') : values
      const filterConfig = filtersConfig.find(f => f.value === key)

      if (Array.isArray(filterValues) ? filterValues.length > 0 : filterValues !== undefined) {
        if (key === 'price') {
          // Handle price ranges
          const ranges = (Array.isArray(filterValues) ? filterValues : [filterValues]).map(value => {
            const [min, max] = value.split('^').map(v => v ? parseInt(v) : undefined)
            return { min, max }
          })
          newSearchData.filters[key] = {
            min: Math.min(...ranges.map(r => r.min)),
            max: Math.max(...ranges.map(r => r.max || Number.MAX_SAFE_INTEGER))
          }
          if (newSearchData.filters[key].max === Number.MAX_SAFE_INTEGER) {
            delete newSearchData.filters[key].max
          }
        } else if (filterConfig?.singleSelect) {
          // Handle single select filters - pass value as is
          newSearchData.filters[key] = filterValues
        } else if (Array.isArray(filterValues) && filterValues.some(value => typeof value === 'string' && value.includes('^'))) {
          // For other values containing ^
          newSearchData.filters[key] = filterValues.map(value => {
            if (typeof value === 'string' && value.includes('^')) {
              return value.split('^')
            }
            return value
          })
        } else {
          // For regular values
          newSearchData.filters[key] = filterValues
        }
      }
    })
  }

  const rawResults = await getVioResults({ ...newSearchData, sessionToken: searchSessionToken })
  const parsedResults = parseSearchResults(rawResults)
  const parsedResultsUnfiltered = [ ... parsedResults ]
  const status = rawResults.completed

  const hotels = parsedResults
  const hotelsUnfiltered = parsedResultsUnfiltered
  const hotelsCount = rawResults.availableHotelsCount ? rawResults.availableHotelsCount : 0
  const canPaginate = status ? true : false

  return { hotels, hotelsUnfiltered, hotelsCount, canPaginate, sessionToken: rawResults.sessionId }
}

export function getHotelsProviders(hotelsUnfiltered) {
  if (!hotelsUnfiltered?.length) return []
  
  // Create a map to store provider data
  const providersMap = hotelsUnfiltered.reduce((acc, hotel) => {
    if (!hotel.sortedOffers) return acc
    
    hotel.sortedOffers.forEach(offer => {
      const providerName = offer.provider.name
      
      if (!acc[providerName]) {
        acc[providerName] = {
          name: providerName,
          image: offer.provider.logoUrl,
          count: 1,
          cheapestOffer: offer
        }
      } else {
        acc[providerName].count++
        // Update cheapest offer if current offer is cheaper
        if (offer.price < acc[providerName].cheapestOffer.price) {
          acc[providerName].cheapestOffer = offer
        }
      }
    })
    
    return acc
  }, {})
  // Convert map to array and sort by count
  return Object.values(providersMap)
    .sort((a: any, b: any) => b.count - a.count)
}

interface FilterItem {
  title: string
  count: number
  description?: string
  icon?: string
  minPrice?: any
  isCheapest?: any
  isBelowAverage?: any
}

export function getFiltersData(hotelResults) {
  let filters = [
    {
      title: 'Free cancellation',
      value: 'freeCancellation',
      type: 'singleSelect',
      items: {
        'true': {
          value: true,
          count: null
        },
      }
    },
    {
      title: 'Amenities',
      value: 'facilities',
      type: 'checkboxes',
      items: [
        {
          title: 'Gym',
          value: 4,
          count: null
        },
        {
          title: 'Restaurant',
          value: 5,
          count: null
        },
        {
          title: 'Parking',
          value: 6,
          count: null
        },
        {
          title: 'Swimming pool',
          value: 7,
          count: null
        },
        {
          title: 'Babysitting',
          value: 20,
          count: null
        },
        {
          title: '24-hour reception',
          value: 18,
          count: null
        },
        {
          title: 'Pet friendly',
          value: 8,
          count: null
        },
        {
          title: 'Wi-fi',
          value: 3,
          count: null
        },
      ]
    },
    {
      title: 'Themes',
      value: 'themes',
      type: 'checkboxes',
      items: [
        {
          title: 'Beach / Coast',
          value: 1,
          count: null
        },
        {
          title: 'Romantic',
          value: 10,
          count: null
        },
        {
          title: 'Family',
          value: 9,
          count: null
        },
        {
          title: 'Sightseeing',
          value: 6,
          count: null
        },
        {
          title: 'Budget / Backpacker',
          value: 3,
          count: null
        },
        {
          title: 'Historic',
          value: 16,
          count: null
        },
        {
          title: 'Casino',
          value: 101,
          count: null
        },
      ]
    },
    {
      title: 'Price',
      value: 'price',
      type: 'checkboxes',
      items: [
        {
          title: '0$ - 50$',
          value: '0^50',
          count: null
        },
        {
          title: '50$ - 100$',
          value: '50^100',
          count: null
        },
        {
          title: '100$ - 200$',
          value: '100^200',
          count: null
        },
        {
          title: '200$ - 300$',
            value: '200^300',
          count: null
        },
        {
          title: '300$ - 400$',
          value: '300^400',
          count: null
        },
        {
          title: '400$+',
          value: '400^',
          count: null
        },
      ]
    },
    {
      title: 'Hotel Stars',
      value: 'starRatings',
      type: 'buttons',
      items: [
        {
          title: '1',
          value: 1,
          count: null
        },
        {
          title: '2',
          value: 2,
          count: null
        },
        {
          title: '3',
          value: 3,
          count: null
        },
        {
          title: '4',
          value: 4,
          count: null
        },
        {
          title: '5',
          value: 5,
          count: null
        },
      ]
    },
    {
      title: 'Rating',
      value: 'guestRating',
      type: 'buttons',
      singleSelect: true,
      items: [
        {
          title: 'Any',
          value: 'any',
          count: null
        },
        {
          title: '7+',
          value: 7,
          count: null
        },
        {
          title: '8+',
          value: 8,
          count: null
        },
        {
          title: '9+',
          value: 9,
          count: null
        },
      ]
    },
    {
      title: 'Property Type',
      value: 'propertyTypes',
      type: 'checkboxes',
      items: [
        {
          title: 'Hotel',
          value: 0,
          count: null
        },
        {
          title: 'Apartment',
          value: 9,
          count: null
        },
        {
          title: 'Resort',
          value: 7,
          count: null
        },
        {
          title: 'Villa',
          value: 20,
          count: null
        },
        {
          title: 'Hostel',
          value: 5,
          count: null
        }
      ]
    },
  ]

  return filters
}