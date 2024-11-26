import { DateObject } from "react-multi-date-picker"

export function checkForErrors(
  {
    fromPlace,
    toPlace,
    dates
  }: {
    fromPlace?: any,
    toPlace?: any,
    dates?: DateObject[]
  },
  errors,
  setErrors = null,
  requiredFields = ['fromPlace', 'toPlace', 'dates']
) {
  const newErrors = {...errors}
  
  if (requiredFields.includes('fromPlace') && !fromPlace?.iataCode) {
    newErrors.fromPlace = 'Required!'
  }
  if (requiredFields.includes('toPlace') && !toPlace?.iataCode) {
    newErrors.toPlace = 'Required!'
  }

  if (requiredFields.includes('dates')) {
    const currentDate = new DateObject().format()
    const currentDateUnix = new DateObject(currentDate).toUnix()
    const dateTo = dates[0] ? new DateObject(dates[0]) : null
    const dateBack = dates[1] ? new DateObject(dates[1]) : null
    
    if (!dateTo && !dateBack) {
      newErrors.dates = 'Date Required!'
    }
    if (currentDateUnix > dateTo?.toUnix() || currentDateUnix > dateBack?.toUnix()) {
      newErrors.dates = 'Date Expired!'
    }
  }

  if (Object.keys(newErrors).length > 0) {
    if (setErrors) {
      setErrors(newErrors)
    }
    return newErrors
  } else {
    if (setErrors) {
      setErrors({})
    }
  }
  return false
}