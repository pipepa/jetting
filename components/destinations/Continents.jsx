import Link from "next/link";
import { continents } from "../../data/destinations";

const Continents = () => {
  return (
    <>
      {continents.map((item) => (
        <div
          className={item.colClass}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={item.href}
            className="citiesCard -type-3 d-block h-full rounded-8 "
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <img className="col-12 js-lazy" src={item.img} alt={item.name} />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white">
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

export default Continents;
