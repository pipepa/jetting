'use client'

import { useState, useEffect } from "react"
import debounce from 'lodash.debounce'
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'

const ButtonFilter = ({ dropdown, isDropdown = true }) => {
  const itemKey = dropdown.value ?? dropdown.title

  const itemsToShow = 10
  const [maxItems, setMaxItems] = useState(itemsToShow)
  
  const handlemaxItemsChange = () => {
    const newMaxItems = maxItems === itemsToShow ? dropdown.items.length : itemsToShow
    setMaxItems(newMaxItems)
  }

  const { filterValues, setFilterValues } = useHotelsResults()
  const [newFilterValues, setNewFilterValues] = useState(filterValues[itemKey] || [])
  
  const handleButtonChange = (value, item, singleSelect = false) => {
    setNewFilterValues(prevValues => {
      // For single select items
      if (dropdown.singleSelect) {
        // If clicking the same value, clear it
        if (prevValues === value) {
          return [];
        }
        // Set the new single value directly (not as array)
        return value;
      }

      // For multi-select items - ensure we're working with an array
      const currentValues = Array.isArray(prevValues) ? prevValues : [];
      
      // Handle exclusive items
      if (item.exclusive) {
        // If clicking the same exclusive value, clear it
        if (currentValues.includes(value)) {
          return [];
        }
        // Set only the exclusive value as array
        return [value];
      }

      // Handle regular multi-select
      if (currentValues.includes(value)) {
        // Remove the value if it's already selected
        return currentValues.filter(v => v !== value);
      } else {
        // Add the new value, removing any exclusive value if it exists
        const exclusiveItem = dropdown.items.find(i => i.exclusive);
        return [...currentValues.filter(v => !exclusiveItem || v !== exclusiveItem.value), value];
      }
    });

    // If it's a single select, apply filters immediately
    if (singleSelect) {
      setTimeout(() => handleApplyFilters(value), 0);
      closeDropdown()
    }
  };

  const handleApplyFilters = debounce((values) => {
    setFilterValues(prevFilters => {
      // If values is empty or undefined, remove the filter
      if (!values || (Array.isArray(values) && values.length === 0)) {
        const { [itemKey]: _, ...rest } = prevFilters;
        return rest;
      }

      // For single select
      if (dropdown.singleSelect) {
        // If the value is an array but empty, remove the filter
        if (Array.isArray(values) && values.length === 0) {
          const { [itemKey]: _, ...rest } = prevFilters;
          return rest;
        }
        // Set the single value
        return { ...prevFilters, [itemKey]: Array.isArray(values) ? values[0] : values };
      }

      // For multi-select
      const newValues = Array.isArray(values) ? values : [values];
      
      // If no values, remove the filter
      if (newValues.length === 0) {
        const { [itemKey]: _, ...rest } = prevFilters;
        return rest;
      }

      // Set the array of values
      return { ...prevFilters, [itemKey]: newValues };
    });
  }, 100);

  // Add state for selectedLabels
  const [selectedLabels, setSelectedLabels] = useState([]);

  // Add useEffect to update selectedLabels when filterValues changes
  useEffect(() => {
    setNewFilterValues(filterValues[itemKey] || [])

    const labels = dropdown?.items
      ?.filter(item => {
        if (dropdown.singleSelect) {
          return filterValues[itemKey] === (item.value ?? item.title);
        }
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
    } else if (dropdown.singleSelect || selectedLabels.length === 1) {
      setDisplayLabelText(`${dropdown.title}: ${selectedLabels[0]}`);
    } else {
      setDisplayLabelText(`${dropdown.title}: ${selectedLabels[0]} + ${selectedLabels.length - 1} more`);
    }
  }, [selectedLabels, dropdown.title, dropdown.singleSelect]);

  const closeDropdown = () => {
    const dropdownElement = document.querySelector('.dropdown-menu.show');
    if (dropdownElement) {
      dropdownElement.classList.remove('show');
    }
  }

  const renderFilterItems = () => (
    <>
    <h5 className="text-18 fw-500 mb-10">{dropdown.title}</h5>
    <div className="row x-gap-10 y-gap-10 pt-10">
      {dropdown?.items?.slice(0, maxItems).map((item, index) => (
        <div className="col-auto" key={index}>
          <button
            className={`button bg-blue-1-05 text-dark-1 py-5 px-18 rounded-100 ${
              dropdown.singleSelect && newFilterValues === (item.value ?? item.title)
                ? "bg-dark-1 text-white"
                : Array.isArray(newFilterValues) && newFilterValues?.includes(item.value ?? item.title)
                  ? "bg-dark-1 text-white"
                  : ""
            }`}
            onClick={() => handleButtonChange(item.value ?? item.title, item, dropdown.singleSelect)}
          >
            {item.title}
          </button>
        </div>
      ))}
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
    <>
    {dropdown.singleSelect !== true && (
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
    )}
    </>
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
  );
};

export default ButtonFilter;
