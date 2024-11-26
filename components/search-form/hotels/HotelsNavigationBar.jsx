
'use client'

import Link from "next/link";
import Slider from "react-slick";
import { bestHotelsData } from "../../../data/hotels";

const HotelsNavigationBar = ({ city }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>      
      {bestHotelsData.slice(0, 7).map((item) => (
        <div
          className="col-xl col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={item?.link}
            target="_blank"
            rel="nofollow noopener noreferrer sponsored"
            className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-5 py-5 sm:py-0 -dark-4 bg-blue-1-05 text-black rounded-8"
          >
            
            <div className="col-auto">
              <div className="flex-center fw-600 text-14 size-30">
                {item?.ratings}
              </div>
            </div>
            <div className="ml-5 sm:ml-0 text-truncate">
              <div className="text-12 fw-500 lh-15 sm:lh-10 text-truncate">{item.title}</div>
              <p className="text-12">from ${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default HotelsNavigationBar;
