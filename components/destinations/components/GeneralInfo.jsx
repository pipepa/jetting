const GeneralInfo = ({ info }) => {
  return (
    <>
      <div className="col-12">
        <h2 className="text-22 fw-500">General Information</h2>
      </div>
      <div className="col-xl-3 col-6">
        <div className="">Time Zone</div>
        <div className="fw-500">{info.timezone.range}</div>
        <div className="text-13 text-light-1">{info.timezone.note}</div>
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-6">
        <div className="">Demographics</div>
        <div className="row y-gap-20">
          <div className="col-auto">
            <div className="fw-500">Countries</div>
            <div className="text-13 text-light-1">
              {info.demographics.countries}
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="fw-500">Population</div>
            <div className="text-13 text-light-1">
              {info.demographics.population}
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-6">
        <div className="">Tourist Arrivals</div>
        <div className="fw-500">{info.tourists.range}</div>
        <div className="text-13 text-light-1">{info.tourists.note}</div>
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-6">
        <div className="">Heritage Attractions</div>
        <div className="fw-500">{info.heritage.range}</div>
        <div className="text-13 text-light-1">{info.heritage.note}</div>
      </div>
      {/* End .col */}
    </>
  );
};

export default GeneralInfo;
