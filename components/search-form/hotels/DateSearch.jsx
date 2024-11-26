'use client'

import React, { useEffect, useState, useRef } from "react"
import { DateObject } from "react-multi-date-picker"
import { useSearchForm } from './HotelsSearchProvider'
import FilterSelect from "@/components/search-form/common/FilterSelect"
import ReusableCalendar from '@/components/search-form/common/ReusableCalendar'

const useDateSearch = () => {
  const { toPlace, dates, datePickerRef, tripType, isDatePickerOpen, handleDatePickerMonthChange, handleDatePickerOpen, handleDatesChange, autoSearch, errors } = useSearchForm()
  const newDates = dates.length > 0 ? dates.length === 1 ? [
    dates[0] ? new DateObject(dates[0]) : null,
  ] : [
    dates[0] ? new DateObject(dates[0]) : null,
    dates[1] ? new DateObject(dates[1]) : null,
  ] : []

  const datesError = errors.dates ?? null

  const [monthsToShow, setMonthsToShow] = useState(3)

  const selectDates = (value) => {
    handleDatesChange(value, tripType)
  }

  const datePickerDivRef = useRef(null)
  const datePickerInputRef = useRef(null)
  const datePickerContainerRef = useRef(null)
  const datePickerMobileContainerRef = useRef(null)
  const handleClickOutside = (event) => {
    if (window?.innerWidth > 768 && datePickerContainerRef.current && !datePickerContainerRef.current.contains(event.target)) {
      handleDatePickerOpen('close');
    }
  };


  useEffect(() => {
    function handleWindowSizeChange() {
      if (window.innerWidth >= 1024) {
        // Desktop
        setMonthsToShow(3)
      } else if (window.innerWidth >= 600) {
        // Tablet
        setMonthsToShow(2)
      } else {
        // Mobile
        setMonthsToShow(1)
      }
    }

    handleWindowSizeChange()

    // Event listener for window resize
    window.addEventListener('resize', handleWindowSizeChange)

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []) // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDatePickerOpen]);


  useEffect(() => {
    if (autoSearch !== 'true' && datesError === 'Date Required!') {
      handleDatePickerOpen('open')
    }
  }, [datesError])

  const formattedDateRange = () => {
    if (newDates.length === 0) return 'Select';
    
    const startDate = new DateObject(newDates[0]).format('MMM DD');
    const endDate = newDates[1] ? ` ~ ${new DateObject(newDates[1]).format('MMM DD')}` : '';
  
    return `${startDate}${endDate}`;
  };

  return {
    formattedDateRange,
    handleDatePickerOpen,
    isDatePickerOpen,
    datePickerRef,
    datePickerInputRef,
    datePickerContainerRef,
    datePickerMobileContainerRef,
    datePickerDivRef,
    monthsToShow,
    handleDatePickerMonthChange,
    tripType,
    datesError,
    selectDates,
    newDates,
    toPlace,
  }
}

export const calendarHeader = ({ handleDatePickerOpen }) => {
  return (
    <div className="calendar-header row m-0 border-bottom px-10 py-10">
      <div className="col-12 px-0 d-flex justify-center items-center">
        <FilterSelect filterItemsArr={['Round Trip']} />
      </div>
      <div
        className="position-absolute w-auto"
        style={{ right: '0'}}
      >
        <button
          className={`button text-light-1 bg-blue-1-05 -blue-1 rounded-100 text-12 sm:text-10 d-flex items-center px-8 py-8 sm:px-5 sm:py-5`}
          onClick={() => {
            handleDatePickerOpen('close')
          }}
        >
          <i className="icon-close" />
        </button>
      </div>
    </div>
  )
}

export const calendarFooter = ({ handleDatePickerOpen }) => {
  return (
    <div className="calendar-footer row mx-0 border-bottom py-20 px-20 border-top mt-10">
      <div className="col-12 px-0 d-flex justify-end">
        <button
          className={`button bg-blue-1-05 -dark-1 fw-500 px-16 py-5 rounded-100 text-13 px-8 py-5 sm:px-12 sm:py-8`}
          onClick={() => {
            handleDatePickerOpen('close')
          }}
        >
          Okay
        </button>
      </div>
    </div>
  )
}

export const DesktopDateSearchCalendar = () => {
  const {
    formattedDateRange,
    handleDatePickerOpen,
    isDatePickerOpen,
    datePickerRef,
    datePickerContainerRef,
    datePickerInputRef,
    datePickerDivRef,
    monthsToShow,
    handleDatePickerMonthChange,
    tripType,
    datesError,
    selectDates,
    newDates,
  } = useDateSearch()

  return (
    <div className="searchMenu-date px-24 lg:py-20 md:py-10 lg:px-0 js-form-dd js-calendar">
      <div ref={datePickerContainerRef}>
        <div
          ref={datePickerInputRef}
          className="custom_dual_datepicker cursor-pointer position-relative"
          onClick={() => {
            handleDatePickerOpen()
          }}
        >
          <div className="custom_text-picker text-dark-3 ls-2 lh-14 pb-3">
            Check in - Check out
            {datesError && (
              <span className="text-red-1 text-12 ml-10">{datesError}</span>
            )}
          </div>
          <input
            type="text"
            className="text-15 text-dark-1 ls-2 lh-18 custom_input-picker"
            value={formattedDateRange()}
            readOnly
          />
        </div>

        {/* Conditional rendering for Full Screen Date Picker or Floating Date Picker */}
        {typeof window !== 'undefined' && window?.innerWidth > 768 && (
          <div
            ref={datePickerDivRef}
            className={`shadow-2 dropdown-menu rounded-16 text-light-1 ls-2 lh-16 mt-20 ${isDatePickerOpen ? 'd-block' : ''}`}
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* {calendarHeader({ handleDatePickerOpen })} */}
            <div className="mx-auto">
              <ReusableCalendar
                datePickerRef={datePickerRef}
                newDates={newDates}
                selectDates={selectDates}
                monthsToShow={monthsToShow}
                handleDatePickerMonthChange={handleDatePickerMonthChange}
                tripType={tripType}
              />
            </div>
            {calendarFooter({ handleDatePickerOpen })}
          </div>
        )}
      </div>
    </div>
  )
}

