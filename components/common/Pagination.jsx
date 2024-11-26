'use client'

const Pagination = ({ 
  canPaginate, 
  maxPage, 
  currentPage, 
  setCurrentPage, 
  onClick,
  id = '' 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (setCurrentPage && currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    canPaginate && (!maxPage || currentPage < maxPage) && (
      <div className="d-flex justify-center mt-30">
        <button
          id={id}
          className="button -md -dark-1 bg-light text-dark-1" 
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    )
  )
}

export default Pagination
