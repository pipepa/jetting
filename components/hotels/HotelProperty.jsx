'use client'

import Image from "next/image";
import Link from "next/link";
import WishlistButton from "@/components/wishlist/WishlistButton"
import {
  getHotelPrice,
} from "@/helpers/vio";

// data.push({
//   ...hotel,
//   cheapestOffer,
//   sortedOffers,
//   ratingClass,
//   discount: discountPercentage,
//   isFreeCancellation,
//   isNearTheCenter,
//   distanceInMeters,
//   distanceText,
//   hotelStars,
//   hotelRating
// })

const HotelProperty = ({ hotelItem, searchStatus }) => {

  const {
    hotelPrice,
    sortedOffers,
    cheapestOffer,
    discount,
    isFreeCancellation,
    distanceInMeters,
    distanceText,
    isNearTheCenter,
    hotelRating,
    hotelStars,
    hotelRatingClass,
    hotelReviewCount,
  } = hotelItem
  
  return (
    <div className={'col-6 col-lg-3 col-md-4 col-sm-6'}>
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
                  src={hotelItem.details.images[0]}
                  alt={hotelItem.details.name}
                />
              </div>
            </div>
          </div>
          
          {discount && (
            <div class="position-relative">
              <div id="Badge" class="discountBadge bg-red-2">
                <p class="badge-text text-white fw-500 text-25 xl:text-24 lg:text-22 md:text-18">-{discount}%</p>
              </div>
            </div>
          )}

          <WishlistButton
            wishlistKey='BestDealsHotels_Wishlist'
            id={hotelItem.id}
            className="cardImage__wishlist"
          />
          {distanceInMeters && (
            <>
            {isNearTheCenter ? (
              <div className="cardImage__leftBadge">
                <div className="py-4 xl:py-3 sm:py-0 px-15 xl:px-8 sm:px-5 rounded-right-4 text-12 xl:text-11 sm:text-10 lh-16 fw-500 uppercase text-white bg-dark-1">
                  Downtown
                </div>
              </div>
            ) : (
              <div className="cardImage__leftBadge">
                <div className="py-4 xl:py-3 sm:py-0 px-15 xl:px-8 sm:px-5 rounded-right-4 text-12 xl:text-11 sm:text-10 lh-16 fw-500 uppercase text-white bg-dark-1">
                  {distanceText} to city center
                </div>
              </div>
            )}
            </>
          )}
          
          {isFreeCancellation && (
            <div className="cardImage__secondleftBadge">
              <div className="py-4 xl:py-3 sm:py-0 px-15 xl:px-8 sm:px-5 rounded-right-4 text-12 xl:text-11 sm:text-10 lh-16 fw-500 uppercase bg-green-1 text-dark-1">
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
            <span>{hotelItem.details.name}</span>
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
            {hotelItem.details.cityName}
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

export default HotelProperty;
