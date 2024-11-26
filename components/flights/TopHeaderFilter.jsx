import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider'
import { useFlightsResults } from '@/components/flights/FlightsResultsContext'
import { pluralize } from "@/helpers/main"

const TopHeaderFilter = () => {
  const { flightsSearchData } = useSearchForm()

  const { flightCountResults, sortType, setSortType } = useFlightsResults()
  
  const handleSortTypeChange = (value) => {
    setSortType(value);
  };

  const sortOptions = [
    {
      title: "Cheapest",
      value: sortType,
      list: [
        { label: "Cheapest & Fastest" },
        { label: "Cheapest" },
        { label: "Fastest" },
        { label: "Earliest" },
      ],
      onChange: handleSortTypeChange,
    },
  ];

  return (
    <>
    <div className="row items-center justify-between">
      {flightsSearchData && (
        <div className="col-auto sm:d-none">
          <span className="fw-500">
            {flightsSearchData.fromPlace.name} - {flightsSearchData.toPlace.name}: {' '}
            {flightCountResults} {pluralize(flightCountResults, 'offer', 'offers')}
          </span>
        </div>
      )}

        <div className="col-auto">
          <div className="row">
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
                    <span className={`js-dropdown-title`}>{option.value}</span>
                  </div>
                  
                  <div className="toggle-element -dropdown js-click-dropdown dropdown-menu mt-5">
                    <div className="text-13 y-gap-15 js-dropdown-list">
                      {option.list.map((item, index) => (
                        <div key={index}>
                          <div
                            role="button"
                            className={`${
                              item.label === option.value ? "text-blue-1 " : ""
                            }d-block js-dropdown-link`}
                            onClick={() => option.onChange(item.label)}
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

            <div className="col-auto d-none xl:d-block pl-0">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -dark-1 h-40 px-20 rounded-100 bg-white shadow-new text-15 text-dark-1"
              >
                <i className="icon-transmission text-13 mr-10" />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
