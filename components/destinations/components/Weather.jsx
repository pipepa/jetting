const Weather = ({ weather }) => {

  return (
    <>
      <div className="col-xl-12">
        <h2 className="text-22 fw-500">Average temperature by season</h2>
      </div>

      {Object.keys(weather).map((season) => (
        <div className="col-xl-3 col-6" key={season}>
          <div className="lh-1 text-capitalize">{season}</div>
          <div className="text-15 fw-500 mt-10">
          <p>{weather[season].celsius}</p>
          <p>{weather[season].fahrenheit}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Weather;
