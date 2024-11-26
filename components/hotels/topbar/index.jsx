'use client'

import CheckboxFilter from "../common/CheckboxFilter"
import ButtonFilter from "../common/ButtonFilter"
import RangeFilter from "../common/RangeFilter"
import SingleSelectFilter from "../common/SingleSelectFilter"
import { useHotelsResults } from '@/components/hotels/HotelsResultsProvider'
// import SearchBox from "./sidebar/SearchBox"

const Topbar = () => {
  const { filtersData, filterValues, setFilterValues } = useHotelsResults()

  const resetFilters = () => {
    setFilterValues({})
  };

  const renderFilter = (dropdown, index) => {
    switch (dropdown.type) {
      case 'checkboxes':
        return (
          <CheckboxFilter key={index} dropdown={dropdown} />
        );
      case 'range':
        return (
          <RangeFilter key={index} dropdown={dropdown} />
        );
      case 'buttons':
        return (
          <ButtonFilter key={index} dropdown={dropdown} />
        );
      case 'singleSelect':
        return (
          <SingleSelectFilter key={index} dropdown={dropdown} />
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div className="col-auto xl:d-none">
      <div className="row x-gap-20 y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-18 fw-500">Filters {Object.keys(filterValues).length > 0 && `(${Object.keys(filterValues).length})`}</div>
        </div>

        <div className="col-auto">
          <div className="row x-gap-15 y-gap-15">
            {filtersData && filtersData.map((dropdown, index) => renderFilter(dropdown, index))}
          </div>
        </div>

        {Object.keys(filterValues).length > 0 && (
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <button
                className="d-flex shadow-new text-11 p-2 rounded-100"
                onClick={resetFilters}
              >
                <i className="icon icon-close" />
              </button>
              <span className="ml-5 text-11 fw-500 cursor-pointer" onClick={resetFilters}>
                Reset filters
              </span>
            </div>
          </div>
        )}

      </div>
    </div>

    {/*<div className="col-12 col-md-auto">
      <SearchBox />
    </div>*/}
    </>
  )
}

export default Topbar;
