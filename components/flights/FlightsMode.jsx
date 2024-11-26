
'use client'

import Image from "next/image";
import ImageGrid from "@/components/common/ImageGrid";
import Loader from "@/components/common/Loader";

const FlightsMode = ({ mode }) => {
  return (
    <div className="row">
      {mode == 'Loading' ? (
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            {/* <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Uniting the Web for Your Flight Search</h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Exploring every corner of the web to fetch the best flight deals
                  </p>
                </div>
              </div>
            </div> */}
            
            <div className="row">
              <Loader />
            </div>

            {/* <div className="justify-center text-center mt-40">
              <Image
                width={340}
                height={340}
                src="/img/flights/loading.svg"
                alt="Jetting Loading"
              />
            </div> */}

          </div>
        </section>
      ) : (
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Fly Further, Fly Freely</h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Explore, Book, and Jet Away with Jetting.com - Your Trusted Flight Aggregator
                  </p>
                </div>
              </div>
            </div>

            <div className="justify-center text-center">
              <Image
                width={400}
                height={400}
                src="/img/flights/flight-travel.svg"
                alt="Jetting Flights"
              />
            </div>

            <div className="row y-gap-30 pt-40 sm:pt-20">
              <ImageGrid opacity="0.1" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
  
export default FlightsMode;
