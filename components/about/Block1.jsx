import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-5">
        <h2 className="text-30 fw-600"><a href="https://jetting.com/">Jetting Aggregator</a></h2>
        <h3 className="text-14 fw-400 mt-5">Flights, Hotels, and Beyond in Travel Planning</h3>
        <p className="text-dark-1 mt-40 xl:mt-30 lg:mt-20">
          Say hello to Jetting Aggregator! At Jetting, we're all about making your travel planning as easy and enjoyable as possible. Imagine having all the best travel options at your fingertips without the hassle of hopping from one website to another. That’s what we do! We gather all the top deals on flights, hotels, and more from across the web and bring them straight to you.
          <br />
          <br />
          So, why wait? Let Jetting Aggregator turn your travel dreams into reality with just a few clicks! Join us, and let's jet-set together!
        </p>
      </div>
      {/* End .col */}

      <div className="col-xl-5 col-lg-5">
        <Image
          width={400}
          height={400}
          src="/img/about/about.png"
          alt="Jetting About"
          className="rounded-22 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
