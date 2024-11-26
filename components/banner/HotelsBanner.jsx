
'use client'

import Image from "next/image";
// import Link from "next/link";
// import { Parallax } from "react-parallax";

const HotelsBanner = () => {
  return (
    // <Parallax
    //   strength={200}
    //   bgImage="/img/misc/hotels.jpg"
    //   bgImageAlt="amazing place"
    //   bgClassName="object-cover"
    // >
      // <div className="section-bg layout-pt-xl layout-pb-xl ctaCard -type-1">
      <div className="layout-pt-xl layout-pb-md -type-1 bg-dark-4">
        <div className="container ">
          <div className="row justify-center text-center">
            <div className="col-12">
              <h2 className="text-white text-40 sm:text-20">
                Compare Hotel Prices from Top Sellers
              </h2>
              <p className="text-22 fw-400">
                We check them so you dont overpay
              </p>
              <div className="row justify-center text-center mt-40">
                <div className="col-auto">
                  <div className="row justify-center text-center">
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/booking-favicon.png" alt="booking favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5"/>
                        Booking.com
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/expedia-favicon.png" alt="expedia favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Expedia
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/hotels.com-favicon.png" alt="hotels.com favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Hotels.com
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/tripadvisor-favicon.png" alt="tripadvisor favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Trip advisor
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/priceline-favicon.png" alt="priceline favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Priceline
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/orbitz-favicon.png" alt="orbitz favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Orbitz
                      </span>
                    </div>
                    <div className="col-auto px-10 py-10">
                      <span className="d-flex items-center bg-white p-2 shadow-3 text-18 lh-12 fw-600 rounded-8">
                        <Image src="/img/partners/travelocity-favicon.png" alt="travelocity favicon" width={24} height={24} className="h-auto ml-0 mx-2 rounded-5" />
                        Travelocity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-inline-block mt-70 sm:mb-30">
                <button class="button -md bg-dark-3 text-dark-1 disabled" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </Parallax>
  );
};

export default HotelsBanner;
