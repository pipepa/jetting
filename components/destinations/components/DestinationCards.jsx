'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import { DateObject } from "react-multi-date-picker"
import { getIndicativePrices } from "@/modules/skyscanner/utils/search"
import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import { makeSearch } from "@/modules/skyscanner/utils/search"
import { countries } from "@/data/skyscannerCountries"
import { cities } from "@/data/skyscannerCities"
import { Navigation } from "swiper";
import { useRecommendedUserLocation } from "@/hooks/useUserLocation"
import Pagination from "@/components/common/Pagination"

const DestinationCards = ({
  continent = null,
  country = null,
  city = null,
}) => {
  const dataType = city ? 'city' : country ? 'country' : 'continent'

  const router = useRouter()
  const { flightsSearchData, setFlightsSearchData, handleSetFlightsSearchData, passengerCounts, searchActive, setSearchActive, hotelsSearch } = useSearchForm()
  const { fromPlace } = flightsSearchData
  const [indicativePrices, setIndicativePrices] = useState([])
  const [monthsIndicativePrices, setMonthsIndicativePrices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [date, setDate] = useState(new DateObject().add(1, 'month').format("YYYY-MM"))
  
  const { recommendedFlightLocation } = useRecommendedUserLocation()

  useDebouncedEffect(() => {
    const newFlightsSearchData = { ... flightsSearchData}
    if (!newFlightsSearchData.fromPlace) {
      newFlightsSearchData.fromPlace = recommendedFlightLocation
    }
    if (dataType == 'city') {
      newFlightsSearchData.toPlace = city
    }
    newFlightsSearchData.toPlace = city
    newFlightsSearchData.passengerCounts = passengerCounts
    setFlightsSearchData(newFlightsSearchData)
    handleSetFlightsSearchData(newFlightsSearchData)
  }, 50, [ city, recommendedFlightLocation ])

  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(new DateObject().add(i, 'month'))
  }
  
  const [swiper, setSwiper] = useState(null)

  //pagination
  const [canPaginate, setCanPaginate] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(2)

  const MAX_ITEMS = dataType == 'city' ? 3 : 15
  useEffect(() => {
    let extraPages = 1
    if (indicativePrices) {
      setCanPaginate(indicativePrices.length > MAX_ITEMS)
      if (indicativePrices.length % MAX_ITEMS === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(indicativePrices.length / MAX_ITEMS) + extraPages)
    }
  }, [indicativePrices])

  const paginatedIndicativePrices = useMemo(() => {
    return indicativePrices
      ? indicativePrices
        .slice(0, currentPage * MAX_ITEMS)
    : []
  }, [indicativePrices, currentPage])

  async function fetchData() {
    if (!fromPlace?.iataCode) {
      return
    }

    setIsLoading(true)

    // Initial fetch
    try {
      if (dataType == 'city') {
        let cheapestFetchedDate = null
        const indicativePricesKey = `${fromPlace.iataCode}-${city.iataCode}`
        if (!monthsIndicativePrices[indicativePricesKey]) {
          const fetchedDataMonths = await getIndicativePrices({
            fromPlace: fromPlace,
            toPlace: city,
            dates: [{ date: [ months[0], months[months.length - 1] ], dateType: 'month' }]
          }, 'dates', 'dates')
          setMonthsIndicativePrices({
            [indicativePricesKey]: fetchedDataMonths
          })

          const fetchedDataMonthsArr = Object.values(fetchedDataMonths)
          cheapestFetchedDate = fetchedDataMonthsArr.length > 0 ? fetchedDataMonthsArr.sort((a, b) => a.price - b.price)[0].date : null
          setDate(cheapestFetchedDate)
        }

        const fetchingDate = cheapestFetchedDate ? cheapestFetchedDate : date
        const fetchedDataInit = await getIndicativePrices({
          fromPlace: fromPlace,
          toPlace: city,
          dates: [{ date: fetchingDate, dateType: 'month' }]
        })
        setIndicativePrices(Object.values(fetchedDataInit).sort((a, b) => a.price - b.price))
      } else if (dataType == 'country') {
        const fetchedDataInit = await getIndicativePrices({
          fromPlace: fromPlace,
          toPlace: country,
          dates: [{ date: date, dateType: 'month' }]
        }, 'places', 'route')
        setIndicativePrices(fetchedDataInit)
      } else {
        const fetchedDataInit = await getIndicativePrices({
          fromPlace: fromPlace,
          toPlace: 'anywhere',
          dates: [{ date: date, dateType: 'month' }]
        }, 'places', 'route')
        if (continent) {
          const filteredFetchedData = fetchedDataInit.filter(item => item.destinationPlace.parentId === continent.entityId)
          setIndicativePrices(filteredFetchedData)
        } else {
          setIndicativePrices({ ... fetchedDataInit })
        }
      }
    } catch (error) {
      console.error("Error fetching initial prices:", error)
    }

    setIsLoading(false)
  }

  useDebouncedEffect(() => {
    fetchData()
  }, 50, [ date, fromPlace ])

  useDebouncedEffect(() => {
    if (dataType == 'city') {
      const indicativePricesKey = `${fromPlace?.iataCode}-${city.iataCode}`
      const dataMonthsArr = Object.values(monthsIndicativePrices[indicativePricesKey] ?? {})
      if (swiper && dataMonthsArr.length > 0) {
        const cheapestFetchedDate = dataMonthsArr.length > 0 ? dataMonthsArr.sort((a, b) => a.price - b.price)[0].date : null
        
        if (swiper) {
          const index = months.findIndex((month) => {
            return month.format('YYYY-MM') == cheapestFetchedDate
          })
  
          if (index !== -1) {
            swiper.slideTo(index)
          }
        }
      }
    }

  }, 20, [ swiper, monthsIndicativePrices ])

  return (
    <>
    {dataType == 'city' ? (
      <>
      <div class="row mb-40">
        <div class="col-auto">
          <div class="sectionTitle -md">
            <h2 class="sectionTitle__title">Cheapest flights to {city.name}</h2>
            <p class="sectionTitle__text mt-5 sm:mt-0 col-lg-7"></p>
          </div>
        </div>
      </div>
      <div
        className="mb-40"
      >
        <Swiper
          onSwiper={(newSwiper) => {
            setSwiper(newSwiper)
          }}
          className="overflow-visible"
          modules={[Navigation]}
          navigation={{
            nextEl: ".js-month-next",
            prevEl: ".js-month-prev",
          }}
          breakpoints={{
            1400: {
              slidesPerView: 10,
            },
            1200: {
              slidesPerView: 7,
            },
            992: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 5,
            },
            576: {
              slidesPerView: 4,
            },
            250: {
              slidesPerView: 3,
            },
          }}
        >
          {months.map((month, index) => {
            const indicativePricesKey = `${fromPlace?.iataCode}-${city.iataCode}`
            const monthPrice = monthsIndicativePrices[indicativePricesKey] && monthsIndicativePrices[indicativePricesKey][month.format('YYYY-MM')]
            return (
              <>
              <SwiperSlide
                key={index}
                className='col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2'
              >
                <div
                  className={`mr-10 bg-blue-1-05 rounded-12 overflow-hidden text-center shadow-new ${date == month.format('YYYY-MM') ? 'bg-rich-200' : 'cursor-pointer' }`}
                  onClick={() => {
                    setDate(month.format('YYYY-MM'))
                  }}
                  style={{ height: '130px' }}
                >
                  <div
                    className="d-flex flex-column justify-center p-2 h-100"
                  >
                    <span className="lh-12 text-dark-3">{month.format('YYYY')}</span>
                    <span className="fw-600">{month.format('MMMM')}</span>
                    {monthPrice && (
                      <span className={`${monthPrice.isCheapest ? 'fw-600 text-green-2' : monthPrice.isBelowAverage ? 'text-green-2': 'text-dark-3'} text-12`}>
                        from ${monthPrice.price}
                      </span>
                    )}
                  </div>
                  
                  <div
                    className="d-flex flex-column position-relative"
                    style={{ bottom: '24px'}}
                  >
                    {monthPrice && monthPrice.isCheapest && (
                      <div className="text-12 bg-rich-600 py-1 text-white">
                        <span>Cheapest month</span>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
              </>
            )
          })}
        </Swiper>
      </div>
      </>
    ) : (
      <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      </>
    )}
    <div className="row y-gap-10 relative">
      {isLoading ? (
        <div style={{ minHeight: "230px" }}>
          <div className="loading-overlay">
            <div className="loading-spinner -big" />
            <span className="text-light-1 mt-10">
              Cheapest flights near you are loading ...
            </span>
          </div>
        </div>
      ) : paginatedIndicativePrices.length > 0 ? (
        <>
        {paginatedIndicativePrices.map((item, index) => {
          if (dataType == 'city') {
            const itemDate = new DateObject(item.date)

            const newFlightsSearchData = { ... flightsSearchData }
            newFlightsSearchData.fromPlace = fromPlace
            newFlightsSearchData.toPlace = city
            newFlightsSearchData.passengerCounts = passengerCounts
            newFlightsSearchData.dates = [itemDate]
            newFlightsSearchData.hotelsSearch = hotelsSearch

            return (
              <div
                className="col-12 col-md-6 col-lg-4 position-relative"
                key={index}
              >
                <div
                  type="button"
                  className="flightsCard border-none p-0 rounded-16 overflow-hidden"
                  onClick={() => {
                    makeSearch({ router, searchData: { ... newFlightsSearchData }, setFlightsSearchData, searchActive, setSearchActive, openInNewTab: true })
                  }}
                >
                  <div
                    className="p-4"
                  >
                    <div className="row">
                      <div className="col-auto col-7 items-center justify-between">
                        <div className="text-18 lh-14 fw-600">{fromPlace?.iataCode} - {city.iataCode}</div>
                        <div className="text-12 lh-14 text-light-1">{fromPlace?.name} - {city.name}</div>
                      </div>
                      <div className="col-5 text-right">
                        <div className="text-18 lh-14 fw-600">{itemDate.format('MMM D')}</div>
                        <div className="text-12 lh-14 text-light-1">{itemDate.format('ddd')}</div>
                      </div>
                    </div>
                    <div className="mt-10 d-flex items-center justify-between">
                      <div className="">
                        {item.isCheapest && (
                          <div>
                            <span className="position-relative text-12 rounded-8 px-8 py-3 bg-green-3 mr-5 mb-5">Cheapest</span>
                          </div>
                        )}
                        {item.isDirect ? (
                          <div>
                            <span className="position-relative text-12 rounded-8 px-8 py-3 bg-yellow-4 mb-5">Direct</span>
                          </div>
                        ) : (
                          <div>
                            <span className="position-relative text-12 rounded-8 px-8 py-3 border-light">1+ Stops</span>
                          </div>
                        )}
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="destinationCardCity lh-12 sm:pt-15">
                          <span className="xxl:text-90 xl:text-70 md:text-70 sm:text-70">${item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`bg-red-5 border-top-light-dashed pt-10 pb-10`}
                  >
                    <div className={`d-flex justify-center align-items-center text-blue-1 fw-600`}>
                    Flights to {city.name}
                      <div className="icon-arrow-top-right ml-15" />
                    </div>
                  </div>
                </div>
              </div>
            )
          } else if (dataType == 'country') {
            item.originPlace.iataCode = item.originPlace.iata
            item.destinationPlace.iataCode = item.destinationPlace.iata

            const newFlightsSearchData = { ... flightsSearchData }
            newFlightsSearchData.fromPlace = item.originPlace
            newFlightsSearchData.toPlace = item.destinationPlace
            newFlightsSearchData.passengerCounts = passengerCounts
            newFlightsSearchData.dates = []
            newFlightsSearchData.hotelsSearch = hotelsSearch

            const city = cities.find(cityItem => item.destinationPlace.parentId == cityItem.entityId)

            return (
              <div
                className="col-lg-4 col-6 position-relative"
                key={index}
              >
                <div
                  type="button"
                  className="destinationCard"
                  onClick={() => {
                    makeSearch({ router, searchData: { ... newFlightsSearchData }, setFlightsSearchData, searchActive, setSearchActive, openInNewTab: true })
                  }}
                >
                  <span className={`fi fi-${country.isoCode} destinationCard__image`}></span>
                  <div className="destinationCard__content lh-12 pl-20 sm:pt-15">
                    <span className="xxl:text-140 xl:text-110 md:text-90 sm:text-50">${item.price}</span>
                    <div className="destinationCard__font md:text-36 sm:text-30 text-truncate pl-5">
                      {city ? city.name : item.destinationPlace.name}
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            const country = countries.find(countryItem => item.destinationPlace.entityId == countryItem.entityId)

            return (
              <div
                className="col-lg-4 col-6 position-relative"
                key={index}
              >
                <Link
                  type="button"
                  className="destinationCard"
                  href={`/destinations/${continent.slug}/${country.slug}`}
                  target='_blank'
                >
                  <span className={`fi fi-${country.isoCode} destinationCard__image`}></span>
                  <div className="destinationCard__content lh-12 pl-20 sm:pt-15">
                    <span className="xxl:text-140 xl:text-110 md:text-90 sm:text-50">${item.price}</span>
                    <div className="destinationCard__font md:text-36 sm:text-30 text-truncate pl-5">
                      {country.name}
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        })}

        <Pagination
          canPaginate={canPaginate}
          maxPage={maxPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </>
      ) : (
        <div style={{ minHeight: "230px" }}>
          <div className="loading-overlay">
            <span className="text-center text-20 fw-600">
              There are no flights available from your location
            </span>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default DestinationCards
