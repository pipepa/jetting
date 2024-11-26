
'use client'

import { useEffect, useState } from "react";
import HotelsSearchForm from "@/components/search-form/hotels";
import HotelsNavigationBar from "@/components/search-form/hotels/HotelsNavigationBar";

const HotelsSearchFormSticky = ({ hotel }) => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`singleMenu js-singleMenu ${header ? "-is-active" : ""}`}>
      <div className="col-12">
        <div className="py-10 bg-light-5 md:d-none">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <HotelsSearchForm />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* End Search filter top */}

        <div className="singleMenu__content xl:pb-0">
          <div className="container">

          <div className="row item_gap-x10">
            <HotelsNavigationBar />
          </div>

          </div>
          {/* End .container */}
        </div>
        {/* End .singleMenu__content */}
        
      </div>
    </div>
  );
};

export default HotelsSearchFormSticky;
