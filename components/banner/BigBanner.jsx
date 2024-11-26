import Link from "next/link"

const BigBanner = ({ bannerItem, link }) => {
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <img
          src={bannerItem.img}
          alt={bannerItem.name}
          className="col-12 rounded-22 object-cover"
          style={{ minHeight: "400px", maxHeight: '85vh' }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            Explore {bannerItem.name}
          </h1>
          <h2 className="text-16 fw-400 text-white pt-10">
            Explore deals, travel guides and things to do in {bannerItem.name}
          </h2>
        </div>
        <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
          <div className="position-relative">
            <div
              className="pl-5 position-absolute"
              style={{left: '0', top: '-5px' }}
            >
              <div
                className={`text-12 lh-15 fw-500 flex-center text-center bg-info-1 text-dark rounded-8`}
                style={{ padding: '1px 5px', whiteSpace: 'nowrap' }}
              >
                <span>&nbsp;new 🤟</span>
              </div>
            </div>
          
            {link.href && link.text && (
              <Link
                href={link.href}
                target="_blank"
                className="button -md -dark-1 bg-white"
              >
                {link.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
