const popularFilters = () => {
  const filters = [
    { label: "Breakfast Included", count: 92 },
    { label: "Romantic", count: 45 },
    { label: "Airport Transfer", count: 21 },
    { label: "WiFi Included", count: 78 },
    { label: "5 Star", count: 79 },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className="row items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="ml-10">{filter.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-light-1">{filter.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default popularFilters;
