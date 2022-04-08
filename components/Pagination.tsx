interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => void;
}

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }: PaginationProps) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
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
                <a
                  href='#'
                  {...(page === currentPage ? { 'aria-current': 'page' } : {})}
                  className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                    page === currentPage ? 'z-10 border-indigo-500 text-indigo-600' : ''
                  }`}
                  key={page}
                  onClick={(e) => onPageChange(e, page)}
                >
                  {page}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
