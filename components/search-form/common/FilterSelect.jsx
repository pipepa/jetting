
'use client'

import Image from "next/image";

import { useSearchForm } from '@/components/search-form/flights/FlightsSearchProvider';

const FilterSelect = ({ filterItemsArr = [], textClass = '' }) => {
  const { tripType, handleTripTypeTypeChange} = useSearchForm()
  const { classType, setClassType } = useSearchForm()
  const { hotelsSearch, setHotelsSearch } = useSearchForm()

  const handleClassTypeChange = (value) => {
    setClassType(value);
  };

  const handleHotelsSearchChange = () => {
    setHotelsSearch(hotelsSearch == 'true' ? 'false' : 'true')
    console.log('hotelsSearch', hotelsSearch)
  }

  const dropdownOptions = [
    // {
    //   title: "Round Trip",
    //   value: tripType,
    //   list: [
    //     { label: "Round Trip" },
    //     { label: "One Way" },
    //   ],
    //   onChange: handleTripTypeTypeChange,
    // },
    {
      title: "Economy",
      value: classType,
      list: [
        { label: "Economy" },
        { label: "Premium economy" },
        { label: "Business class" },
        { label: "First class" }
      ],
      onChange: handleClassTypeChange,
    },
    {
      title: "Show Hotels",
      value: hotelsSearch,
      type: 'checkbox',
      onChange: handleHotelsSearchChange,
    },
  ];

  return (
    <>
      {dropdownOptions.map((option, index) => {
        if (filterItemsArr.length == 0 || filterItemsArr.includes(option.title)) {
          return (
            <>
            {option.type == 'checkbox' ? (
              <div className="col-auto" key={index}>
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    checked={option.value == 'true'}
                    onChange={option.onChange}
                  />
                  <div className="form-checkbox__mark checkbox-white col-auto p-0">
                    <div className="form-checkbox__icon icon-check"></div>
                  </div>


                  <div
                    className="position-absolute"
                    style={{left: '10px', top: '-14px' }}
                  >
                    <div
                      className={`text-12 lh-15 fw-500 flex-center text-center bg-info-1 text-dark rounded-8`}
                      style={{ padding: '1px 14px', whiteSpace: 'nowrap' }}
                    >
                      <span>&nbsp;soon on Jetting&nbsp;</span>
                      <Image
                        width={17}
                        height={17}
                        src="/img/misc/flame.webp"
                        alt="Jetting Hotels"
                        className={`pb-2`}
                      />
                    </div>
                  </div>

                  <div className={`ml-10 ${textClass}`}>{option.title}</div>
                </div>
              </div>
            ) : option.type == 'buttons' ? (
                <div
                  className="d-flex items-center"
                  key={index}
                >
                  {option.list.map((item, index) => (
                    <div
                      key={index}
                      role="button"
                      className={`${item.label === option.value ? "bg-blue-1 text-white" : "bg-blue-3 text-blue-1"} border-blue-1 text-14 sm:text-13 px-12 py-5 ${index == 0 ? 'rounded-left-8' : ''} ${index == option.list.length - 1 ? 'rounded-right-8' : ''}`}
                      onClick={() => option.onChange(item.label)}
                    >
                      {t(`search_form.${item.label}`)}
                    </div>
                  ))}
                </div>
              ) : (
              <div className="col-auto" key={index}>
                <div className="dropdown js-dropdown">
                  <div
                    className="dropdown__button d-flex items-center text-13 text-uppercase"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    data-bs-offset="0,0"
                  >
                    <span className={`js-dropdown-title ${textClass}`}>{option.value}</span>
                    <i className={`icon icon-chevron-sm-down text-7 ml-10 ${textClass}`} />
                  </div>
                  <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
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
              )}
            </>
          )
        }
      })}
    </>
  );
};

export default FilterSelect;
