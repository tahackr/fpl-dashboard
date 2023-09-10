import { itemCount } from "../utils/paginationItemCount";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

function usePagination(page, length, setPage) {
    const totalPages = Math.ceil(length / itemCount);

    const currentPage = (
        <span className="font-black flex items-center justify-center w-8 h-8 rounded-full">
            {page}
        </span>
    );

    const getNextPage = (value = 1) => (
        <span
            onClick={() => setPage((prev) => prev + value)}
            className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
        >
            {page + value}
        </span>
    );

    const getPrevPage = (value = 1) => (
        <span
            onClick={() => setPage((prev) => prev - value)}
            className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
        >
            {page - value}
        </span>
    );

    const getPageNumbers = () => {
        if (totalPages === 1) {
            return currentPage;
        }
        if (totalPages === 2) {
            return page < totalPages ? (
                <>
                    {currentPage}
                    {getNextPage()}
                </>
            ) : (
                <>
                    {getPrevPage()}
                    {currentPage}
                </>
            );
        }

        if (page >= 3 && page <= totalPages - 2) {
            return (
                <>
                    {getPrevPage(2)}
                    {getPrevPage()}
                    {currentPage}
                    {getNextPage()}
                    {getNextPage(2)}
                </>
            );
        }

        if (page === 2 || page === totalPages - 1) {
            return (
                <>
                    {getPrevPage()}
                    {currentPage}
                    {getNextPage()}
                </>
            );
        }

        if (page === 1) {
            return (
                <>
                    {currentPage}
                    {getNextPage()}
                    {getNextPage(2)}
                </>
            );
        }

        if (page === totalPages) {
            return (
                <>
                    {getPrevPage(2)}
                    {getPrevPage()}
                    {currentPage}
                </>
            );
        }
    };

    return (
        <div className="flex p-4 gap-2 items-center justify-center">
            <button disabled={page === 1}>
                <BiFirstPage
                    className={`${page === 1 ? "" : "hover:fill-blue-600"}`}
                    onClick={() => setPage(1)}
                    size={"1.5rem"}
                />
            </button>
            {getPageNumbers()}
            <button
                onClick={() => setPage(Math.ceil(length / itemCount))}
                disabled={Math.ceil(length / itemCount) === page}
            >
                <BiLastPage
                    className={`${
                        page === Math.ceil(length / itemCount)
                            ? ""
                            : "hover:fill-blue-600"
                    }`}
                    size={"1.5rem"}
                />
            </button>
        </div>
    );
}

export default usePagination;
