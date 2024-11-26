
'use client'

const SearchBox = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Your search logic here
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="single-field relative d-flex items-center">
        <input
          className="pl-50 border-light text-dark-1 h-50 rounded-8"
          type="text"
          placeholder="Name or Location"
          required
        />
        <button type="submit" className="absolute d-flex items-center h-full">
          <i className="icon-search text-20 px-15 text-dark-1" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
