'use client'

import React, { useMemo } from 'react'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { continents } from "@/data/skyscannerContinents"

const EventsLocation = ({ continent }) => {

  const inititalSlideindex = useMemo(() => {
    return continent ? continents.findIndex(continentItem => continentItem.slug === continent.slug) ?? 0 : 0
  }, [continent])

  return (
    <>
    <Swiper
      initialSlide={inititalSlideindex}
      className="swiper-container overflow-visible"
      breakpoints={{
        1400: {
          slidesPerView: 7,
        },
        1200: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        250: {
          slidesPerView: 2,
        },
      }}
      modules={[Pagination]}
      pagination={{
        el: ".js-eventsLocations-pag",
        clickable: true,
      }}
    >
      <SwiperSlide
        className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'
      >
        <div
          className='mr-10'
        >
          {!continent ? (
            <div
              className={`citiesCard -type-6 d-flex flex-row items-center bg-blue-1-05 disabled active`}
            >
              <i className="icon-globe text-16" />
              <div className="ml-10" style={{ whiteSpace: 'nowrap' }}>
                <h4 className="text-12 fw-500">Worldwide</h4>
                <p className="text-10">0 total events</p>
              </div>
            </div>
          ) : (
            <Link
              href={`/events`}
              target="_blank"
              className={`citiesCard -type-6 d-flex flex-row items-center -dark-4 bg-blue-1-05`}
            >
              <i className="icon-globe text-16" />
              <div className="ml-10" style={{ whiteSpace: 'nowrap' }}>
                <h4 className="text-12 fw-500">Worldwide</h4>
                <p className="text-10">0 total events</p>
              </div>
            </Link>
          )}
        </div>
      </SwiperSlide>
      {continents.map((item) => (
        <SwiperSlide
          key={item.entityId}
          className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2'
        >
          <div
            className='mr-10'
          >
            {continent?.slug == item.slug ? (
              <div
                className={`citiesCard -type-6 d-flex flex-row items-center -dark-4 bg-blue-1-05 disabled active`}
              >
                <i className="icon-location-2 text-16" />
                <div className="ml-10" style={{ whiteSpace: 'nowrap' }}>
                  <h4 className="text-12 fw-500">{item.name}</h4>
                  <p className="text-10">0 events</p>
                </div>
              </div>
            ) : (
              <Link
                href={`/events/${item.slug}`}
                target="_blank"
                className={`citiesCard -type-6 d-flex flex-row items-center -dark-4 bg-blue-1-05 `}
              >
                <i className="icon-location-2 text-16" />
                <div className="ml-10" style={{ whiteSpace: 'nowrap' }}>
                  <h4 className="text-12 fw-500">{item.name}</h4>
                  <p className="text-10">0 events</p>
                </div>
              </Link>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="d-flex x-gap-15 items-center justify-center pt-10 sm:pb-5">
      <div className="col-auto">
        <div className="pagination -dots text-border js-eventsLocations-pag" />
      </div>
    </div>
    </>
  );
};

export default EventsLocation;
