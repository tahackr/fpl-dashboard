import { itemCount } from "../utils/paginationItemCount";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

function usePagination(page, length, setPage) {
    const totalPages = Math.ceil(length / itemCount);

    const getPageNumbers = () => {
        if (page >= 3 && page <= totalPages - 2) {
            return (
                <>
                    <span
                        onClick={() => setPage((prev) => prev - 2)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page - 2}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev - 1)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page - 1}
                    </span>
                    <span className="font-black scale-125 flex items-center justify-center w-8 h-8 rounded-full">
                        {page}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev + 1)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page + 1}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev + 2)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page + 2}
                    </span>
                </>
            );
        }

        if (page === 2 || page === totalPages - 1) {
            return (
                <>
                    <span
                        onClick={() => setPage((prev) => prev - 1)}
                        className="ml-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page - 1}
                    </span>
                    <span className="font-black scale-125 flex items-center justify-center w-8 h-8 rounded-full">
                        {page}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev + 1)}
                        className="mr-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page + 1}
                    </span>
                </>
            );
        }

        if (page === 1) {
            return (
                <>
                    <span className="ml-10 font-black scale-125 flex items-center justify-center w-8 h-8 rounded-full">
                        {page}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev + 1)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page + 1}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev + 2)}
                        className="mr-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page + 2}
                    </span>
                </>
            );
        }

        if (page === totalPages) {
            return (
                <>
                    <span
                        onClick={() => setPage((prev) => prev - 2)}
                        className="ml-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page - 2}
                    </span>
                    <span
                        onClick={() => setPage((prev) => prev - 1)}
                        className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                    >
                        {page - 1}
                    </span>
                    <span className="mr-10 font-black scale-125 flex items-center justify-center w-8 h-8 rounded-full">
                        {page}
                    </span>
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
