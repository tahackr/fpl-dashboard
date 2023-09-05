function usePagination(pageNum, totalPages, setPageNum) {
    if (pageNum >= 3 && pageNum <= totalPages - 2) {
        return (
            <>
                <span
                    onClick={() => setPageNum((prev) => prev - 2)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum - 2}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev - 1)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum - 1}
                </span>
                <span className="font-bold flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer">
                    {pageNum}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev + 1)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum + 1}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev + 2)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum + 2}
                </span>
            </>
        );
    }

    if (pageNum === 2 || pageNum === totalPages - 1) {
        return (
            <>
                <span
                    onClick={() => setPageNum((prev) => prev - 1)}
                    className="ml-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum - 1}
                </span>
                <span className="font-bold flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer">
                    {pageNum}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev + 1)}
                    className="mr-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum + 1}
                </span>
            </>
        );
    }

    if (pageNum === 1) {
        return (
            <>
                <span className="ml-10 font-bold flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer">
                    {pageNum}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev + 1)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum + 1}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev + 2)}
                    className="mr-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum + 2}
                </span>
            </>
        );
    }

    if (pageNum === totalPages) {
        return (
            <>
                <span
                    onClick={() => setPageNum((prev) => prev - 2)}
                    className="ml-10 font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum - 2}
                </span>
                <span
                    onClick={() => setPageNum((prev) => prev - 1)}
                    className="font-medium flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                    {pageNum - 1}
                </span>
                <span className="mr-10 font-bold flex items-center justify-center w-8 h-8 hover:bg-gray-300 rounded-full cursor-pointer">
                    {pageNum}
                </span>
            </>
        );
    }
}

export default usePagination;
