'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'
import { formatVioImageUrl } from "@/helpers/vio"

const HotelsProviders = ({ filteredAgents }) => {

  const { hotelsProviders } = useHotelsResults()
  console.log(hotelsProviders)
  return (
    <div className="position-relative">
      <div className={`${hotelsProviders.length > 0 ? '' : 'd-none'}`}>
        <Swiper
          className="swiper-providers-container pt-24 pb-32"
          modules={[Navigation]}
          navigation={{
            nextEl: ".js-hotels-providers-next",
            prevEl: ".js-hotels-providers-prev",
          }}
          slidesPerView='auto'
          spaceBetween={8}
          freeMode={true}
        >
          {hotelsProviders.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{width: 'auto'}}>
                <div className="col ml-5 mr-5">
                  {filteredAgents.includes(item.name) ? (
                    <>
                      <div
                        className="text-center"
                        style={{width: '80px'}}
                      >
                        <Image
                          className="rounded-8"
                          width="120"
                          height="75"
                          src={formatVioImageUrl(item.name, item.image)}
                          alt={item.name}
                        />
                        <div className="text-10 text-gray-500 mt-1">
                          {item.count} offers
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.cheapestOffer?.deepLink}
                      target="_blank"
                    >
                      <div
                        className="text-center"
                        style={{width: '80px'}}
                      >
                        <Image
                          className="rounded-8"
                          width="120"
                          height="75"
                          src={formatVioImageUrl(item.name, item.image)}
                          alt={item.name}
                        />
                        <div className="text-10 text-gray-500 mt-1">
                          {item.count} offers
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className={`arrow-left-absolute`}>
          <button className="d-flex items-center text-20 arrow-left-hover js-hotels-providers-prev bg-white shadow-new p-1 rounded-8">
            <i className="icon icon-arrow-left" />
          </button>
        </div>

        <div className={`arrow-right-absolute`}>
          <button className="d-flex items-center text-20 arrow-right-hover js-hotels-providers-next bg-white shadow-new p-1 rounded-8">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default HotelsProviders

