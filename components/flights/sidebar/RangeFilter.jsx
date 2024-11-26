'use client'

import React, { useState, useEffect } from "react"

import { useFlightsResults } from '@/components/flights/FlightsResultsContext'
import InputRange from "react-input-range"

const RangeFilter = ({ title, minValue, maxValue, description }) => {
  const { filterValues, setFilterValues } = useFlightsResults()
  
  const [rangeValue, setRangeValue] = useState((filterValues[title]) ? ((filterValues[title] > maxValue) ? maxValue : filterValues[title]) : null)
  useEffect(() => {
    if (rangeValue > maxValue) {
      setRangeValue(maxValue)
    }
  }, [ maxValue ])
  useEffect(() => {
    if (rangeValue && rangeValue < minValue) {
      handleRangeChange(minValue)
    }
  }, [ minValue ])
  
  const handleRangeChange = (value) => {
    clearTimeout(window.debounceTimeout)

    setRangeValue(value)

    window.debounceTimeout = setTimeout(() => {
      setFilterValues((prevValues) => ({
        ...prevValues,
        [title]: value
      }))
    }, 1000)
  }

  useEffect(() => {
    return () => clearTimeout(window.debounceTimeout)
  }, [])

  return (
    <>
      <h5 className="text-16 fw-500 mb-10">{title}</h5>
      <div className="row x-gap-10 y-gap-30">
        <div className="col-12">
          <div className="js-price-rangeSlider">
            <div className="d-flex justify-between mb-20">
              <div className="text-dark-1">
                <span className="js-lower mx-1">{minValue} {description}</span>-
                <span className="js-upper mx-1">{rangeValue ?? maxValue} {description}</span>
              </div>
            </div>
            <div className="px-5">
              <InputRange
                formatLabel={() => ``}
                minValue={minValue}
                maxValue={maxValue}
                value={rangeValue ?? maxValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RangeFilter
