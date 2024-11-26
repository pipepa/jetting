
'use client'

import Link from "next/link";
import { Parallax } from "react-parallax";

const ParallaxBanner = () => {
  return (
    <Parallax
      strength={200}
      bgImage="/img/misc/hotels.jpg"
      bgImageAlt="amazing place"
      bgClassName="object-cover"
    >
      <div className="section-bg layout-pt-xl layout-pb-xl ctaCard -type-1">
        <div className="container ">
          <div className="row justify-center text-center ctaCard__content">
            <div className="col-auto" data-aos="fade">
              {/*<div className="text-white mb-10">Happy Holiday</div>*/}
              <h2 className="text-40 sm:text-20 text-white fw-400">
                Compare Hotel Prices from Top Sellers
              </h2>
              <div className="d-inline-block mt-30">
                <Link
                  href="/"
                  className="button -md -dark-1 bg-white text-dark-1"
                  // target="_blank"
                >
                  COMING SOON
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
