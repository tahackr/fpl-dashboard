import { itemCount } from "../utils/paginationItemCount";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

function usePagination(page, length, setPage) {
    if (!length) return;

    const totalPages = Math.ceil(length / itemCount);

    const getCurrentPage = (key) => (
        <span
            className="font-black flex items-center justify-center w-8 h-8 rounded-full"
            key={key}
        >
            {page}
        </span>
    );

    const getNextPage = (value = 1, key) => (
        <span
            onClick={() => setPage((prev) => prev + value)}
            className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
            key={key}
        >
            {page + value}
        </span>
    );

    const getPrevPage = (value = 1, key) => (
        <span
            onClick={() => setPage((prev) => prev - value)}
            className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
            key={key}
        >
            {page - value}
        </span>
    );

    const getPageNumbers = () => {
        if (totalPages < 5) {
            return new Array(totalPages).fill(1).map((_, i) => {
                if (i + 1 === page) return getCurrentPage(i);
                if (i + 1 < page) return getPrevPage(page - (i + 1), i);
                if (i + 1 > page) return getNextPage(i + 1 - page, i);
            });
        }

        if (page >= 3 && page <= totalPages - 2) {
            return (
                <>
                    {getPrevPage(2)}
                    {getPrevPage()}
                    {getCurrentPage()}
                    {getNextPage()}
                    {getNextPage(2)}
                </>
            );
        }

        if (page === 2) {
            return (
                <>
                    {getPrevPage()}
                    {getCurrentPage()}
                    {getNextPage()}
                    {getNextPage(2)}
                    {getNextPage(3)}
                </>
            );
        }

        if (page === totalPages - 1) {
            return (
                <>
                    {getPrevPage(3)}
                    {getPrevPage(2)}
                    {getPrevPage()}
                    {getCurrentPage()}
                    {getNextPage()}
                </>
            );
        }

        if (page === 1) {
            return (
                <>
                    {getCurrentPage()}
                    {getNextPage()}
                    {getNextPage(2)}
                    {getNextPage(3)}
                    {getNextPage(4)}
                </>
            );
        }

        if (page === totalPages) {
            return (
                <>
                    {getPrevPage(4)}
                    {getPrevPage(3)}
                    {getPrevPage(2)}
                    {getPrevPage()}
                    {getCurrentPage()}
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
