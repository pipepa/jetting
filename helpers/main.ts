import { continents } from "@/data/skyscannerContinents"
import { countries } from "@/data/skyscannerCountries"
import { cities } from "@/data/skyscannerCities"

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_DOMAIN) {
    return `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}

export function pluralize(number, singular, plural) {
  return number === 1 ? singular : plural
}

interface DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export const formatDateTime = (
  datetime: DateTime,
  isShort: boolean = false,
  data: Array<'year' | 'month' | 'day'> = ['year', 'month', 'day']
): { formattedDate: string; formattedTime: string } => {
  let formattedDate = ''
  let formattedTime = ''

  if (datetime) {
    const newData: Intl.DateTimeFormatOptions = {};
    if (data.includes('year')) {
      newData.year = 'numeric'
    }
    if (data.includes('month')) {
      newData.month = 'short'
    }
    if (data.includes('day')) {
      newData.day = 'numeric'
    }

    const date = new Date(datetime.year, datetime.month - 1, datetime.day, datetime.hour, datetime.minute);
    formattedDate = isShort ?
      date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      }) : date.toLocaleDateString('en-US', newData)

    // Using toLocaleTimeString for better localization support
    formattedTime = date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false  // or true if you want 12-hour format with AM/PM
    })
  }

  return { formattedDate, formattedTime }
}

export const formatMinutes = (mins, isShort = false) => {
  const hours = Math.floor(mins / 60)
  const minutes = mins % 60
  const res = isShort ? `${hours}h ${minutes}m` : `${hours} ${pluralize(hours, 'hour', 'hours')} ${minutes} ${pluralize(minutes, 'minute', 'minutes')}`
  return res
}

export function getLocation({ locationType, toPlace }) {
  let locationId = {}
  let locationArr = []

  if (locationType == 'city') {
    locationId = toPlace.entityId
    locationArr = cities
    if (toPlace.type && toPlace.type == 'PLACE_TYPE_AIRPORT') {
      locationId = toPlace.parentId
    }
  } else if (locationType == 'country') {
    locationId = toPlace.entityId
    locationArr = countries
  } else {
    locationId = toPlace.entityId
    locationArr = continents
  }

  const location = locationArr.find(item => item.entityId == locationId)

  return location
}

export function getLocationUrl({ locationType, location }) {
  let url = 'destinations'

  if (locationType == 'city') {
    const country = countries.find(item => item.entityId == location.parentId)
    const continent = continents.find(item => item.entityId == country.parentId)
    url += `/${continent.slug}/${country.slug}/${location.slug}`
  } else if (locationType == 'country') {
    const continent = continents.find(item => item.entityId == location.parentId)
    url += `/${continent.slug}/${location.slug}`
  } else {
    url += `/${location.slug}`
  }

  return url
}

export function getDestinations(entityIds, array) {
  return entityIds.map((item) => {
    return array.find(findItem => findItem.entityId == item)
  })
}

export function objectDeepMerge(target, source) {
  if (typeof target !== 'object' || typeof source !== 'object') return source;

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object && key in target) {
        target[key] = objectDeepMerge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}