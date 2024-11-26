
'use client'

import Slider from "react-slick"

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  const catContent = [
    { id: 7, icon: "icon-tickets", catName: " Flights", url: '/flights' },
    { id: 1, icon: "icon-bed", catName: "Hotels", url: '' },
    { id: 5, icon: "icon-car", catName: "Cars", url: '' },
    { id: 6, icon: "icon-yatch", catName: " Cruises", url: '' },
    { id: 2, icon: "icon-destination", catName: "Tours", url: '' },
    { id: 4, icon: "icon-ski", catName: "Activities", url: '' },
    { id: 5, icon: "icon-home", catName: "Holiday Rentals", url: '' },
  ];
  return (
    <Slider {...settings}>
      {catContent.map((item) => (
        <div className="col" key={item.id}>
          <div
            className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light lh-14 col-12"
          >
            <i className={`${item.icon} text-25 mb-10`} />
            {item.catName}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Categories;
