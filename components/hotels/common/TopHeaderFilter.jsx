'use client'

import { useSearchForm } from "@/components/search-form/hotels/HotelsSearchProvider"
import { useHotelsResults } from "@/components/hotels/HotelsResultsProvider"

const TopHeaderFilter = ({ status, hotelsCount }) => {
  const { toPlace } = useSearchForm()

  const { sortType, setSortType } = useHotelsResults()
  
  const handleSortTypeChange = (value) => {
    setSortType(value);
  }

  const sortOptions = [
    {
      title: "Cheapest",
      value: sortType,
      list: [
        { label: "Best", value: "best" },
        { label: "Cheapest", value: "price-asc" },
        { label: "Most Expensive", value: "price-desc" },
        { label: "Highest Rated", value: "guest-rating-desc" },
      ],
      onChange: handleSortTypeChange,
    },
  ]

  const getSelectedLabel = (option) => {
    const selectedItem = option.list.find(item => item.value === option.value)
    return selectedItem?.label || option.title
  }

  return (
    <>
      <div className="row items-center">
        {status == 'Completed' && toPlace && (
          <div className="col-auto sm:d-none">
            {hotelsCount} hotels in {toPlace.name}
          </div>
        )}

        <div className="col-auto ml-auto sm:pt-5">
          <div className="row">
            <div className="col-auto d-none xl:d-block pr-0">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -dark-1 h-40 px-20 rounded-100 bg-white shadow-new text-15 text-dark-1"
              >
                <i className="icon-transmission text-13 mr-10" />
                Filter
              </button>
            </div>

            {sortOptions.map((option, index) => (
              <div className="col-auto align-items-center d-flex" key={index}>
                <div className="dropdown js-dropdown">
                  <div
                    className="button dropdown__button d-flex items-center rounded-100 -dark-1 bg-white shadow-new fw-500 px-20"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    data-bs-offset="0,0"
                  >
                    <i className={`icon-up-down text-13 mr-10`} />
                    <span className={`js-dropdown-title`}>{getSelectedLabel(option)}</span>
                  </div>
                  
                  <div className="toggle-element -dropdown js-click-dropdown dropdown-menu mt-5">
                    <div className="text-13 y-gap-15 js-dropdown-list">
                      {option.list.map((item, index) => (
                        <div key={index}>
                          <div
                            role="button"
                            className={`${
                              item.value === option.value ? "text-blue-1 " : ""
                            }d-block js-dropdown-link`}
                            onClick={() => option.onChange(item.value)}
                          >
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeaderFilter;
