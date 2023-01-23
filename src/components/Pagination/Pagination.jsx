import { getPagesArray } from '../../Utils/PageFunctions'
import styles from './Pagination.module.scss'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className=" flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 mb-10 sm:px-6 rounded-2xl shadow-md">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="/#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="/#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{page}</span> to <span className="font-medium">20</span> of{' '}
            <span className="font-medium">{totalPages}</span> results
          </p> */}
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="/#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200  focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() => changePage(page - 1)}
              />
            </a>

            {pagesArray.map((p) =>
              p < 9 ? (
                <a
                  key={p}
                  onClick={() => changePage(p)}
                  href="/#"
                  className={`${
                    p === page && styles.active
                  } relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-orange-400 focus:z-20`}
                >
                  {p}
                </a>
              ) : null
            )}
            <a
              href="/#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() => changePage(page + 1)}
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export { Pagination }
