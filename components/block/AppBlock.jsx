const AppBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15">Our Upcoming Apps</h2>
      <p className="text-dark-1 pr-40 lg:pr-0 mt-15 sm:mt-5">
        Stay tuned for our exciting new apps! Get ready to experience seamless travel planning and booking on the go. Coming soon to revolutionize your journey.
      </p>

      <div className="row items-center y-gap-20 pt-30 sm:pt-20">
        <div className="col-auto">
          <div className="d-flex items-center px-20 pt-10 pb-15 rounded-16 text-white bg-dark-5 w-min-200">
            <div className="icon-apple text-24" />
            <div className="ml-20">
              <div className="">Download on the</div>
              <div className="text-15 lh-1 fw-500">Apple Store</div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="d-flex items-center px-20 pt-10 pb-15 rounded-16 text-white bg-dark-5 w-min-200">
            <div className="icon-play-market text-24" />
            <div className="ml-20">
              <div className="">Get it on</div>
              <div className="lh-1 fw-500">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default AppBlock;
