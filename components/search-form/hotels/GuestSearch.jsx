'use client'

import React, { useState, useEffect } from "react";
import { useSearchForm } from './HotelsSearchProvider';
import { pluralize } from "@/helpers/main"

const maxTravelersCount = Infinity;
const counters = [
  { name: "Adults", defaultValue: 2, minValue: 1, maxValue: 14 },
  { name: "Children", defaultValue: 0, minValue: 0, maxValue: 20 },
];

const Counter = ({ name, defaultValue, maxValue, minValue, onCounterChange, travelersCount, totalTravelersCount }) => {
  const [count, setCount] = useState(defaultValue);

  useEffect(() => {
    if(travelersCount[name] !== count) {
      setCount(travelersCount[name]);
    }
  }, [travelersCount, name, count]);

  const incrementCount = () => {
    if (totalTravelersCount < maxTravelersCount && count < maxValue) {
      setCount(count + 1);
      onCounterChange(name, count + 1)
    }
  };
  
  const decrementCount = () => {
    if (count > 0 && count > minValue) {
      setCount(count - 1);
      onCounterChange(name, count - 1);
    }
  };

  return (
    <>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">{name}</div>
          {name === "Children" && (
            <div className="text-14 lh-12 text-light-1 mt-5">Age 0 - 17</div>
          )}
        </div>
        {/* End .col-auto */}
        <div className="col-auto">
          <div className="d-flex items-center js-counter">
            <button
              className="button -outline-dark-1 text-dark-1 size-38 rounded-4 js-down"
              onClick={decrementCount}
            >
              <i className="icon-minus text-12" />
            </button>
            {/* decrement button */}
            <div className="flex-center size-20 ml-15 mr-15">
              <div className="text-15 js-count">{count}</div>
            </div>
            {/* counter text  */}
            <button
              className="button -outline-dark-1 text-dark-1 size-38 rounded-4 js-up"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
            {/* increment button */}
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */}
      <div className="border-top-light mt-24 mb-24" />
    </>
  );
};

const GuestSearch = () => {
  const { travelersCount, setTravelersCount } = useSearchForm();
  const totalTravelersCount = Object.values(travelersCount).reduce((acc, curr) => acc + curr, 0);
  const handleCounterChange = (name, value) => {
    setTravelersCount((prevState) => ({ ...prevState, [name]: value }))
  }
  
  useEffect(() => {
  }, [travelersCount]);

  return (
    <div className="searchMenu-guests px-24 lg:py-20 md:py-10 lg:px-0 js-form-dd js-form-counters">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
        aria-controls="travelerssDropdownMenu"

      >
        <div className="text-dark-3 fw-400 ls-2 lh-16">Travelers</div>
        <div className="text-15 text-dark-1 ls-2 lh-18" style={{minWidth: '146px'}}>
          <span className="js-count-adult">{travelersCount.Adults}</span> {pluralize(travelersCount.Adults, 'adult', 'adults')} {" "}
            {travelersCount.Children ? (
              <>
              - {" "} <span>{travelersCount.Children}</span> {pluralize(travelersCount.Children, 'child', 'children')} {" "}
              </>
            ) : ''}
        </div>
      </div>
      {/* End travelerss */}

      <div className="shadow-2 dropdown-menu min-width-400 rounded-16" id="travelerssDropdownMenu">
        <div className="bg-white px-30 py-30 rounded-16 counter-box">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              name={counter.name}
              defaultValue={counter.defaultValue}
              maxValue={counter.maxValue}
              minValue={counter.minValue}
              onCounterChange={handleCounterChange}
              travelersCount={travelersCount}
              totalTravelersCount={totalTravelersCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GuestSearch;
