'use client'

import { useState, useEffect } from "react";
import useDebouncedEffect from "@/hooks/useDebouncedEffect"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import WishlistButton from "@/components/wishlist/WishlistButton"
import { getHotels, redirectToVio } from "@/modules/vio/utils/search"
import {
  getHotelPrice,
  getDistanceFromCenter,
  getHotelOffers,
  getHotelRatingClass,
  calculateDiscount,
  calculateDistance
} from "@/helpers/vio";
// import HelpfulFeedback from "@/components/common/HelpfulFeedback"
import BestHotelsTabs from "./filter-tabs/BestHotelsTabs"
import { DateObject } from "react-multi-date-picker"

const Hotels = ({ slider = false}) => {
  const [hotelsData, setHotelsData] = useState({
    hotels: [],
    availableHotelsCount: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [sortingOption, setSortingOption] = useState("best")
  const [filterOption, setFilterOption] = useState("New York")

  useDebouncedEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true)
      try {
        const searchData = {
          searchTerm: filterOption,
          dates: [],
          sortingOption: sortingOption,
          limit: 8,
        }
        const fetchedHotels = await getHotels({ searchData })
        console.log('fetchedHotels', fetchedHotels)
        setHotelsData(fetchedHotels)
      } catch (error) {
        console.error("Error fetching hotels:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchHotels()
  }, 10, [filterOption, sortingOption])

  const renderHotelCard = (hotel, index) => {
    const hotelPrice = getHotelPrice({ item: hotel.anchorRate })
    const isNearTheCenter = getDistanceFromCenter(hotel.details.distanceFromCityCentre, true)
    const hotelStars = hotel.details.starRating
    const hotelRatingRaw = hotel.details.guestRating.overall
    const hotelRating = hotelRatingRaw ?(Math.round(hotelRatingRaw * 10) / 10).toFixed(1) : null
    const hotelRatingClass = getHotelRatingClass(hotelRatingRaw)
    const hotelReviewCount = hotel.details.reviewCount

    //offers
    const { sortedOffers, cheapestOffer } = getHotelOffers({ offers: hotel.offers })

    const discount = cheapestOffer.price < hotelPrice ? true : false
    const discountPercentage = discount ? calculateDiscount(hotelPrice, cheapestOffer.price) : null
    
    const isFreeCancellation = cheapestOffer.cancellationPenalties.some(penalty => penalty.amount == 0) ? true : false

    // Convert distance from meters to kilometers if it's over 4000 meters
    const { distanceInMeters, distanceText } = calculateDistance(hotel.details.distanceFromCityCentre)
    
    return (
      <div key={index} className={slider ? '' : 'col-6 col-lg-3 col-sm-6'}>
        <Link
          href={cheapestOffer.url}
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
          className="hotelsCard -type-1 hover-inside-slider relative"
        >
          <div className="hotelsCard__image">
            <div className="cardImage ratio ratio-1:1">
              <div className="cardImage__content">
                <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                  <Image
                    width={300}
                    height={300}
                    className="rounded-8 col-12 js-lazy hotel-image-filter"
                    src={hotel.details.images[0]}
                    alt={hotel.details.name}
                  />
                </div>
              </div>
            </div>
            
            {discount && (
              <div class="position-relative">
                <div id="Badge" class="discountBadge bg-red-2">
                  <p class="badge-text text-white fw-500 text-25 xl:text-20 lg:text-18">-{discountPercentage}%</p>
                </div>
              </div>
            )}

            <WishlistButton
              wishlistKey='BestDealsHotels_Wishlist'
              id={hotel.id}
              className="cardImage__wishlist"
            />
            {distanceInMeters && (
              <>
              {isNearTheCenter ? (
                <div className="cardImage__leftBadge">
                  <div className="py-5 sm:py-0 px-15 sm:px-5 rounded-right-4 text-12 sm:text-10 lh-16 fw-500 uppercase text-white bg-dark-1">
                    Downtown
                  </div>
                </div>
              ) : (
                <div className="cardImage__leftBadge">
                  <div className="py-5 sm:py-0 px-15 sm:px-5 rounded-right-4 text-12 sm:text-10 lh-16 fw-500 uppercase text-white bg-dark-1">
                    {distanceText} to city center
                  </div>
                </div>
              )}
              </>
            )}
            
            {isFreeCancellation && (
              <div className="cardImage__secondleftBadge">
                <div className="py-5 sm:py-0 px-15 sm:px-5 rounded-right-4 text-12 sm:text-10 lh-16 fw-500 uppercase bg-green-1 text-dark-1">
                  Free cancellation
                </div>
              </div>
            )}

          </div>

          <div className="hotelsCard__content mt-10">
            <div className="text-11 lh-2 text-dark-4">
              <div className="d-inline-block">
                {hotelStars ? (
                  Array.from({ length: hotelStars }, (_, index) => (
                    <i key={index} className="icon-star"></i>
                  ))
                ) : (
                  // Placeholder to maintain space for hotels without stars
                  <div style={{ height: '1em' }}></div>
                )}
              </div>
            </div>

            <h5 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500 text-truncate">
              <span>{hotel.details.name}</span>
            </h5>

            <div className="d-flex items-center mt-5">
              {hotelRating ? (
                <div className="flex-center bg-dark-4 rounded-8 size-30 text-12 fw-600 text-white">
                  {hotelRating}
                </div>
              ) : (
                // Placeholder to maintain space for hotels without rating
                <div style={{ width: '35px', height: '35px' }}></div>
              )}
              <div className={`d-flex flex-column ${hotelRating ? "ml-10" : ""} lh-15`}>
                {hotelRating && (
                  <div className={`text-dark-1 fw-500 ${hotelRatingClass}`}>
                    {hotelRatingClass.replace("-", " ")}
                  </div>
                )}
                {hotelReviewCount ? (
                  <div className="text-10 text-light-1">
                    {hotelReviewCount} reviews
                  </div>
                ) : (
                  // Placeholder for review count to maintain space
                  <div className="text-10 text-light-1" style={{ height: '1.4em' }}></div>
                )}
              </div>
            </div>

            {/* <p className="text-light-1 lh-14">
              {hotel.details.cityName}
            </p> */}

            <div className="d-flex justify-between items-center w-100 mt-10 sm:mt-5">
              <div className="text-light-1">
                {/* From{" "}
                <span className={`text-dark-1 fw-500`}>
                  ${offer.price}
                </span> */}
                <span className={`text-dark-1 text-16 fw-500 ${discount ? "line-through text-dark-3" : ""}`}>
                  ${discount ? hotelPrice : cheapestOffer.price}
                </span>
                {discount && (
                  <>
                    &nbsp;
                    <span className="text-dark-1 text-16 fw-600">
                      ${cheapestOffer.price}
                    </span>
                  </>
                )}
              </div>
              <div className="d-flex items-center">
                {/* <span className="underline">
                  {offer.provider.name}
                </span> */}
                <Image
                  width={75}
                  height={50}
                  src={cheapestOffer.provider.logoUrl}
                  alt={cheapestOffer.provider.name}
                />
                {/* <div className="icon-arrow-top-right text-12 ml-5" /> */}
              </div>
            </div>
          </div>
        </Link>
          
        {/* New Row for Providers */}
        <div className="providers d-flex">
          {sortedOffers.map((hotelOffer, index) => ( // Skip the first hotelOffer
            hotelOffer.price ? ( // Check if price exists
              <button
                key={index}
                className="provider mt-5"
                onClick={() => {
                  window.open(hotelOffer.url, '_blank')
                }}
              >
                <Image
                  width={50}
                  height={30}
                  src={hotelOffer.provider.logoUrl}
                  alt={hotelOffer.provider.name}
                />
                <span className="text-10 ml-5 sm:ml-3 pr-10 sm:pr-5">
                  ${hotelOffer.price}
                </span>
              </button>
            ) : null // Skip rendering if price doesn't exist
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="layout-pt-md layout-pb-md" id="last_minute_deals">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Exclusive Hotel Deals from Top Destinations</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0 col-12 col-lg-9 col-xl-8">
                Discover unbeatable discounts on top-rated accommodations from the world's most popular city destinations. Whether you're planning a luxury getaway or a budget-friendly trip, Jetting connects you with the best hotel offers from leading providers, ensuring comfort, convenience, and incredible experiences.
              </p>

              {/* For future reference 
              <TypewriterInput />*/}

            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="mt-15">
          <div className="tabs -pills-2" style={{ pointerEvents: isLoading ? 'none' : 'auto' }}>
            <BestHotelsTabs
              sortingOption={sortingOption}
              setSortingOption={setSortingOption}
              filterOption={filterOption}
              setFilterOption={setFilterOption}
            />
          </div>
        </div>
        {/* End .row */}

        <div className="relative overflow-hidden pt-30 sm:pt-20 js-section-slider" style={{ minHeight: "430px" }}>
          {hotelsData.hotels.length == 0 && isLoading ? (
            <div className="loading-overlay">
              <div className="loading-spinner -big" />
              <span className="text-light-1 mt-10">
                Hotels around the world are loading ...
              </span>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="loading-overlay">
                  <div className="loading-spinner -big" />
                </div>
              )}

              {slider ? (
                <Swiper
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: ".js-hotels-next",
                    prevEl: ".js-hotels-prev",
                  }}
                  pagination={{
                    el: ".js-hotels-pag",
                    clickable: true,
                  }}
                  breakpoints={{
                    540: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 22,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {hotelsData.hotels.map((hotel, index) => (
                    <SwiperSlide key={index}>
                      {renderHotelCard(hotel, index)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="row y-gap-30">
                  {hotelsData.hotels.map((hotel, index) => renderHotelCard(hotel, index))}
                </div>
              )}
            </>
          )}

          {slider && (
            <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
                  <i className="icon icon-arrow-left text-dark-1" />
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -dots text-border js-hotels-pag" />
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
                  <i className="icon icon-arrow-right text-dark-1" />
                </button>
              </div>
            </div>
          )}

          {hotelsData.availableHotelsCount > 0 && (
            // <div className="d-flex justify-center items-center mt-30">
            //   <button
            //     className="button -md -dark-1 bg-light text-dark-1"
            //     onClick={() => {
            //       redirectToVio({ searchData: {
            //         toPlace: {
            //           name: filterOption,
            //         },
            //       } })
            //     }}
            //   >
            //     Show {hotelsData.availableHotelsCount} hotels in {filterOption}
            //   </button>
            // </div>
            <div className="d-flex justify-center items-center mt-30">
              <button className="button -md bg-light text-dark-1 disabled" disabled>
                Jetting Hotels Aggregator - Coming Soon
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