export const MobileDateSearchCalendar = () => {
  const {
    handleDatePickerOpen,
    isDatePickerOpen,
    datePickerRef,
    datePickerMobileContainerRef,
    monthsToShow,
    handleDatePickerMonthChange,
    tripType,
    selectDates,
    newDates,
  } = useDateSearch()

  return (
    <>
      {typeof window !== 'undefined' && window?.innerWidth <= 768 && (
        <>
        <div
          className={`modalMenu js-langMenu ${isDatePickerOpen ? 'd-block' : 'd-none'}`}
        >
          <div className="modalMenu__bg" onClick={() => handleDatePickerOpen('close')}></div>
          <div
            ref={datePickerMobileContainerRef}
            className={`shadow-2 dropdown-menu rounded-16 text-light-1 ls-2 lh-16 d-block`}
            style={{
              top: `50%`,
              left: '50%',
              position: 'fixed',
              transform: 'translateX(-50%) translateY(-50%)',
              zIndex: 1001,
              height: 'fit-content',
              maxHeight: '100vh',
            }}
          >
            {/* {calendarHeader({ handleDatePickerOpen })} */}
            <div className="mx-auto">
              <ReusableCalendar
                datePickerRef={datePickerRef}
                newDates={newDates}
                selectDates={selectDates}
                monthsToShow={monthsToShow}
                handleDatePickerMonthChange={handleDatePickerMonthChange}
                tripType={tripType}
              />
            </div>
            {calendarFooter({ handleDatePickerOpen })}
          </div>
        </div>
        </>
      )}
    </>
  )
}