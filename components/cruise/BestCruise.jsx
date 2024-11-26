
'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../data/cruise";
import Badge from "@/components/common/Badge";
import WishlistButton from "@/components/wishlist/WishlistButton"

const BestCruise = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-cruise-next",
          prevEl: ".js-popular-cruise-prev",
        }}
        pagination={{
          el: ".js-cruise-pag_active",
          clickable: true,
        }}
        breakpoints={{
          514: {
            slidesPerView: 1,
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
        {cruiseData.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={item?.url}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="cruiseCard -type-1 rounded-4"
              data-aos="fade"
              data-aos-delay={item?.delayAnimation}
            >
              <div className="cruiseCard__image position-relative">
                <div className="carCard__image">
                  <div className="cardImage ratio ratio-6:5">
                    <div className="cardImage__content custom_inside-slider">
                      <Image
                        width={300}
                        height={300}
                        className="rounded-8 col-12 js-lazy"
                        src={item.slideImg}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  {/* End cartImage */}

                  <WishlistButton
                    wishlistKey='BestCruises_Wishlist'
                    id={item.id}
                    className="cardImage__wishlist"
                  />

                  <Badge item={item} />

                </div>
              </div>

              <div className="cruiseCard__content mt-10">
                <div className="text-12 lh-12 text-light-1 mb-5">
                  {item?.ship}
                </div>
                <h4 className="cruiseCard__title text-dark-1 text-16 lh-15 fw-500" style={{ minHeight: '48px' }}>
                  <span>{item?.title}</span>
                </h4>
                <div className="row pt-5 y-gap-5" style={{ minHeight: '79px' }}>
                  {/* <div className="col-6">
                    <div className="text-light-1 text-12 lh-12">
                      Duration
                    </div>
                    <div className="fw-500">{item?.duration}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-12 lh-12 text-light-1">Departing</div>
                    <div className="fw-500">{item.departing}</div>
                  </div> */}
                  <div className="col-auto">
                    <div className="tex text-light-1">
                      Departing
                    </div>
                    <div className="text-12 lh-12  ">
                      {item?.departing}
                    </div>
                  </div>
                  {/* <div className="col-auto">
                    <div className="tex text-light-1">
                      Ports ({item.portsNumber})
                    </div>
                    <div className="text-12 lh-12  ">
                      {item?.portsName}
                    </div>
                  </div> */}
                </div>
                {/* End .row */}

                <div className="row y-gap-20 justify-between items-center pt-10">
                  <div className="col-auto">
                    <div className="icon-star">
                      <span className="text-16 lh-12">
                        {" "}{item?.ratings}
                      </span>
                    </div>
                    <div className="text-10 text-light-1">
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-light-1 lh-12">
                      From{" "}
                      <span className="text-16 fw-600 text-dark-1">
                        ${item?.price}
                      </span>
                    </div>
                    <div className="text-10 text-light-1">
                      ${item?.pricepernight} / night
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-cruise-prev">
            <i className="icon icon-arrow-left text-dark-1" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-cruise-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-cruise-next">
            <i className="icon icon-arrow-right text-dark-1" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default BestCruise;
