const neighborhoods = [
  { name: "Central London", count: 92 },
  { name: "Guests' favourite area", count: 45 },
  { name: "Westminster Borough", count: 21 },
  { name: "Kensington and Chelsea", count: 78 },
  { name: "Oxford Street", count: 679 },
];

const NeighborhoodFilter = () => {
  return (
    <>
      {neighborhoods.map((neighborhood, index) => (
        <div className="row items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="ml-10">{neighborhood.name}</div>
            </div>
          </div>
          {/* End .col */}
          <div className="col-auto">
            <div className="text-light-1">{neighborhood.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NeighborhoodFilter;
