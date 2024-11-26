
'use client'

import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { topCities } from "../../data/topCities"
import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import { makeSearch } from "@/modules/skyscanner/utils/search"
import { useRecommendedUserLocation } from "@/hooks/useUserLocation"

const TopCities = () => {
  const router = useRouter()
  const { flightsSearchData, setFlightsSearchData, setSearchActive, passengerCounts, hotelsSearch } = useSearchForm()
  const { recommendedFlightLocation } = useRecommendedUserLocation()

  return (
    <div className="pt-40 overflow-hidden js-section-slider">
      <Swiper
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}           
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".js-places-next",
          prevEl: ".js-places-prev",
        }}
        pagination={{
          el: ".js-places-pag",
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
            slidesPerView: 5,
          },
        }}
      >
        {topCities.map((item) => {
          const newFlightsSearchData = {... flightsSearchData}
          newFlightsSearchData.fromPlace = recommendedFlightLocation
          newFlightsSearchData.toPlace = item.city
          newFlightsSearchData.dates = []
          newFlightsSearchData.passengerCounts = passengerCounts
          newFlightsSearchData.hotelsSearch = hotelsSearch

          return (
            <SwiperSlide key={item.id}>
              <div
                className="citiesCard -type-2"
                data-aos="fade"
                data-aos-delay={item.delayAnimation}
                onClick={() => {
                  makeSearch({ router, searchData: { ... newFlightsSearchData }, setFlightsSearchData, setSearchActive, openInNewTab: true })
                }}
              >
                <div className="citiesCard__image rounded-8 ratio ratio-3:4">
                  <img
                    className="img-ratio rounded-8 js-lazy"
                    src={item.img}
                    alt={item.city.name}
                  />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-16 fw-500 text-dark-1">
                    Flights to {item.city.name}
                  </h4>
                  <div className="text-light-1">
                    {item.country.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default TopCities;
