'use client'

import { useEffect, useState } from "react"
import debounce from 'lodash.debounce'
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'

const CheckboxFilter = ({ dropdown, isDropdown = true }) => {
  const itemKey = dropdown.value ?? dropdown.title

  const itemsToShow = 10
  const [maxItems, setMaxItems] = useState(itemsToShow)
  
  const handlemaxItemsChange = () => {
    const newMaxItems = maxItems === itemsToShow ? dropdown.items.length : itemsToShow
    setMaxItems(newMaxItems)
  }

  const { filterValues, setFilterValues } = useHotelsResults()
  const [newFilterValues, setNewFilterValues] = useState(filterValues[itemKey] || [])

  const handleCheckboxChange = (value) => {
    setNewFilterValues(prevValues => {
      const newValues = prevValues.includes(value) ? prevValues.filter(v => v !== value) : [...prevValues, value]
      return newValues
    })
  }

  const handleApplyFilters = debounce((values) => {
    setFilterValues(prevValues => {
      if (values.length === 0) {
        const { [itemKey]: _, ...rest } = prevValues;
        return rest;
      }
      return { ...prevValues, [itemKey]: values };
    });
  }, 100);

  // Add state for selectedLabels
  const [selectedLabels, setSelectedLabels] = useState([]);

  // Add useEffect to update selectedLabels when filterValues changes
  useEffect(() => {
    setNewFilterValues(filterValues[itemKey] || [])

    const labels = dropdown?.items
      ?.filter(item => {
        return filterValues[itemKey]?.includes(item.value ?? item.title);
      })
      .map(item => item.title) || [];
      
    setSelectedLabels(labels);
  }, [filterValues[itemKey]])

  // Add state for displayLabel
  const [displayLabelText, setDisplayLabelText] = useState(dropdown.title);

  // Add useEffect to update displayLabel when selectedLabels changes
  useEffect(() => {
    if (!selectedLabels?.length) {
      setDisplayLabelText(dropdown.title);
    } else if (selectedLabels.length === 1) {
      setDisplayLabelText(`${dropdown.title}: ${selectedLabels[0]}`);
    } else {
      setDisplayLabelText(`${dropdown.title}: ${selectedLabels[0]} + ${selectedLabels.length - 1} more`);
    }
  }, [selectedLabels, dropdown.title]);

  const closeDropdown = () => {
    const dropdownElement = document.querySelector('.dropdown-menu.show');
    if (dropdownElement) {
      dropdownElement.classList.remove('show');
    }
  }

  const renderFilterItems = () => (
    <>
    <h5 className="text-18 fw-500 mb-10">{dropdown.title}</h5>
    <div className="row y-gap-10 pt-10">
      {dropdown?.items?.slice(0, maxItems).map((item, index) => {
        const itemValue = item.value ?? item.title
        return (
          <div className="col-12" key={index}>
            <div className="form-checkbox">
              <input
                name={itemValue}
                type="checkbox"
                checked={newFilterValues?.includes(itemValue) ? true : false}
                onChange={() => handleCheckboxChange(itemValue)}
              />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 lh-11 ml-10">{item.title}</div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )

  const renderShowMore = () => (
    <>
    {dropdown.items.length > itemsToShow && (
      <button 
        className="d-block text-14 fw-500 underline text-blue-1 mt-15"
        onClick={handlemaxItemsChange}
      >
        {maxItems === itemsToShow ? `Show all ${dropdown.items.length}` : 'Show less'}
      </button>
    )}
    </>
  )

  function applyFilters(clear = false) {
    if (clear) {
      setNewFilterValues([])
    }
    handleApplyFilters(clear ? [] : newFilterValues)
    closeDropdown()
  }

  const renderButtons = () => (
    <div className="mt-30 x-gap-15 row">
      <div className="col-auto">
        <button 
          className="button bg-dark-1 text-white fw-500 px-20 py-8 rounded-100 text-15"
          onClick={() => applyFilters()}
        >
          Apply
        </button>
      </div>
      <div className="col-auto">
        <button 
          className="button bg-blue-1-05 fw-500 px-20 py-8 rounded-100 text-15"
          onClick={() => applyFilters(true)}
        >
          Clear
        </button>
      </div>
    </div>
  )

  return (
    <>
      <div className="col-auto">
        <div className="relative">
          {isDropdown ? (
            <>
              <button
                className={`d-flex items-center px-15 h-33 text-14 rounded-100 bg-white shadow-new ${
                  selectedLabels?.length > 0 ? 'bg-dark-1 text-white' : ''
                }`}
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                {displayLabelText}
                <i className="icon icon-chevron-sm-down text-7 ml-15" />
              </button>

              <div className="dropRating shadow-2 dropdown-menu dropdown-menu__location-search rounded-8 px-20 py-20">
                {renderFilterItems()}
                {renderShowMore()}
                {renderButtons()}
              </div>
            </>
          ) : (
            <>
              {renderFilterItems()}
              {renderShowMore()}
              {renderButtons()}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CheckboxFilter
