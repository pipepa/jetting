'use client'

import debounce from 'lodash.debounce'
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'

const SingleSelectFilter = ({ dropdown, isDropdown = true }) => {
  const itemKey = dropdown.value ?? dropdown.title

  const { filterValues, setFilterValues } = useHotelsResults()

  const handleButtonChange = debounce((value) => {
    setFilterValues(prevValues => {
      // If the same value is selected, remove the key entirely
      if (prevValues[itemKey] === value) {
        const { [itemKey]: _, ...rest } = prevValues;
        return rest;
      }
      // Set the new value
      return { ...prevValues, [itemKey]: value }
    })
  }, 100)

  return (
    <>
      <div className={`${isDropdown ? 'col-auto' : 'col'}`}>
        <button
          className={`d-flex items-center px-15 h-33 text-14 rounded-100 bg-white shadow-new ${
            filterValues[itemKey] === true ? "text-white bg-dark-1" : ""
          }`}
          onClick={() => handleButtonChange(true)}
          style={{ whiteSpace: 'nowrap' }}
        >
          <span className="icon-class-name" aria-hidden="true"></span>
          {dropdown.title}
        </button>
      </div>
    </>
  )
}

export default SingleSelectFilter
