import { getHotelOffers, getHotelPrice, getHotelRatingClass, calculateDiscount, calculateDistance, getDistanceFromCenter } from '@/helpers/vio'
import cloneDeep from 'lodash/cloneDeep'

// export interface ParsedData {
    // itineraryId: string
    // outbound: Itineraries
    // inbound?: Itineraries
    // deals: IDeal[]
    // minPrice: number
    // durationInMinutes: number
    // bestScore: number
// }

export const parseSearchResults = (rawData: any, filterAgents: boolean = false): any => { //ParsedData[]
    const newRawData = cloneDeep(rawData)

    const data: any[] = []
    
    for (const hotel of newRawData.hotels) {
        const hotelPrice = getHotelPrice({ item: hotel.anchorRate })
        const { sortedOffers, cheapestOffer } = getHotelOffers({ offers: hotel.offers })
        const discount = calculateDiscount(hotelPrice, cheapestOffer.price)
        const discountPercentage = discount ? discount : null

        const isFreeCancellation = cheapestOffer.cancellationPenalties.some(penalty => penalty.amount == 0) ? true : false

        const isNearTheCenter = getDistanceFromCenter(hotel.details.distanceFromCityCentre, true)
        const { distanceInMeters, distanceText } = calculateDistance(hotel.details.distanceFromCityCentre)

        const hotelStars = hotel.details.starRating

        const hotelRatingRaw = hotel.details.guestRating.overall
        const hotelRating = hotelRatingRaw ?(Math.round(hotelRatingRaw * 10) / 10).toFixed(1) : null
        const hotelRatingClass = getHotelRatingClass(hotel.details.guestRating.overall)
        const hotelReviewCount = hotel.details.reviewCount

        data.push({
            ...hotel,
            hotelPrice,
            cheapestOffer,
            sortedOffers,
            discount: discountPercentage,
            isFreeCancellation,
            isNearTheCenter,
            distanceInMeters,
            distanceText,
            hotelStars,
            hotelRating,
            hotelRatingClass,
            hotelReviewCount,
        })
    }

    return data
}