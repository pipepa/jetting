import Link from "next/link";
import Image from "next/image";
import { continentsHome } from "../../data/destinations";

const TopDestinations = () => {
  return (
    <>
      {continentsHome.map((item) => (
        <div
          className={item.colClass}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={item.href}
            target="_blank"
            className="citiesCard -type-3 d-block h-full rounded-8"
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <Image
                className="col-12 js-lazy" 
                src={item.img} 
                alt={item.name}
                width={633}
                height={633}
              />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.name}
              </h4>
              <div className="text-15 text-white">
                {item.numberOfCountries} countries
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations;
