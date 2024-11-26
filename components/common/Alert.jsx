import Image from "next/image";

const Alert = () => {
  return (
    <div className="col-12">
      <div className="px-24 py-20 rounded-22 flightsCard">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <div className="flex-center">
              <Image
                width={70}
                height={70}
                src="/img/badges/bestprice.png"
                alt="Best Price Guarantee"
              />
            </div>
          </div>
          <div className="col-auto">
            <h4 className="text-18 lh-15 fw-500">
              Exclusive Best Price Guarantee: Book Your Travel with Confidence
            </h4>
            <div className="text-15 lh-15">
              Explore unbeatable deals and secure your travel at the lowest rates possible. Plan your next adventure with confidence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;