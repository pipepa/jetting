export function getHotelPrice({ item }) {
  return Math.round(item.base + item.taxes + item.hotelFees)
}

export function getHotelOffers({ offers, includeFirst = false }) {
  const sortedOffersRaw = offers.sort((a, b) => getHotelPrice({ item: a.rate }) - getHotelPrice({ item: b.rate }))
  const sortedOffers = sortedOffersRaw.map(offer => {
    offer.price = getHotelPrice({ item: offer.rate })
    return offer
  })
  const cheapestOffer = sortedOffers[0]
  return { sortedOffers: includeFirst ? sortedOffers : sortedOffers.slice(1), cheapestOffer }
}

export function getDistanceFromCenter(distance, returnIfNearTheCenter = false) {
  if (returnIfNearTheCenter) {
    if (distance < 2000) {
      return true
    }
    return false
  }
  return `${(Math.round(distance * 10) / 10).toFixed(1)} km`
}

export function getHotelRatingClass(rating) {
  if (rating >= 9.5) return "Exceptional";
  if (rating >= 9.0) return "Excellent";
  if (rating >= 8.0) return "Wonderful";
  if (rating >= 7.0) return "Very good";
  if (rating >= 6.0) return "Good";
  if (rating >= 4.0) return "Fair";
  return "Poor";
}

export function calculateDiscount(originalPrice, discountedPrice) {
  if (!originalPrice || !discountedPrice || originalPrice <= discountedPrice) return 0;
  const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return Math.round(discountPercentage); // Rounds to whole numbers
}

export function calculateDistance(distanceInMeters) {
  const distanceText = distanceInMeters > 4000 ? `${(distanceInMeters / 1000).toFixed(1)} km` : `${distanceInMeters} meters`;
  return { distanceInMeters, distanceText }
}

export function formatVioImageUrl(providerName: string, imageUrl: string) {
  // Add default provider logos if needed
  // const defaultLogos: { [key: string]: string } = {
  //   'Booking.com': '/img/providers/booking.png',
  //   'Agoda': '/img/providers/agoda.png',
  //   'Hotels.com': '/img/providers/hotels-com.png',
  //   'Expedia': '/img/providers/expedia.png',
  //   // Add more default provider logos as needed
  // }

  // if (!imageUrl && defaultLogos[providerName]) {
  //   return defaultLogos[providerName]
  // }

  return imageUrl || '/img/providers/default.png'
}