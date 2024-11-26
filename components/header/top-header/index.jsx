import Link from "next/link";

const HeaderBanner = () => {
  return (
    <section className="header-banner py-5 bg-dark-4 sm:d-none">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="col-auto">
              <p
                className="text-12 text-white"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                We're still working on translating into other languages. Please don't be too hard on us 🙏
              </p>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default HeaderBanner;
