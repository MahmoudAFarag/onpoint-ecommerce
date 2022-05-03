interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }: PaginationProps) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 pt-4 '>
      <div className='flex flex-1 items-center justify-between'>
        <div>
          <p className='text-xs text-gray-700 md:text-sm'>
            Showing
            <span className='mx-1 font-medium'>{currentPage}</span>
            to
            <span className='mx-1 font-medium'>{pageCount}</span>
            of
            <span className='mx-1 font-medium'>{itemsCount}</span>
            results
          </p>
        </div>
        <div>
          <nav className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            {pages.map((page) => {
              return (
                <button
                  type='button'
                  {...(page === currentPage ? { 'aria-current': 'page' } : {})}
                  className={`relative inline-flex items-center border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-500 md:px-4 md:py-2 md:text-base ${
                    page === currentPage ? 'z-10 border-gray-500 bg-amber-400 text-black hover:bg-amber-400' : ''
                  }`}
                  key={page}
                  onClick={(e) => onPageChange(e, page)}
                >
                  {page}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
