import { parseSearchResults } from "@/modules/skyscanner/utils/parseSearchResults"
import parseIndicativeResults from "@/modules/skyscanner/utils/parseIndicativeResults"
import { DateObject } from "react-multi-date-picker"
import { calculateAveragePrice } from '@/helpers/price'
import { checkForErrors } from '@/modules/common/search'

export function generateSearchUrl({ searchData, samePage, scrollToResults }) {
  const formattedSearchData = formatSearchData(searchData)
  const tripTypeValue = formattedSearchData.dates[0] && formattedSearchData.dates[1] ? '1' : '0'
  const backTime = formattedSearchData.dates[1] ? formattedSearchData.dates[1] : ''
  
  return `${samePage ? '' : '/flights'}#` + 
  formattedSearchData.fromPlace.iataCode + '/' + 
  formattedSearchData.toPlace.iataCode + '/' +
  formattedSearchData.dates[0] + '/' +
  backTime + '/' +
  formattedSearchData.passengerCounts.Adults + ',' + formattedSearchData.passengerCounts.Children + ',' + formattedSearchData.passengerCounts.Infants + '/' + 
  tripTypeValue + '/' +
  formattedSearchData.classType + '/' +
  formattedSearchData.hotelsSearch + '/' +
  formattedSearchData.autoSearch //+
  // `${scrollToResults ? '#results' : ''}`
}

export function makeSearch({
  router,
  searchData,
  setFlightsSearchData,
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
    hasErrors = checkForErrors({
        fromPlace: searchData.fromPlace,
        toPlace: searchData.toPlace,
        dates: searchData.dates
      },
      errors,
      setErrors
    )
  }
  if (!hasErrors) {
    setFlightsSearchData(searchData)

    const flightsUrl = generateSearchUrl({ searchData: { ... searchData }, samePage, scrollToResults })

    if (!openInNewTab) {
      if (searchActive == true) {
        window.location.replace(flightsUrl)
        window.location.reload()
      } else {
        router.push(flightsUrl)
        setSearchActive(true)
      }
    } else {
      window.open(flightsUrl, '_blank')
      if (searchActive != true) {
        setSearchActive(true)
      }
    }
    
    return true
  } else {
    return false
  }
}

