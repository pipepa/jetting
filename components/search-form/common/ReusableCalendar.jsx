import React from 'react';
import { Calendar } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker"

const ReusableCalendar = ({
  datePickerRef,
  newDates,
  selectDates,
  monthsToShow,
  mapDaysWithPrices,
  handleDatePickerMonthChange,
  tripType,
}) => {
  return (
    <>
    <Calendar
      ref={datePickerRef}
      containerClassName="custom_container-picker"
      value={newDates}
      onChange={selectDates}
      numberOfMonths={monthsToShow}
      offsetY={10}
      range={tripType === 'Round Trip'}
      rangeHover={tripType === 'Round Trip'}
      minDate={new DateObject()}
      mapDays={mapDaysWithPrices}
      onMonthChange={handleDatePickerMonthChange}
      onYearChange={handleDatePickerMonthChange}
    />
    </>
  );
};

export default ReusableCalendar;