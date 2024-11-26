const AboutIntro = () => {
  return (
    <section className="section-bg layout-pt-lg layout-pb-lg">
      <div className="section-bg__item -right -w-1165 bg-light-2" />
      <div className="section-bg__item -video-left">
        <div className="row y-gap-30">
          <div className="col-sm-6">
            <img src="/img/misc/eiffel-tower.jpg" className="rounded-22 shadow-new" alt="effel tower" />
          </div>
          {/* End .col */}

          <div className="col-sm-6">
            <img src="/img/misc/palm.jpg" className="rounded-22 shadow-new" alt="palm" />
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .section-bg__item */}

      <div className="container lg:mt-30">
        <div className="row">
          <div className="offset-xl-6 col-xl-5 col-lg-6">
            <h2 className="text-30 fw-600">
              Discover Your Next Adventure: Book Flights, Hotels, and More with Ease on Jetting.com
            </h2>
            <p className="text-dark-1 mt-40 lg:mt-20 sm:mt-15">
              Plan your dream getaway effortlessly with our comprehensive travel booking platform. From finding the best deals on flights to securing accommodations at top-rated hotels, we've got you covered. Start exploring now and turn your travel dreams into reality!
            </p>
            <div className="d-inline-block mt-40 lg:mt-30 sm:mt-20">
              <a
                href="/about"
                target="_blank"
                className="button -md -dark-1 bg-dark-4 text-white"
              >
                About Us <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </section>
  );
};

export default AboutIntro;