export function formatSearchData(searchData, skyscannerFormat = true) {
  const newSearchData = {... searchData}

  if (skyscannerFormat) {
    const toTime = newSearchData?.dates[0] ? new DateObject(newSearchData.dates[0]) : null
    newSearchData.dates[0] = toTime ? toTime.year + '-' + toTime.month.number + '-' + toTime.day : ''
    if (newSearchData.dates[1]) {
      const backTime = newSearchData.dates[1] ? new DateObject(newSearchData.dates[1]) : null
      newSearchData.dates[1] = backTime ? backTime.year + '-' + backTime.month.number + '-' + backTime.day : ''
    }
    
    //classType
    newSearchData.classType = 'economy'
    if (searchData.classType == "Premium economy") {
      newSearchData.classType = "premium_economy"
    } else if (searchData.classType == "Business class") {
      newSearchData.classType = "business_class"
    } else if (searchData.classType == "First class") {
      newSearchData.classType = "first_class"
    }

    //hotels
    newSearchData.hotelsSearch = 'HOTELS_NO'
    if (searchData.hotelsSearch == "true") {
      newSearchData.hotelsSearch = 'HOTELS_YES'
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

    //classType
    newSearchData.classType = 'Economy'
    if (searchData.classType == "premium_economy") {
      newSearchData.classType = "Premium economy"
    } else if (searchData.classType == "business_class") {
      newSearchData.classType = "Business class"
    } else if (searchData.classType == "first_class") {
      newSearchData.classType = "First class"
    }

    //hotels
    newSearchData.hotelsSearch = 'false'
    if (searchData.hotelsSearch == "HOTELS_YES") {
      newSearchData.hotelsSearch = 'true'
    }

    //auto
    newSearchData.autoSearch = 'false'
    if (searchData.autoSearch == "AUTO_YES") {
      newSearchData.autoSearch = 'true'
    }
  }

  return newSearchData
}

async function getSkyscannerIndicativePrices(searchData) {
  const response = await fetch('/api/skyscanner/indicativePrices', {
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

export async function getIndicativePrices(searchData, type = 'dates', groupBy = null) {
  const newSearchData = {... searchData}
  newSearchData.type = type
  
  if (newSearchData.fromPlace && newSearchData.toPlace && newSearchData.dates?.length > 0) {
    const indicativePricesRaw = await getSkyscannerIndicativePrices(newSearchData)
    console.log('indicativePricesRaw', indicativePricesRaw)
    return parseIndicativeResults(indicativePricesRaw, type, groupBy)
  }

  return null
}

async function getSkyscannerSearchSessionToken(searchData) {
  const response = await fetch('/api/skyscanner/sessionToken', {
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

  return data.sessionToken
}

async function getSkyscannerResults(sessionToken) {
  const response = await fetch('/api/skyscanner/flightsSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sessionToken }),
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
  const fromPlaceIataCode = parts[0];
  const toPlaceIataCode = parts[1];
  const departureDate = parts[2];
  const returnDate = parts[3];
  const passengerCountsParts = parts[4].split(',');
  const tripType = parts[5] === '1' ? 'Round Trip' : 'One Way';
  const classType = parts[6];
  const hotelsSearch = parts[7];
  const autoSearch = parts[8];

  // Construct the searchData object
  return {
    fromPlace: { iataCode: fromPlaceIataCode },
    toPlace: { iataCode: toPlaceIataCode },
    passengerCounts: {
      Adults: parseInt(passengerCountsParts[0], 10),
      Children: parseInt(passengerCountsParts[1], 10),
      Infants: parseInt(passengerCountsParts[2], 10),
    },
    dates: [departureDate, returnDate].filter(date => date !== ''),
    tripType: tripType,
    classType: classType,
    hotelsSearch: hotelsSearch,
    autoSearch: autoSearch,
  }
}

export async function getSearchResultsData(searchData, searchSessionToken = null) {
  const sessionToken = !searchSessionToken ? await getSkyscannerSearchSessionToken(searchData) : searchSessionToken

  const rawResults = await getSkyscannerResults(sessionToken)
  console.log(rawResults)
  // const parsedResults = parseSearchResults(rawResults, true)
  const parsedResults = parseSearchResults(rawResults)
  const parsedResultsUnfiltered = parseSearchResults(rawResults)
  const status = rawResults.status
  const sortingOptions = rawResults.content.sortingOptions
  console.log(parsedResults)
  
  const flights = parsedResults
  const flightsUnfiltered = parsedResultsUnfiltered
  const flightsCount = rawResults.content.stats.itineraries?.total?.count ? rawResults.content.stats.itineraries.total.count : 0
  const canPaginate = status == 'RESULT_STATUS_COMPLETE' ? true : false

  return { flights, flightsUnfiltered, flightsCount, sortingOptions, canPaginate, sessionToken }
}

export function getPickedTickets(flights, sortingOptions) {
  //picked tickets
  const pickedTickets = []

  const bestTicket = flights.find(item => item.itineraryId === sortingOptions.best[0]?.itineraryId)
  if (bestTicket) {
    pickedTickets.push({
      type: 'Best',
      ticket: bestTicket
    })
  }
  const cheapestTicket = [...flights].sort((a, b) => a.minPrice - b.minPrice)[0]
  if (cheapestTicket) {
    pickedTickets.push({
      type: 'Cheapest',
      ticket: cheapestTicket
    })
  }
  const fastestTicket = [...flights].sort((a, b) => a.durationInMinutes - b.durationInMinutes)[0]
  if (fastestTicket) {
    pickedTickets.push({
      type: 'Fastest',
      ticket: fastestTicket
    })
  }
  const earliestTicket = [...flights].sort((a, b) => {
    const aDatetime = a.outbound.departureDateTime
    const bDatetime = b.outbound.departureDateTime
    return new Date(aDatetime.year, aDatetime.month - 1, aDatetime.day, aDatetime.hour, aDatetime.minute).getTime() - new Date(bDatetime.year, bDatetime.month - 1, bDatetime.day, bDatetime.hour, bDatetime.minute).getTime()
  })[0]
  if (earliestTicket) {
    pickedTickets.push({
      type: 'Earliest',
      ticket: earliestTicket
    })
  }

  return pickedTickets
}

export function getFlightsProviders(flightsUnfiltered) {
  const agentMap = new Map()
  let minPrice = Infinity

  flightsUnfiltered.forEach(flight => {
    flight.deals.forEach(deal => {
      const agent = deal.agents[0]
      // const agentKey = deal.agentIds[0]
      const agentKey = agent.name
      const price = deal.priceAmount
      if (price < minPrice) minPrice = price
      // Check if this agent is already added with a higher price
      if (!agentMap.has(agentKey) || agentMap.get(agentKey).price > price) {
        agentMap.set(agentKey, {
          agent: agent,
          price: price,
          deepLink: deal.items[0].deepLink
        })
      }
    })
  })

  const flightsProviders = Array.from(agentMap.values()).sort((a, b) => a.price - b.price)

  flightsProviders.forEach(item => {
    item.isCheapest = item.price === minPrice
  })

  return flightsProviders
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

export function getFiltersData(flightResults) {
  let filters = [
    {
      title: 'Stops',
      type: 'checkboxes',
      items: [
        {
          title: 'Nonstop',
          count: null
        },
        {
          title: '1 Stop',
          count: null
        },
        {
          title: '2+ Stops',
          count: null
        }
      ]
    },
    {
      title: 'Duration',
      type: 'range',
      description: 'h',
      minValue: 0,
      maxValue: 100,
    },
    {
      title: 'Price',
      type: 'range',
      description: '$',
      minValue: 0,
      maxValue: 5000,
    },
    {
      title: 'Departure time',
      type: 'buttons',
      items: [
        {
          title: 'Morning',
          description: '06:00 - 11:59',
          icon: 'icon-clock'
        },
        {
          title: 'Afternoon',
          description: '12:00 - 17:59',
          icon: 'icon-clock'
        },
        {
          title: 'Evening',
          description: '18:00 - 23:59',
          icon: 'icon-clock'
        },
        {
          title: 'Night',
          description: '00:00 - 05:59',
          icon: 'icon-clock'
        },
      ]
    },
    {
      title: 'Arrival time',
      type: 'buttons',
      items: [
        {
          title: 'Morning',
          description: '06:00 - 11:59',
          icon: 'icon-clock'
        },
        {
          title: 'Afternoon',
          description: '12:00 - 17:59',
          icon: 'icon-clock'
        },
        {
          title: 'Evening',
          description: '18:00 - 23:59',
          icon: 'icon-clock'
        },
        {
          title: 'Night',
          description: '00:00 - 05:59',
          icon: 'icon-clock'
        },
      ]
    },
    {
      title: 'Departing from',
      type: 'checkboxes',
      items: []
    },
    {
      title: 'Arriving at',
      type: 'checkboxes',
      items: []
    },
    {
      title: 'Stops at',
      type: 'checkboxes',
      items: []
    },
    {
      title: 'Airlines',
      type: 'checkboxes',
      items: []
    },
  ]

  if (flightResults.length > 0) {
    //duration
    const durationArr = flightResults.map((durationitem) => durationitem.durationInMinutes)

    //price
    const priceArr = flightResults.map((priceitem) => priceitem.minPrice)

    //departing from
    const departingFromRawArr = flightResults.reduce((acc, departingFromItem) => {
      const key = departingFromItem.outbound.originPlace.name + ' (' + departingFromItem.outbound.originPlace.iata + ')'
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
    const departingFromArr: FilterItem[] = Object.entries(departingFromRawArr).map(([title, count]): FilterItem  => ({ title, count: count as number })).sort((a, b) => (b.count - a.count))

    //arriving at
    const arrivingAtRawArr = flightResults.reduce((acc, arrivingAtItem) => {
      const keyItem = arrivingAtItem.inbound ? arrivingAtItem.inbound : arrivingAtItem.outbound
      const key = keyItem.destinationPlace.name + ' (' + keyItem.destinationPlace.iata + ')'
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
    const arrivingAtArr: FilterItem[] = Object.entries(arrivingAtRawArr).map(([title, count]): FilterItem  => ({ title, count: count as number })).sort((a, b) => (b.count - a.count))

    //stops at
    const stopsAtRawArr = flightResults.reduce((acc, stopsAtItem) => {
      let stops = stopsAtItem.outbound.steps.concat(stopsAtItem.inbound ? stopsAtItem.inbound.steps : [])
      stops = stops.filter(stop => stop?.transfer === true)
      stops.map((stop) => {
        const key = stop.originPlace.name + ' (' + stop.originPlace.iata + ')'
        acc[key] = (acc[key] || 0) + 1
      })
      return acc;
    }, {})
    
    const stopsAtArr: FilterItem[] = Object.entries(stopsAtRawArr).map(([title, count]): FilterItem  => ({ title, count: count as number })).sort((a, b) => (b.count - a.count))

    //airlines
    const airlinesRawArr = flightResults.reduce((acc, airlinesItem) => {
      const airlines = airlinesItem.outbound.carriers.concat(airlinesItem.inbound ? airlinesItem.inbound.carriers : [])
      airlines.map((airline) => {
        const key = airline.name
        acc[key] = (acc[key] || 0) + 1
      })
      return acc;
    }, {})
    const airlinesArr: FilterItem[] = Object.entries(airlinesRawArr).map(([title, count]): FilterItem  => ({ title, count: count as number })).sort((a, b) => (b.count - a.count))
    flightResults.filter(item => item.outbound.steps.filter(stopItem => stopItem?.transfer === true).length + item.inbound?.steps.filter(stopItem => stopItem?.transfer === true).length === 1).length

    filters = filters.map((filterItem) => {
      if (filterItem.title == 'Stops') {
        const newFilterItem = { ... filterItem }
        let minPrice = Infinity
        newFilterItem.items = newFilterItem.items.map((stopItem) => {
          const newStopItem = { ... stopItem }

          let newFlightResults = []
          if (newStopItem.title == 'Nonstop') {
            newFlightResults = flightResults.filter(item => {
              const inboundStopsCount = item.inbound ? item.inbound?.steps.filter(newStopItem => newStopItem?.transfer === true).length : 0
              return item.outbound.steps.filter(newStopItem => newStopItem?.transfer === true).length + inboundStopsCount === 0
            })
          } else if (newStopItem.title == '1 Stop') {
            newFlightResults = flightResults.filter(item => {
              const inboundStopsCount = item.inbound ? item.inbound?.steps.filter(newStopItem => newStopItem?.transfer === true).length : 0
              return item.outbound.steps.filter(newStopItem => newStopItem?.transfer === true).length === 1 || inboundStopsCount === 1
            })
          } else if (newStopItem.title == '2+ Stops') {
            newFlightResults = flightResults.filter(item => {
              const inboundStopsCount = item.inbound ? item.inbound?.steps.filter(newStopItem => newStopItem?.transfer === true).length : 0
              return item.outbound.steps.filter(newStopItem => newStopItem?.transfer === true).length >=2 || inboundStopsCount >= 2
            })
          }

          newStopItem.count = 0
          if (newFlightResults.length > 0) {
            newStopItem.count = newFlightResults.length
            newStopItem.minPrice = newFlightResults.sort((a, b) => a.minPrice - b.minPrice)[0].minPrice
            if (newStopItem.minPrice < minPrice) minPrice = newStopItem.minPrice
          }

          return newStopItem
        })
        newFilterItem.items.forEach(result => {
          result.isCheapest = result.minPrice === minPrice
        })
        return newFilterItem
      } else if (filterItem.title == 'Departure time') {
        const newFilterItem = { ... filterItem }
        newFilterItem.items = newFilterItem.items.map((departureTimeItem) => {
          const newDepartureTimeItem = { ... departureTimeItem }

          let timeRange
          if (departureTimeItem.title == 'Morning') {
            timeRange = {
              startTime: new Date(0, 0, 0, 6, 0),
              endTime: new Date(0, 0, 0, 11, 59)
            }
          } else if (departureTimeItem.title == 'Afternoon') {
            timeRange = {
              startTime: new Date(0, 0, 0, 12, 0),
              endTime: new Date(0, 0, 0, 17, 59)
            }
          } else if (departureTimeItem.title == 'Evening') {
            timeRange = {
              startTime: new Date(0, 0, 0, 18, 0),
              endTime: new Date(0, 0, 0, 23, 59)
            }
          } else if (departureTimeItem.title == 'Night') {
            timeRange = {
              startTime: new Date(0, 0, 0, 0, 0),
              endTime: new Date(0, 0, 0, 5, 59)
            }
          }
          const newFlightResults = flightResults.filter(item => {
            const itemTime = new Date(0, 0, 0, item.outbound.departureDateTime.hour, item.outbound.departureDateTime.minute)
            return itemTime >= timeRange.startTime && itemTime <= timeRange.endTime
          })

          newDepartureTimeItem.count = 0
          if (newFlightResults.length > 0) {
            newDepartureTimeItem.count = newFlightResults.length
            newDepartureTimeItem.minPrice = newFlightResults.sort((a, b) => a.minPrice - b.minPrice)[0].minPrice
          }

          return newDepartureTimeItem
        })
        return newFilterItem
      } else if (filterItem.title == 'Arrival time') {
        const newFilterItem = { ... filterItem }
        newFilterItem.items = newFilterItem.items.map((arrivalTimeItem) => {
          const newArrivalTimeItem = { ... arrivalTimeItem }

          let timeRange
          if (arrivalTimeItem.title == 'Morning') {
            timeRange = {
              startTime: new Date(0, 0, 0, 6, 0),
              endTime: new Date(0, 0, 0, 11, 59)
            }
          } else if (arrivalTimeItem.title == 'Afternoon') {
            timeRange = {
              startTime: new Date(0, 0, 0, 12, 0),
              endTime: new Date(0, 0, 0, 17, 59)
            }
          } else if (arrivalTimeItem.title == 'Evening') {
            timeRange = {
              startTime: new Date(0, 0, 0, 18, 0),
              endTime: new Date(0, 0, 0, 23, 59)
            }
          } else if (arrivalTimeItem.title == 'Night') {
            timeRange = {
              startTime: new Date(0, 0, 0, 0, 0),
              endTime: new Date(0, 0, 0, 5, 59)
            }
          }

          const newFlightResults = flightResults.filter(item => {
            const itemTime = new Date(0, 0, 0, item.outbound.arrivalDateTime.hour, item.outbound.arrivalDateTime.minute)
            return itemTime >= timeRange.startTime && itemTime <= timeRange.endTime
          })

          newArrivalTimeItem.count = 0
          if (newFlightResults.length > 0) {
            newArrivalTimeItem.count = newFlightResults.length
            newArrivalTimeItem.minPrice = newFlightResults.sort((a, b) => a.minPrice - b.minPrice)[0].minPrice
          }

          return newArrivalTimeItem
        })
        return newFilterItem
      } else if (filterItem.title == 'Duration') {
        const newFilterItem = { ... filterItem }
        newFilterItem.minValue = Math.ceil(Math.min(...durationArr) / 60)
        newFilterItem.maxValue = Math.ceil(Math.max(...durationArr) / 60)
        return newFilterItem
      } else if (filterItem.title == 'Price') {
        const newFilterItem = { ... filterItem }
        newFilterItem.minValue = Math.ceil(Math.min(...priceArr))
        newFilterItem.maxValue = Math.ceil(Math.max(...priceArr))
        return newFilterItem
      } else if (filterItem.title == 'Departing from') {
        const newFilterItem = { ... filterItem }
        newFilterItem.items = departingFromArr
        return newFilterItem
      } else if (filterItem.title == 'Arriving at') {
        const newFilterItem = { ... filterItem }
        newFilterItem.items = arrivingAtArr
        return newFilterItem
      } else if (filterItem.title == 'Stops at') {
        let minPrice = Infinity
        const newStopsAtArr = stopsAtArr.map((stopAtItem) => {
          const newStopAtItem = { ... stopAtItem }

          const newFlightResults = flightResults.filter(item => {
            const stops = item.outbound.steps.concat(item.inbound ? item.inbound.steps : [])
            return stops.some(stopItem => {
              const stop = `${stopItem.originPlace.name} (${stopItem.originPlace.iata})`
              return newStopAtItem.title.includes(stop)
            })
          })

          newStopAtItem.count = 0
          if (newFlightResults.length > 0) {
            newStopAtItem.count = newFlightResults.length
            newStopAtItem.minPrice = newFlightResults.sort((a, b) => a.minPrice - b.minPrice)[0].minPrice
            if (newStopAtItem.minPrice < minPrice) minPrice = newStopAtItem.minPrice
          }

          return newStopAtItem
        })
        
        // Calculate average price
        const averagePrice = calculateAveragePrice(newStopsAtArr.map(({ minPrice }) => minPrice), minPrice)

        newStopsAtArr.forEach(result => {
          result.isCheapest = result.minPrice === minPrice
          result.isBelowAverage = result.minPrice < averagePrice
        })

        const newFilterItem = { ... filterItem }
        newFilterItem.items = newStopsAtArr.sort((a, b) => (a.minPrice - b.minPrice))
        return newFilterItem
      } else if (filterItem.title == 'Airlines') {
        let minPrice = Infinity
        const newAirlinesArr = airlinesArr.map((airlineItem) => {
          const newAirlineItem = { ... airlineItem }

          const newFlightResults = flightResults.filter(item => {
            const airlines = item.outbound.carriers.concat(item.inbound ? item.inbound.carriers : [])
            return airlines.some(airlineItem => {
              return newAirlineItem.title.includes(airlineItem.name)
            })
          })

          newAirlineItem.count = 0
          if (newFlightResults.length > 0) {
            newAirlineItem.count = newFlightResults.length
            newAirlineItem.minPrice = newFlightResults.sort((a, b) => a.minPrice - b.minPrice)[0].minPrice
            if (newAirlineItem.minPrice < minPrice) minPrice = newAirlineItem.minPrice
          }

          return newAirlineItem
        })
        
        // Calculate average price
        const averagePrice = calculateAveragePrice(newAirlinesArr.map(({ minPrice }) => minPrice), minPrice)

        newAirlinesArr.forEach(result => {
          result.isCheapest = result.minPrice === minPrice
          result.isBelowAverage = result.minPrice < averagePrice
        })

        const newFilterItem = { ... filterItem }
        newFilterItem.items = newAirlinesArr.sort((a, b) => (a.minPrice - b.minPrice))
        return newFilterItem
      }
      return filterItem
    })
  }

  return filters
}