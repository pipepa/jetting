
import Image from "next/image";

const HotelProviders = () => {
  const providers = [
    {
      item: 1,
      src: "/img/providers-hotels/skyscanner.svg",
      alt: "Skyscanner",
      price: 86,
    },
    {
      item: 2,
      src: "/img/providers-hotels/expedia.svg",
      alt: "Expedia",
      price: 97,
    },
    {
      item: 3,
      src: "/img/providers-hotels/booking.svg",
      alt: "Booking.com",
      price: 120,
    },
    {
      item: 4,
      src: "/img/providers-hotels/hotels.svg",
      alt: "Hotels.com",
      price: 150,
    },
    {
      item: 5,
      src: "/img/providers-hotels/hostelworld.svg",
      alt: "hostelworld",
      price: 155,
    },
    {
      item: 6,
      src: "/img/providers-hotels/cruise-direct.svg",
      alt: "cruisedirect",
      price: 184,
    },
  ];
  return (
    <>
      <div className="row x-gap-20 y-gap-10 mt-15">
        {providers.map((item, i) => (
          <div className="col-auto" key={i}>
            <Image
              width={120}
              height={68} 
              className="h-28"
              src={item.src} 
              alt={item.alt} 
            />
            <div class="text-13 text-light-1">$&nbsp;{item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelProviders;
