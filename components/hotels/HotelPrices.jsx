
'use client'

import { useState } from "react"
import Image from "next/image"
import { formatSkyscannerImageUrl } from "@/helpers/skyscanner"
// import { pluralize } from "@/helpers/main"

const HotelPrices = ({ prices }) => {
  const [click, setClick] = useState(false);
  const handlePrices = () => {
    setClick((prevState) => !prevState)
    
    if (click) {
      document.body.classList.remove("overflow-y-hidden")
    } else {
      document.body.classList.add("overflow-y-hidden")
    }
  };

  const tempPrices = [
    { item: 1, price: 100, deepLink: "/", src: "/img/providers-hotels/booking.svg" },
    { item: 2, price: 125, deepLink: "/", src: "/img/providers-hotels/expedia.svg" },
    { item: 3, price: 135, deepLink: "/", src: "/img/providers-hotels/hotels.svg" },
    { item: 4, price: 150, deepLink: "/", src: "/img/providers-hotels/skyscanner.svg" },
    { item: 5, price: 200, deepLink: "/", src: "/img/providers-hotels/tickets.svg" },
    { item: 6, price: 225, deepLink: "/", src: "/img/providers-hotels/hostelworld.svg" },
  ];

  return (
    <>
      {prices.length ==  1 ? (
        <div className="col-auto">
          <a 
            className={`button px-30 h-50 -dark-1 bg-dark-4 text-white`}
            href={`/`}
            target="_blank"
          >
            <span className="js-details-mainTitle">
              Select
            </span>
            <div className="icon-arrow-top-right text-13 ml-15"></div>
          </a>
        </div>
      ) : (
        <>
        {/* Start Prices button */}
        <div className="col-auto d-flex justify-content-end md:justify-start">
          <button 
            // className={`button px-30 h-50 -dark-1 bg-dark-4 text-white float-right`}
            className={`button -md -outline-dark-1 text-black`}
            onClick={handlePrices}
          >
            <span className="js-details-mainTitle">
              Prices
            </span>
            <div className="icon-arrow-top-right text-13 ml-15"></div>
          </button>
        </div>
        {/* End Details button */}

        <div className={`flightDetails js-flightDetails ${click ? "" : "is-hidden"}`}>
          <div className="flightDetails__bg" onClick={handlePrices}></div>
          <div className="flightDetails__content rounded-22">
            
            {/* <div className="bg-white d-flex items-center justify-between px-30 py-20 sm:px-20 border-bottom-light">
              <div className="text-20 fw-500 lh-15">{pluralize(deals.length, 'Offer: ', 'Offers: ')}{deals.length}</div>
              <button className="pointer" onClick={handlePrices}>
                <i className="icon-close" />
              </button>
            </div> */}

            <div className="bg-white px-20 py-20 sm:px-5 sm:py-15 rounded-16">
              <ul className="y-gap-5 js-results">
                {tempPrices.map((item) => (
                  <li
                    className="-hover-shadow-new cursor-pointer js-item rounded-16"
                    key={item.id}
                  >
                    <div className="py-10 px-15 sm:px-5 sm:py-5">
                      <a 
                        className="row y-gap-10 items-center"
                        // href={`${item.items[0].deepLink}`}
                        href={`${item.deepLink}`}
                        target="_blank">
                        
                        <div className="col px-20">
                          <Image
                            className=""
                            width="100"
                            height="50"
                            // src={formatSkyscannerImageUrl(item.agents[0].name, item.agents[0].src)}
                            // alt={`${item.agents[0].name}`}
                            src={formatSkyscannerImageUrl(item.name, item.src)}
                            alt={`${item.name}`}
                          />
                        </div>
                        <div className="col px-20">
                          <div className="text-16 fw-700 text-dark-1 px-20 md:px-10">
                            <span className="js-title">$&nbsp;{item.price}</span>
                          </div>
                        </div>
                        <div className="col px-20">
                          <div className="button -dark-1 h-40 px-20 rounded-16 bg-blue-1-05 text-15 text-dark-1" >
                            Select
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default HotelPrices;
