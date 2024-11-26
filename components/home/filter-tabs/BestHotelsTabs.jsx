
'use client'

import SelectFilter from "./SelectFilter"

const BestHotelsTabs = ({ filterOption, setFilterOption, sortingOption, setSortingOption }) => {

  const filterOptions = [
    { label: "New York", value: "New York" },
    { label: "London", value: "London" },
    { label: "Paris", value: "Paris" },
    { label: "Dubai", value: "Dubai" },
    { label: "Tokyo", value: "Tokyo" },
    { label: "Rome", value: "Rome" },
    { label: "Sydney", value: "Sydney" },
    { label: "Beijing", value: "Beijing" },
  ];

  return (
    <div className="tabs__controls row x-gap-5 y-gap-10 items-center">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button position-relative text-13 text-dark-1 js-tabs-button fw-500 px-16 py-5 rounded-8 uppercase ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}

      {/* SelectFilter visible on larger screens in the same row */}
      <div className="col-auto ml-auto d-none d-md-block">
        <SelectFilter sortingOption={sortingOption} setSortingOption={setSortingOption} />
      </div>

      {/* SelectFilter moves to a new line on mobile devices */}
      <div className="col-12 mt-3 d-block d-md-none">
        <SelectFilter sortingOption={sortingOption} setSortingOption={setSortingOption} />
      </div>
  
    </div>
  );
};

export default BestHotelsTabs;
