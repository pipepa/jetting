
'use client'

import { about } from "../../data/about";
import Slider from "react-slick";
import Link from "next/link";

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
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
      {about.map((item) => (
        <div
          className="col-xl-2 col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          {item.href ? (
            <Link href={item.href}>
              <div className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-100 mx-auto">
                  <img
                    className="object-cover js-lazy"
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
                <div className="citiesCard__content mt-10">
                  <h3 className="text-16 lh-13 fw-500 text-dark-4">
                    {item.name}
                  </h3>
                </div>
              </div>
            </Link>
          ) : (
            <div className="citiesCard -type-4 d-block text-center">
              <div className="citiesCard__image size-100 mx-auto">
                <img
                  className="object-cover js-lazy"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h3 className="text-16 lh-13 fw-500 text-dark-4">
                  {item.name}
                </h3>
              </div>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Services;
