'use client'

import LocationSwitcher from "../flights/LocationSwitcher"

const LocationSearch = ({ 
  className = 'px-20 lg:py-15 md:py-10 lg:px-0',
  showPopup,
  isLoading,
  location,
  locationError,
  searchValue,
  locationSearchContent,
  handleSearchValue,
  handleOptionClick,
  handleCloseDropdown,
  handleDivClick,
  locationInputRef,
  placeholder,
  label,
  showSwitcher = false
}) => {
  return (
    <>
      <div className={`searchMenu-loc js-form-dd js-liverSearch ${className}`}>
        <div
          onClick={handleDivClick}
        >
          <div className="field-name text-dark-3 lh-16 pl-2">
            {label}
            {locationError && (
              <span className="text-red-1 text-12 ml-10">{locationError}</span>
            )}
          </div>

          <div className="input-container text-16 lh-16 position-relative">
            <input
              autoComplete="off"
              type="search"
              placeholder={placeholder}
              className="js-search js-dd-focus"
              value={searchValue != "" ? searchValue : location ? location.name : ''}
              onChange={(e) => handleSearchValue(e.target.value)}
              ref={locationInputRef}
              // readOnly={isDisabled}
            />
            <small className="input-search__iata_code pl-8 position-absolute">
              {location?.iataCode ? (
                location.iataCode
              ) : searchValue && (
                <button 
                  className="pointer"
                  role="button"
                  onClick={handleCloseDropdown}
                >
                  <i className="icon-close" />
                </button>
              )}
            </small>
          </div>
        </div>

        {showSwitcher && <LocationSwitcher/>}

        <div className={`shadow-2 dropdown-menu dropdown-menu__location-search min-width-400 rounded-16 scroll-bar-search mt-10 ${showPopup ? 'd-block' : ''}`}>
          {searchValue && !isLoading && (
            <div className="bg-white px-10 py-15 sm:py-10 rounded-16">
              <ul className="y-gap-5 js-results">
                {locationSearchContent.length > 0 ? (
                <>
                  {locationSearchContent.map((item, index) => (
                    <li
                      className={`-link d-block col-12 text-left rounded-16 px-10 py-10 js-search-option mb-1 ${
                        location && location.entityId === item.entityId ? "active" : ""
                      }`}
                      key={item.entityId}
                      role="button"
                      onClick={() => handleOptionClick(item)}
                    >
                      <div className={locationSearchContent[index - 1]?.parentId == item.parentId ? "d-flex ml-20" : "d-flex"}>
                        {item.type == "PLACE_TYPE_AIRPORT" ? (
                          <div className="icon-airplane text-light-1 text-20 pt-4"/>
                        ) : (
                          <div className="icon-location-2 text-light-1 text-20 pt-4"/>
                        )}
                        <div className="ml-10">
                          <div className="text-15 lh-12 fw-500 js-search-option-target">
                            {item.name}
                          </div>
                          <div className="text-14 lh-12 text-light-1 mt-5">
                            {item.iataCode}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
                ) : (
                  <li className={`d-block col-12 text-left rounded-16 px-10 py-10 js-search-option mb-1`}>
                    No Results
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LocationSearch;