'use client'

import React, { useState, useEffect } from "react"
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'
import InputRange from "react-input-range"

const RangeFilter = ({ dropdown, isDropdown = true }) => {
  const { filterValues, setFilterValues } = useHotelsResults()
  const { title, minValue, maxValue, description } = dropdown
  
  const [rangeValue, setRangeValue] = useState(
    (filterValues[title]) 
      ? ((filterValues[title] > maxValue) ? maxValue : filterValues[title]) 
      : null
  )

  useEffect(() => {
    if (rangeValue > maxValue) {
      setRangeValue(maxValue)
    }
  }, [maxValue])

  useEffect(() => {
    if (rangeValue && rangeValue < minValue) {
      handleRangeChange(minValue)
    }
  }, [minValue])
  
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

  const displayLabel = () => {
    if (!rangeValue) return title;
    return `${minValue} - ${rangeValue} ${description}`;
  };

  return (
    <div className="col-auto">
      <div className="relative">
        <button
          className="d-flex items-center px-15 h-33 text-14 rounded-100 bg-white shadow-new"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          {displayLabel()}
          <i className="icon icon-chevron-sm-down text-7 ml-15" />
        </button>

        <div className="dropRating shadow-2 dropdown-menu dropdown-menu__location-search rounded-8 px-20 py-20">
          <h5 className="text-15 fw-500 mb-15">{title}</h5>
          <div className="sidebar-checkbox">
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
    </div>
  );
};

export default RangeFilter;