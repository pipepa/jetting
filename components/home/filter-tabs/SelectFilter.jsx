const SelectFilter = ({ sortingOption, setSortingOption }) => {
  return (
    <select
      className="tabs__button border-light text-14 fw-500 rounded-8 w-min-80 js-tabs-button"
      onChange={(e) => setSortingOption(e.target.value)}
      style={{
        padding: '8px',
      }}
    >
      <option value="best" selected={sortingOption === "best" ? "selected" : ""}>Best</option>
      <option value="price-asc" selected={sortingOption === "price-asc" ? "selected" : ""}>Cheapest</option>
      <option value="price-desc" selected={sortingOption === "price-desc" ? "selected" : ""}>Most Expensive</option>
      {/* <option value="start-rating-asc" selected={sortingOption === "start-rating-asc" ? "selected" : ""}>Star Rating (Low to High)</option>
      <option value="start-rating-desc" selected={sortingOption === "start-rating-desc" ? "selected" : ""}>Star Rating (High to Low)</option>
      <option value="distance-asc" selected={sortingOption === "distance-asc" ? "selected" : ""}>Distance to Downtown (Low to High)</option>
      <option value="distance-desc" selected={sortingOption === "distance-desc" ? "selected" : ""}>Distance to Downtown (High to Low)</option> */}
      <option value="guest-rating-desc" selected={sortingOption === "guest-rating-desc" ? "selected" : ""}>Highest Rated</option>
    </select>
  );
};

export default SelectFilter;
